import { campaigns } from "../../json/campaigns.json";
import { merchants } from "../../json/merchants.json";
import CampaignModel from "../models/campaign.model";
import MerchantModel from "../models/merchant.model";

// check if item exists then modify it else add it 
export async function insertMerchants() {

  merchants.forEach(merchant => {
    MerchantModel.find({ merchantId: merchant.merchantId }, function (err: any, result: any) {
      if (result.length === 0) {
        MerchantModel.create(merchant)
      } else {
        var newvalues = { $set: merchant };
        MerchantModel.updateOne({ merchantId: merchant.merchantId }, newvalues, function (err: any, res: any) {
          if (err) throw err;
          // console.log("document updated");
        });
      }
    });
  })

}
export async function insertCampaigns() {

  campaigns.forEach(campaign => {
    CampaignModel.find({ campaignId: campaign.campaignId }, function (err: any, result: any) {
      if (result.length === 0) {
        CampaignModel.create(campaign)
      } else {
        var newvalues = { $set: campaign };
        CampaignModel.updateOne({ campaignId: campaign.campaignId }, newvalues, function (err: any, res: any) {
          if (err) throw err;
          // console.log("document updated");
        });
      }
    });
  })

}
