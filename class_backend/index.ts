// console.log("Hello World!");
import { ApolloServer, gql } from "apollo-server";
import { createConnection } from "typeorm";
import Board from "./Board.mysql";

const typeDefs = gql`
  input createBoardInput {
    writer: String
    title: String!
    age: Int
  }

  type AAA {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoards: [AAA]
  }

  type Mutation {
    #createBoard(writer: String, title: String, age: Int): String
    createBoard(createBoardInput: createBoardInput!): String
    deleteBoard(number: Int!): String
  }
`;
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 어쩌구 저쩌구 (데이터베이스에서 게시물 데이터 꺼내오기)
      const result = await Board.find({ where: { deletedAt: null } });
      console.log(result);

      return result;
    },
  },

  Mutation: {
    deleteBoard: async (_: any, args: any) => {
      await Board.update({ number: args.number }, { deletedAt: new Date() });
      return "게시물이 정상적으로 삭제되었습니다.";
    },
    createBoard: async (_: any, args: any) => {
      // 첫번째 방법
      // 어쩌구 저쩌구 (데이터베이스에서 게시물 데이터 꺼내오기)
      // await Board.insert({
      //   title: "안녕하세요! 테스트입니다!",
      //   writer: "짱구",
      //   age: 8,
      // });

      // 두번째 방법
      // await Board.insert({
      //   title: args.title,
      //   writer: args.writer,
      //   age: args.age,
      // });
      // 세번째 방법
      await Board.insert({
        // title: args.createBoardInput.title,
        // writer: args.createBoardInput.writer,
        // age: args.createBoardInput.age,
        ...args.createBoardInput,
      });
      return "게시물 등록에 성공했습니다!!";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

createConnection({
  type: "mysql",
  database: "mysql",
  username: "root",
  password: "codecamp",
  host: "34.64.207.239",
  port: 3313,
  // @ts-ignore
  entities: [__dirname + "/*.mysql.ts"],
  logging: true,
  synchronize: true,
})
  .then(() => {
    //연결 성공시 실생하기!!
    console.log("연결완료!");

    server.listen({ port: 4000 });
  })

  .catch((error) => {
    // 연결 실패시 실행하기
    console.log(error);
  });
