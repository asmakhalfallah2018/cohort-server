import { object, number, string, TypeOf } from "zod";

const payload = {
  body: object({
      compaignId: string({
      required_error: "Id required",
    }),
    slug: string({
      required_error: "slug is required",
    }),
    merchantId: string({
      required_error: "merchantId is required",
    }),
    imageUrl: string({
      required_error: "imageUrl is required",
    }),
    title: string({
      required_error: "title is required",
    }),
    price: number({
      required_error: "price is required",
    }),
  }),
};
export const GetCampaignSchema = object({
    ...payload,
  });

  export type GetCampaignInput = TypeOf<typeof GetCampaignSchema>;
