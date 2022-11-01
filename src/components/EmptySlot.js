import React from "react";
import MoleHill from "../components/imgs/molehill.png";
import { useEffect } from "react";

function EmptySlot(props) {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {
      props.toggle(true);
    }, randSeconds);
    return () => clearTimeout(timer);
  });
  return (
    <div>
      <img style={{ width: "30vw" }} src={MoleHill} alt="Mole Hill"></img>
    </div>
  );
}

export default EmptySlot;
