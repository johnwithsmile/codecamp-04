import BoardWriteUI from "./BoardWrite.presenter"
import{useMutation} from '@apollo/client'
import { ChangeEvent, useState } from 'react'
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'
import {useRouter} from 'next/router'
import{IBoardWriteprops, IMyVAriables} from './BoardWrite.types'


export default function BoardWrite(props: IBoardWriteprops){
    const router = useRouter()
    const[myWriter, setMyWriter] = useState("")
    const[myTitle, setMyTitle] = useState("")
    const[myContents, setMyContents] = useState("")
    const[myQqq, setMyQqq] = useState<boolean>(false)
 
    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)
     6
    function onChangeMyWriter(event: ChangeEvent<HTMLInputElement>){ 
        setMyWriter(event.target.value)
        if((event.target.value) !== "" && myTitle !== "" && myContents !== ""){
            setMyQqq(true)
        }else{
            setMyQqq(false)
        }
    }

    function onChangeMyTitle(event: ChangeEvent<HTMLInputElement>){
        setMyTitle(event.target.value)
        if(myWriter !== "" && (event.target.value) !== "" && myContents !== ""){
            setMyQqq(true)
        }else{
            setMyQqq(false)
        }

    }

    function onChangeMyContents(event: ChangeEvent<HTMLInputElement>){
        setMyContents(event.target.value)
        if(myWriter !== "" && myTitle !== "" && (event.target.value) !==""){
            setMyQqq(true)
        }else{
            setMyQqq(false)
        }
    }

    async function zzz (){
        // alert("등록하기 버튼을 누르셨습니다!")
        const result = await createBoard({
            variables: {writer: myWriter, title: myTitle, contents: myContents}
        })
        console.log(result)
        console.log(result.data.createBoard.message)
        router.push(`/09-02-boards2/${result.data.createBoard.number}`)
        
    }
    async function xxx(){

        const myVariables : IMyVAriables = {
            number: Number(router.query.myNumber)
        }
        if(myWriter !== "") myVariables.writer = myWriter //괄호 생략가능
        if(myTitle !== "") myVariables.title = myTitle
        if(myContents !== "") myVariables.contents = myContents


        // alert("수정하기 버튼을 누르셨습니다!")
        const result = await updateBoard({
            variables: myVariables
    })
        console.log(result)
        router.push(`/09-02-boards2/${router.query.myNumber}`)

    }   

    return(
        <BoardWriteUI 
        
        aaa={onChangeMyWriter}
        bbb={onChangeMyTitle}
        ccc={onChangeMyContents}
        zzz={zzz}
        qqq={myQqq}
        ggg={props.isEdit}
        xxx={xxx}
        data={props.data}
        />
    )
}