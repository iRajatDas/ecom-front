import getBillboard from "@/actions/getBillboard";
import getBillboards from "@/actions/getBillboards";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard(`24ab7d83-f1f4-4e44-96da-def8505dd1be`);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        {/* {billboards.map((billboard) => (
          <Billboard data={billboard} key={billboard.id} />
        ))} */}
      </div>
    </Container>
  );
};

export default HomePage;
