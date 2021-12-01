import{ useMutation, gql} from '@apollo/client'
import { useState } from 'react'
//아래 조건들은 복붙하는것이 좋을것
const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title:String, $contents: String){ 
    
        createBoard(writer: $writer, title:$title, contents: $contents){ 
          _id
          number
          message
        }
    }
`
//밑에 variables 에서 위로 넣으려면 $붙이기, 아래서 넣은게 위로 들어감
//왜 전달전달인가요? 나중에는 전달해주는게 여러개일 수 있기 때문에 윗쪽의 mutation부분에서 필요한 부분들을 아래쪽에서 찾아감
//반드시 $ 붙이기 $$$$
//아래 묶인 함수들을 이벤트함수라고 부름
export default function GraphqlMUtationBoard3Page(){
    const[myWriter, setMyWriter] = useState("")
    const[myTitle, setMyTitle] = useState("")
    const[myContents, setMyContents] = useState("")

    const [createBoard] = useMutation(CREATE_BOARD)
    
    function onChangeMyWriter(event){ 
        setMyWriter(event.target.value)
    }

    function onChangeMyTitle(event){
        setMyTitle(event.target.value)

    }

    function onChangeMyContents(event){
        setMyContents(event.target.value)
    
    }

   

    async function zzz (){
        const result = await createBoard({
            variables: {writer: myWriter, title: myTitle, contents: myContents}
        })
        console.log(result)
        console.log(result.data.createBoard.message)
    }
    return(
        <>
            작성자:<input type="text" onChange={onChangeMyWriter}/>
            제목:<input type="text" onChange={onChangeMyTitle}/>
            내용:<input type="text" onChange={onChangeMyContents}/>
            <button onClick={zzz}>게시물 등록하기!! </button>
        </>
    )

}