import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  let products;
  try {
    products = await getProducts({ isFeatured: false });
  } catch (error) {}
  let billboard;
  try {
    billboard = await getBillboard(`0f0cc325-cb27-413c-b1bb-b8f69fb89f18`);
  } catch (error) {}
  return (
    <Container>
      <div className="space-y-10 pb-10">
        {billboard && <Billboard data={billboard} />}
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          {products && (
            <ProductList title="Featured Products" items={products} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
