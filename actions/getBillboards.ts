import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (): Promise<Billboard[]> => {
  "use server";
  const res = await fetch(URL);
  return await res.json();
};

export default getBillboards;
