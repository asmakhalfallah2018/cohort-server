import { Request, Response } from "express";
import { GetCampaignInput } from "../schema/campaign.schema";
import { getCampaigns } from "../service/campaign.service";

export async function getCampaignByMerchantId(
    req: Request<GetCampaignInput["body"]>,
    res: Response
) {
    try {
        const merchants = await getCampaigns();
        return res.send(merchants);
        
    } catch (e: any) {
        return res.status(409).send(e.message);
    }
}
