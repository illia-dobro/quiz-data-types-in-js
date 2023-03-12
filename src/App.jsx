import { useState, useEffect, useRef } from "react";
import "./App.css";
import { data } from "./data";
import Question from "./components/Question";
import ButtonNext from "./components/ButtonNext";
import ButtonAnswer from "./components/ButtonAnswer";

function App() {
  const [initArray, setInitArray] = useState(
    [...data]
  );
  const [styleBtn, setStyleBtn] = useState(["", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [countTrue, setCountTrue] = useState(0);
  const [local, setLocal] = useState([]);
  const [active, setActive] = useState(true);
  const [rerender, setRerender] =useState(false)

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("myList"));
    if (localStorage.getItem("myList")) {
      setInitArray([...items]);
      setLocal([...items]);
    } else {
      setLocal([...initArray]);
    }
  }, [rerender]);

  useEffect(() => {
    if (local.length > 0) {
      localStorage.setItem("myList", JSON.stringify(local));
    }
  }, [local]);

  function trueOrfalse(n, ind) {

    const changeStyles = styleBtn.map((i, index) => {
      console.log(n, initArray[count].q[index])
      if (initArray[count].ra === initArray[count].q[index]) {
        i = "bg-green-200";
      } else if (ind === index) {
        i = "bg-pink-300";
      }
      return i;
    });


    if (n === initArray[count].ra) {
      setLocal((prev) => prev.filter((i) => i !== initArray[count]));
      setCountTrue((prev) => prev + 1);
    }

    setStyleBtn(changeStyles);
    setActive(false);
  }

  function handleNext() {
    setStyleBtn(["", "", "", "", ""]);
    if (count < initArray.length-1) {
      setCount((prev) => prev + 1);
      setActive(true);
    } else {
      setCount(0);
    }
  }

  function removeAll(){
    localStorage.removeItem("myList");
    setRerender(true)

  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
      <div className="mx-auto max-w-3xl">
      <div className="text-left">
        {<p>
          Правильні відповіді в localStorage, і при перезавантажені сторінки не будуть відображатися знову.
        </p>}
        <div className="flex gap-8 items-baseline pb-3">
          <p className="bg-green-50 w-fit  py-2 px-4 rounded-lg shadow-md mb-2">
            Кількість питань: {local.length}
          </p>
          <button
            className="bg-red-50 w-fit py-1 px-2 rounded-3xl shadow-md button"
            onClick={removeAll}
          >
            Очистити результати
          </button>
        </div>
      </div>
      <Question
        title={initArray[count].title}
        count={count}
      />
      <ButtonAnswer
        answers={initArray[count].q}
        trueOrfalse={trueOrfalse}
        styleBtn={styleBtn}
        active={active}
      />
      <div className="flex gap-4 items-center mt-12">
        <ButtonNext handleNext={handleNext} />
        <span className="bg-green-50 w-fit  py-2 px-4 rounded-lg shadow-md">
          Вірних відповідей: {countTrue} з {count}
        </span>
      </div>
    </div>
    </div>
  );
}

export default App;
