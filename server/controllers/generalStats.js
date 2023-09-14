import GeneralStats from "../models/GeneralStats.js";
import TrashCollection from "../models/TrashCollect.js";

export const getGeneralStats = async (req, res) => {
    try {
        const {id} = req.params;

        const generalStats = await GeneralStats.find({orgaoId: id});
        const trashCollections = await TrashCollection.find({orgaoId: id});

        res.status(200).json({generalStats, trashCollections});
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}