import { useState, useEffect, useMemo } from "react";
import { useMoralis } from "react-moralis";
import Dex from "./Dex";

function Main({ chain, customTokens = {} }) {
 

  return (
    <>
    <div className="intro-y box flex flex-col items-center justify-center py-24 my-4">
      <Dex chain='eth' customTokens={customTokens} />
    </div>
      
    </>
  );
}

export default Main;
