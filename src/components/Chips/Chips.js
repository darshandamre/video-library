import React, { useState } from "react";
import { useCategories } from "../../react-query/queries";
import "./Chips.css";

const Chips = () => {
  const { data } = useCategories();
  const [selected, setSelected] = useState("All");

  return (
    <div className="chips__container py-1 fw-500">
      <div className="chips">
        {data?.categories?.map(({ id, name }) => (
          <div
            key={id}
            className={`chips__item ${
              selected === name ? "chips__item--selected" : ""
            } cursor-pointer ml-2 py-1 px-2`}
            onClick={() => setSelected(name)}>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Chips };
