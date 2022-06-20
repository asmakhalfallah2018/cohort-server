import { Express, Request, Response } from "express";
import { getCampaignByMerchantId } from "./controller/campaign.controller";
import { getAllMerchants } from "./controller/merchant.controller";

function routes(app: Express) {

  app.get("/api/merchants", getAllMerchants);

  app.get("/api/campaigns", getCampaignByMerchantId);

}

export default routes;
