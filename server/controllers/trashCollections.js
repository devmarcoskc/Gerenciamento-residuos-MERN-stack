import TrashCollection from "../models/TrashCollect.js";
import GeneralStats from "../models/GeneralStats.js";

export const createTrashCollection = async (req, res) => {
    try {        
        const {orgaoId, nomeDaRota, nomeDoBairro, coletaSeletiva, totalResiduos, data, residuoPorCategoria} = req.body;
        
        const findBD = await GeneralStats.find({orgaoId});

        if(findBD.length === 0) {

            const newGeneralStats = new GeneralStats({
                orgaoId: orgaoId,
                totalResiduos: totalResiduos,
                totalResiduosPorCategoria: residuoPorCategoria
            });
            
            const newTrashCollection = new TrashCollection({
                orgaoId,
                nomeDaRota,
                nomeDoBairro,
                coletaSeletiva,
                totalResiduos,
                data,
                residuoPorCategoria
            });

            const savedTrashCollection = await newTrashCollection.save();
            const savedGeneralStats = await newGeneralStats.save();
           
            res.status(201).json({savedGeneralStats, savedTrashCollection});
            
        } else {
            const newTrashCollection = new TrashCollection({
                orgaoId,
                nomeDaRota,
                nomeDoBairro,
                coletaSeletiva,
                totalResiduos,
                data,
                residuoPorCategoria
            });
                
            const generalStats = await GeneralStats.find({orgaoId});
            generalStats[0].totalResiduos = generalStats[0].totalResiduos + totalResiduos;
                
            residuoPorCategoria.map((residuoCollection) => {
                generalStats[0].totalResiduosPorCategoria.map((residuoGeneral) => {
                    if(residuoCollection.categoria === residuoGeneral.categoria) {
                        return residuoGeneral.quantidade = residuoCollection.quantidade + residuoGeneral.quantidade;
                    }
                });
            });

            for(let i in generalStats[0].totalResiduosPorCategoria) {
                residuoPorCategoria.filter((residuoCollection) => {
                    if(generalStats[0].totalResiduosPorCategoria[i].categoria === residuoCollection.categoria) {
                        let index = residuoPorCategoria.indexOf(residuoCollection);
                        residuoPorCategoria.splice(index, 1);
                        return;
                    }
                });
            };
            
            residuoPorCategoria.map((residuosLeft) => {
                generalStats[0].totalResiduosPorCategoria.push(residuosLeft);
            });
            
            const savedGeneralStats = await generalStats[0].save();
            const savedTrashCollection = await newTrashCollection.save();
            res.status(201).json({savedGeneralStats, savedTrashCollection});
        }
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

export const getTrashCollections = async (req, res) => {
    try {
        const {orgaoId} = req.params;

        const trashCollections = await TrashCollection.find({orgaoId}).sort({createdAt:-1});

        res.status(200).json(trashCollections);
    } catch(error) {
        res.status(404).json({error: error.message});
    }
}

export const getTrashCollectionsByAddress = async (req, res) => {
    try {
        const {orgaoId} = req.params;
        const {addressEncoded} = req.params;

        const address = decodeURI(addressEncoded);

        const trashCollections = await TrashCollection.find({orgaoId: orgaoId, nomeDoBairro:address});
        if(trashCollections.length === 0) return res.status(200).json({msg: "Bairro não encontrado"});

        const totalResiduos = trashCollections.reduce((result, quantity) => {
            return (result + quantity.totalResiduos);
        }, 0);

        let ResiduosLeft = [];
        let index = trashCollections.length;
        for(let i=1; i < index; i++) {
            trashCollections[i].residuoPorCategoria.map((residuo) => {
                trashCollections[0].residuoPorCategoria.map((residuoBase) => {
                    if(residuo.categoria === residuoBase.categoria) {
                        residuoBase.quantidade = residuo.quantidade + residuoBase.quantidade;
                        let indexToSplit = trashCollections[i].residuoPorCategoria.indexOf(residuo);
                        trashCollections[i].residuoPorCategoria.splice(indexToSplit, 1);
                        trashCollections[i].residuoPorCategoria.filter((residuosLeft) => {
                            ResiduosLeft.push(residuosLeft);
                        })
                    }
                });
            });
        }
        
        let totalResiduosPorCategoria = [];
        ResiduosLeft.filter((residuo) => {
            totalResiduosPorCategoria.push(residuo);
        });
        trashCollections[0].residuoPorCategoria.filter((residuo) => {
            totalResiduosPorCategoria.push(residuo);
        });
    
        const generalStats = {
            orgaoId,
            totalResiduos,
            totalResiduosPorCategoria,
            bairro: address,
            coletas: trashCollections.length
        }
        
        res.status(200).json(generalStats);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}