import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $boardId: ID!
    $password: String
    $updateBoardInput: UpdateBoardInput!
  ) {
    updateUseditem(
      useditemId: $useditemId
      password: $password
      updateUseditemInput: $updateUseditemInput
    ) {
      _id
    }
  }
`;
