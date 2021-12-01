import { useRouter } from "next/router";
import { MouseEvent } from "react";
import NavigationUI from "./Naviagtion.presenter";

export default function Navigation() {
  const router = useRouter();

  function onClickMenu(event: MouseEvent<HTMLDivElement>) {
    router.push((event.target as Element).id);
  }
  return <NavigationUI onClickMenu={onClickMenu} />;
}
