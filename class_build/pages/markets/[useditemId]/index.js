import Head from "next/head";
import { gql, request } from "graphql-request";

export default function MarketPage(props) {
  return (
    <>
      <Head>
        <meata property="og:title" content={props.fetchUseditem.name} />
        {/* <meata property="og:url" content="http://johnwithsmile.me" /> */}
        <meata property="og:image" content={props.fetchUseditem.images[0]} />
        <meata
          property="og:description"
          content={props.fetchUseditem.remarks}
        />
      </Head>
      <div> 안녕하세요! 안녕하세요 상품페이지에요! </div>
    </>
  );
}

const FETCH_USEDITEM = gql`
  query fetchUesditem($useditemId: ID!) {
    fetchUesditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`;

export const getServerSideProps = async (context) => {
  const result = await request(
    "https://backend04.codebootcamp.co.kr/graphql",
    FETCH_USEDITEM,
    {
      useditemId: context.query.useditemId,
    }
  );
  return {
    props: {
      fetchUseditem: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images[0],
      },
    },
  };
};
