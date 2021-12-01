import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickCount() {
    // 화살표함수
    // setCount((prev) => prev + 1);

    // 그냥함수
    //     setCount(function (prev) {
    //         //로직 추가하기
    //       return prev + 1;
    //     });
    //   }
    setCount((qweqwe) => qweqwe + 1);
  }

  return (
    <>
      <div>현재 카운트 : {count}</div>
      <button onClick={onClickCount}>카운트 증가!!</button>
    </>
  );
}
