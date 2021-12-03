import { useRouter } from "next/router";
import HeaderUI from "./LayoutHeader.presenter";
export default function Header() {
  const router = useRouter();

  function onClickMove(event) {
    router.push(event.target.id);
  }

  return <HeaderUI onClickMove={onClickMove} />;
}
