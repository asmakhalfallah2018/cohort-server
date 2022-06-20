import mongoose from "mongoose";
import config from "config";
import logger from "./logger";
import { createMerchants } from "../service/merchant.service";
import { createCampaigns } from "../service/campaign.service";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri).then(()=> {
      createMerchants();
      createCampaigns();
    });
    logger.info("DB connected");
  } catch (error) {
    logger.error("Could not connect to db");
    process.exit(1);
  }
}

export default connect;
