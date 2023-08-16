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

        let index;
        for(let i in generalStats[0].totalResiduosPorCategoria) {
            residuoPorCategoria.filter((residuoCollection) => {
                if(generalStats[0].totalResiduosPorCategoria[i].categoria === residuoCollection.categoria) {
                    index = generalStats[0].totalResiduosPorCategoria.indexOf(generalStats[0].totalResiduosPorCategoria[i]);
                }
            });
        };
            
        for(let i = index+1; i<residuoPorCategoria.length; i++) {
            generalStats[0].totalResiduosPorCategoria.push(residuoPorCategoria[i]);
        }

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