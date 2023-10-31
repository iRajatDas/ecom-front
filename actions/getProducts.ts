import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  isFeatured?: boolean;
  sizeId?: string;
  colorId?: string;
}

const getProducts = async ({
  categoryId,
  isFeatured,
  sizeId,
  colorId,
}: Query): Promise<Product[]> => {
  "use server";

  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId,
      isFeatured,
      sizeId,
      colorId,
    },
  });

  const res = await fetch(url);
  return await res.json();
};

export default getProducts;
