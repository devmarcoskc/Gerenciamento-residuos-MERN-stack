import mongoose from "mongoose";

const CollectionsSchema = new mongoose.Schema(
    {
        orgaoId: {
            type: String,
            required: true
        },
        nomeDaRota: {
            type: String,
            required: true
        },
        nomeDoBairro: {
            type: String,
            required: true
        },
        coletaSeletiva: {
            type: Boolean,
            required: true
        },
        totalResiduos: {
            type: Number,
            required: true
        },
        data: {
            type: String,
            required: true
        },
        residuoPorCategoria: [{
            categoria: String,
            quantidade: Number
        }],
    }, {timestamps: true}
);

const TrashCollection = mongoose.model("TrashCollection", CollectionsSchema);
export default TrashCollection;
