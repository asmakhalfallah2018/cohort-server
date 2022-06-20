import { object, string, TypeOf } from "zod";

const payload = {
    body: object({
        merchantId: string({
        required_error: "Id required",
      }),
      name: string({
        required_error: "name is required",
      }),
      slug: string({
        required_error: "slug is required",
      }),
      logoUrl: string({
        required_error: "logoUrl is required",
      }),
      bannerUrl: string({
        required_error: "bannerUrl is required",
      }),
    }),
  };
  export const createMerchantSchema = object({
    ...payload,
  });

  export type CreateMerchantInput = TypeOf<typeof createMerchantSchema>;
