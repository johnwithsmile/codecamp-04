import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
      }
      buyer {
        name
      }
      seller {
        name
      }
      soldAt
      createdAt
      updatedAt
      deletedAt

      images
    }
  }
`;

export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;
