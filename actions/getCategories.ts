import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  "use server";
  const res = await fetch(URL);
  return await res.json();
};

export default getCategories;
