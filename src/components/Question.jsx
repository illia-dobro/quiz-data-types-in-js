import React from "react";
import {uid} from 'react-uid';
import parse from 'html-react-parser'



function Question({title, count}) {

  const nameTitle = `${title.slice(0,4)} ${count+1}. ${title.slice(4)}`;

return (
    <div className="bg-blue-50 w-fit py-4 px-10  rounded-lg shadow-md">
        {
      <div className="text-left">{ parse(nameTitle) }</div>

    }

    </div>

  );
}

export default Question;


//title.replace(/\d+./g, '')