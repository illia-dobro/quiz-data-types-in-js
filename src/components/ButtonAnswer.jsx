import React from "react";
import {uid} from 'react-uid';


function ButtonAnswer({ answers, trueOrfalse, styleBtn, active} ) {

  return (
    <div className="flex flex-col pt-5  gap-3 justify-center">
      {answers.map((item, index) => {
        const hoverBtn = !!styleBtn[index] ? `${styleBtn[index]}` : 'bg-slate-100';
        return (
        <button
          key={uid(item.toString()+index)}
          onClick={active ? () => trueOrfalse(item, index) : undefined}
          className={`block border-1 border-gray-200 bg-gray-100 ${styleBtn[index]} w-fit max-w-3xl py-2 px-10 rounded-lg text-left shadow hover:${hoverBtn}`}>

           {item}
        </button>
        )
      })}

    </div>
  )
}

export default ButtonAnswer;
