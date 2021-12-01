import{ useMutation, gql} from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer: "철수", title:"제목입니다~", contents: "내용입니다~"){
          _id
          number
          message
        }
    }
`

export default function GraphqlMUtationBoard1Page(){
    const [createBoard] = useMutation(CREATE_BOARD)
    const [aaa, SetAaa] = useState("안녕하세요")

    async function zzz (){
        const result = await createBoard()
        console.log(result)
        console.log(result.data.createBoard.message)
        SetAaa(result.data.createBoard.message)
    }

    return(
        <>
        <div>{aaa}</div>
        <button onClick={zzz}>GRAPHQL-API 요청하기!
        </button>
        </>
    )

}