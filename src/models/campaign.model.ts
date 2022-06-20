import mongoose from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export interface CampaignInput {
  campaignId: string;
  slug: string;
  merchantId: string;
  imageUrl: number;
  title: string;
  price: number;
}

export interface CampaignDocument extends CampaignInput ,mongoose.Document{
  createdAt: Date;
  updatedAt: Date;
}

const CampaignSchema = new mongoose.Schema(
  {
    campaignId: {
      type: String,
      required: true,
      unique: true,
      default: () => `campaign_${nanoid()}`,
    },
    merchantId: {
      type: String,
      required: true,
    },
    slug: { type: String, required: true },
    imageUrl: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const CampaignModel = mongoose.model<CampaignDocument>("campaign", CampaignSchema);

export default CampaignModel;
