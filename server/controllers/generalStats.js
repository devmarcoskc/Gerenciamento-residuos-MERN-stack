import GeneralStats from "../models/GeneralStats.js";
import TrashCollection from "../models/TrashCollect.js";
import Notes from "../models/Notes.js";

export const getGeneralStats = async (req, res) => {
    try {
        const {id} = req.params;

        const generalStats = await GeneralStats.find({orgaoId: id});
        const trashCollections = await TrashCollection.find({orgaoId: id});
        const notes = await Notes.find({orgaoId: id});

        res.status(200).json({generalStats, trashCollections, notes});
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}