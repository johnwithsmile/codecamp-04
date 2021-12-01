import {MyInput, MyButton} from './BoardWrite.styles'

export default function BoardWriteUI(props){
    
    return(
        <>
        작성자:<MyInput type="text" onChange={props.aaa}/>
        제목:<MyInput type="text" onChange={props.bbb}/>
        내용:<MyInput type="text" onChange={props.ccc}/>
        <MyButton onClick={props.ggg? props.xxx : props.zzz} myQqq={props.qqq}>게시물 {props.ggg ? "수정" : "등록"}하기!! </MyButton>
        {/* {!props.ggg && <MyButton onClick={props.zzz} myQqq={props.qqq}>게시물 {props.ggg ? "수정" : "등록"}하기!! </MyButton>}
        {props.ggg && <MyButton onClick={props.xxx} myQqq={props.qqq}>게시물 {props.ggg ? "수정" : "등록"}하기!! </MyButton>} */}
    </>
    )
    }