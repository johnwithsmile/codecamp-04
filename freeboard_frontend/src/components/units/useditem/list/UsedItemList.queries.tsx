import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int, $search: String, $isSoldOut: Boolean) {
    fetchUseditems(page: $page, search: $search, isSoldout: $isSoldOut) {
      _id
      name
      contents
      remarks
      price
      images
    }
  }
`;
