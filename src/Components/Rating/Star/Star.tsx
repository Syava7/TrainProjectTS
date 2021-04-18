import React from "react";

type StarPropsType = {
  selected: boolean;
};

const Star = (props: StarPropsType) => {
  return props.selected ? (
    <span>
      <b>Star </b>
    </span>
  ) : (
    <span>Star </span>
  );
};

export default Star;
