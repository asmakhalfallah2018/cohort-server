
import { Request, Response } from "express";
import { CreateMerchantInput } from "../schema/merchant.schema";
import { getMerchants } from "../service/merchant.service";
import logger from "../utils/logger";

export async function getAllMerchants(
  req: Request<{}, {}, CreateMerchantInput["body"]>,
  res: Response
) {
  try {
    const merchants = await getMerchants();
    return res.send(merchants);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
