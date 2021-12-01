import{ useMutation, gql} from '@apollo/client'
import { useState } from 'react'
//아래 조건들은 복붙하는것이 좋을것
const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title:String, $contents: String){ 
    
        createBoard(writer: $writer:, title:$title, contents: $contents){ 
          _id
          number
          message
        }
    }
`
//밑에 variables 에서 위로 넣으려면 $붙이기, 아래서 넣은게 위로 들어감
//왜 전달전달인가요? 나중에는 전달해주는게 여러개일 수 있기 때문에 윗쪽의 mutation부분에서 필요한 부분들을 아래쪽에서 찾아감
//반드시 $ 붙이기 $$$$
export default function GraphqlMUtationBoard2Page(){
    const [createBoard] = useMutation(CREATE_BOARD)
    const [aaa, SetAaa] = useState("안녕하세요")

    async function zzz (){
        const result = await createBoard({
            variables: {writer:"영희", title:"variables써봄요", contents:"내용입니다"}
        })
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