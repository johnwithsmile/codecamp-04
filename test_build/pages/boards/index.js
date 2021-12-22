import Head from "next/head";

export default function BoardsPage() {
  return (
    <>
      <Head>
        <meata property="og:title" content="나만의 사이트 게시판!!!" />
        <meata property="og:url" content="http://johnwithsmile.me" />
        <meata
          property="og:image"
          content="https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted.jpg"
        />
        <meata
          property="og:description"
          content="안녕하세요 불만인 고양이 사이트입니다"
        />
      </Head>
      <div> 안녕하세요! 게시판입니다! </div>
    </>
  );
}
