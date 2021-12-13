import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_IPICKED = gql`
  query fetchUseditemsIPicked($page: Int, $search: String) {
    fetchUseditemsIPicked(page: $page, search: $search) {
      _id
      name
      remarks
      contents
      contents
      price
      tags
      images
    }
  }
`;
