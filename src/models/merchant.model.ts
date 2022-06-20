import mongoose from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export interface MerchantInput {
    merchantId: string;
    name: string;
    slug: string;
    logoUrl: string;
    bannerUrl: string;
}

export interface MerchantDocument extends MerchantInput, mongoose.Document{
    createdAt: Date;
    updatedAt: Date;
}

const merchantSchema = new mongoose.Schema(
    {
        merchantId: {
            type: String,
            required: true,
            unique: true,
            default: () => `merchant_${nanoid()}`,
        },
        name: { type: String, required: true },
        slug: { type: String, required: true },
        logoUrl: { type: String, required: true },
        bannerUrl: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const MerchantModel = mongoose.model<MerchantDocument>("merchant", merchantSchema);

export default MerchantModel;
