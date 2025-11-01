import React from "react";
import { useSearchParams } from "react-router-dom";

const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy");
  const category = searchParams.get("category");

  // this will make immidiate change in the url by replacing the sortBy and category value.
  const setQueryParamsHandler = () => {
    setSearchParams({
      sortBy: "popular",
      category: "react",
    });
  };

  return (
    <div>
      <h2>
        Articles
        <p>
          SortBy: {sortBy} Category: {category}{" "}
        </p>
      </h2>
      <button onClick={setQueryParamsHandler}> set query params </button>
    </div>
  );
};

export default Articles;
