import React from "react";
import Comp from "./HeaderComp/Comp";
import Headercomp from "./HeaderComp/Headercomp";
import Sly from "./HeaderComp/Sly";

const Thetwo = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Comp toggle={toggle} />
      <Sly toggle={toggle} isOpen={isOpen} />
    </div>
  );
};

export default Thetwo;
