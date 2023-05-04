import "./App.css";
import Header from "./Header";
import Even from "./component/Even";
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import { useEffect, useRef, useState } from "react";
function App() {
  //부모 컴포넌트의 state 값을 자식 컴포넌트에게 props로 전달
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const didMountRef = useRef(false);

  const handleSetCount = (value) => {
    setCount(count + value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  // useEffect(() => {
  //   console.log("업데이트: ", text, count);
  // }, [count, text]);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트");
    }
  });

  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     console.log("깜빡");
  //   }, 1000);

  //   return () => {
  //     console.log("클린업");
  //     clearInterval(intervalID);
  //   };
  // });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText}></input>
      </section>
      <section className="viewer">
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section className="controller">
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
