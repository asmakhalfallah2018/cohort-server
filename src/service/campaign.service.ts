

import CampaignModel from "../models/campaign.model";
import { insertCampaigns } from "../utils/createHooks";

export async function createCampaigns() {
    try {
      await insertCampaigns();

    } catch (e: any) {
        throw new Error(e);
    }
  }

  export async function getCampaigns() {
    try {
      const campaigns = await CampaignModel.find();
     return campaigns

    } catch (e: any) {
        throw new Error(e);
    }
  }
