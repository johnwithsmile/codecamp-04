import styled from "@emotion/styled";
import { ReactChild } from "react";
import Header from "./header/Header.contatiner";
import Banner from "./banner/Banner.contatiner";
import Navigation from "./navigation/Naviagtion.contatiner";
import Footer from "./footer/Footer.contatiner";
import { useRouter } from "next/dist/client/router";

const Wrapper = styled.div``;

const Body = styled.div``;

const BodyWrapper = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  width: 200px;
  height: 700px;
  background-color: blue;
`;

const HIDDEN_HEADERS = ["/12-05-modal-address-state-prev"];

interface ILayourProps {
  children: ReactChild;
}
export default function Layout(props: ILayourProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenHeader && <Header />}
      <Banner />
      <Navigation />
      <BodyWrapper>
        <Sidebar>여기는 사이드바입니다.</Sidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  );
}
