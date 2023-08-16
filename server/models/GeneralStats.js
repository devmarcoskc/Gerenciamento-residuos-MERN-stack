import mongoose from "mongoose";

const GeneralStatsSchema = new mongoose.Schema(
    {
        orgaoId: {
            type: String,
            required: true,
        },
        totalResiduos: {
            type: Number,
            required: true,
        },
        totalResiduosPorCategoria:[{
            categoria: String,
            quantidade: Number,
        }]
    }
);

const GeneralStats = mongoose.model("GeneralStats", GeneralStatsSchema);
export default GeneralStats;