import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getProductBySlug = async (slug: string): Promise<Billboard> => {
  "use server";
  const res = await fetch(`${URL}/products/?slug=${slug}`);
  return await res.json();
};

export default getProductBySlug;
