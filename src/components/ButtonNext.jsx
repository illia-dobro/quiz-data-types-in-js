import React from "react";

function ButtonNext({ handleNext }) {
  return (
    <>
      <button
          onClick={handleNext}
          className="bg-blue-50 hover:bg-blue-100 w-fit max-w-3xl py-2 px-4 rounded-3xl text-left">Наступне</button>
    </>
  );
}

export default ButtonNext;
