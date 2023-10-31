import React, { FC } from "react";

interface NoResultsProps {}

const NoResults: FC<NoResultsProps> = ({}) => {
  return (
    <div className="flex items-center justify-center h-full w-full text-neutral-500 ">
      <p>No Results Found.</p>
    </div>
  );
};

export default NoResults;
