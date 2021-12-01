import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function MyLifeCyclePage() {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // componenentDidMount와 동일
  useEffect(() => {
    console.log("마운트됨!!");
    inputRef.current?.focus();

    return () => {
      console.log("잘가요~");
    };
  }, []);
  // componenentDidUpdate와 비슷
  useEffect(() => {
    console.log("수정됨!");
  });

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }

  function onClickMove() {
    router.push("/");
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <div>현재 카운트 :{count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!</button>
      <button onClick={onClickMove}>페이지 이동하기</button>
    </>
  );
}
