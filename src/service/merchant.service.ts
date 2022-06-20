import { merchants } from "../../json/merchants.json";
import MerchantModel from "../models/merchant.model";
import { insertMerchants } from "../utils/createHooks";

export async function createMerchants() {
    try {
      await insertMerchants();

    } catch (e: any) {
        throw new Error(e);
    }
  }
export async function getMerchants() {
    try {
      const merchants = await MerchantModel.find();
     return merchants

    } catch (e: any) {
        throw new Error(e);
    }
  }