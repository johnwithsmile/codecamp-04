import { useRouter } from "next/router";
import MyPageUI from "./MyPage.presenter";

export default function MyPage() {
  const router = useRouter();

  function onClickMove(event) {
    router.push(event.target.id);
  }
  return <MyPageUI onClickMove={onClickMove} />;
}
