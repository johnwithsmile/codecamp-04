import{ useMutation, gql} from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title:String, $contents: String){ 
    
        createBoard(writer: $writer, title:$title, contents: $contents){ 
          _id
          number
          message
        }
    }
`
export default function GraphqlMUtationBoard3Page(){
    const[myInputs, setMyInputs] = useState({
        writer: "",
        title: "",
        contents: ""
    })
    // 키에는 .이 들어갈 수 없어서 변형해야됨!![]로 묶기

    const [createBoard] = useMutation(CREATE_BOARD)
    
    function onChangeMyInputs(event){
        setMyInputs({
            ...myInputs,
            [event.target.name]: event.target.value,
        });

    async function zzz (){
        const result = await createBoard({
            variables: {...myInputs},
        })
        console.log(result)
        console.log(result.data.createBoard.message)
    }
    return(
        <>
            작성자:<input type="text" name="writer" onChange={onChangeMyInputs}/>
            제목:<input type="text" name="title" onChange={onChangeMyInputs}/>
            내용:<input type="text" name="contents" onChange={onChangeMyInputs}/>
            <button onClick={zzz}>게시물 등록하기!! </button>
        </>
    )

}