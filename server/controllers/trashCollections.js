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
        const {address, date} = req.query;

        async function checkIfQuerysExists(address, date) {
            if(address !== "" && date === "") {
                return await TrashCollection.find({orgaoId: orgaoId, nomeDoBairro: {$regex:address}});
            }
            if(address === "" && date !== "") {
                return await TrashCollection.find({orgaoId: orgaoId, data: {$regex:date}});
            }

            return await TrashCollection.find({orgaoId: orgaoId, nomeDoBairro: {$regex:address}, data: {$regex: date}});
        }

        const trashCollections = await checkIfQuerysExists(address, date);
        if(trashCollections.length === 0) return res.status(200).json({msg: "Nenhum item encontrado!"});

        const totalResiduos = trashCollections.reduce((result, quantity) => {
            return (result + quantity.totalResiduos);
        }, 0);

        let resultado = [];
        trashCollections.forEach((item) => {
          item.residuoPorCategoria.forEach((residuo) => {
            let index = resultado.findIndex((element) => element.categoria === residuo.categoria);
        
            if (index === -1) {
              resultado.push({ categoria: residuo.categoria, quantidade: residuo.quantidade });
            } else {
              resultado[index].quantidade += residuo.quantidade;
            }
          });
        });
        
        const generalStats = {
            orgaoId,
            totalResiduos,
            totalResiduosPorCategoria: resultado,
            filtros: {
                bairro: address,
                data: date,
            },
            coletas: trashCollections.length
        }

       res.status(200).json(generalStats);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}