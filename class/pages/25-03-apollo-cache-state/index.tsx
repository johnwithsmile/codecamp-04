import { useQuery, gql, useMutation } from "@apollo/client";
import {
  IQuery,
  IQUeryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCahceStatepage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQUeryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (myBoardId: string) => () => {
    deleteBoard({
      variables: {
        boardId: myBoardId, // 이름이 같으면 생략가능
        update(cache, { data }) {
          const deletedId = data.deleteBoard; // 삭제된 게시물 ID(플레이그라운드 확인)
          cache.modify({
            fields: {
              fetchBoards: (prev, { readField }) => {
                // 1. 기존의 fetchBoards 10개에서, 방금 삭제한 ID를 제외한 9개를 만들기
                // 2. 그렇게 만들어진 9개의 새로운 fetchBoards 데이터를 돌려주기
                const newFetchBoards = prev.filter(
                  (el) => readField("_id", el) !== deletedId
                );
                return [...newFetchBoards];
                // return 변화될 데이터 - fetchBoards
              },
            },
          });
        },
      },
    });
  };

  function onClickSubmit() {
    createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목입니다~",
          contents: "내맘대로제목임",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              // 추가된 createBoard 결과물과, 이전의 10개를 합쳐서 11개로 돌려주기
              return [...prev, data.createBoard];
              //   return 변경될 데이터 - fetchBoards
            },
          },
        });
      },
    });
  }
  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
