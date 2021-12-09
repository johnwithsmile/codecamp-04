//수정할 때 이전 기본 값을 불러오는 기능 추가하기
import {MyInput, MyButton} from './BoardWrite.styles'

export default function BoardWriteUI(props){
    
    return(
        <>
        작성자:<MyInput type="text" onChange={props.aaa} defaultValue={props.data?.fetchBoard.writer}/>
        제목:<MyInput type="text" onChange={props.bbb} defaultValue={props.data?.fetchBoard.title}/>
        내용:<MyInput type="text" onChange={props.ccc} defaultValue={props.data?.fetchBoard.contents}/>
        <MyButton onClick={props.ggg? props.xxx : props.zzz} myQqq={props.qqq}>게시물 {props.ggg ? "수정" : "등록"}하기!! </MyButton>
        {/* {!props.ggg && <MyButton onClick={props.zzz} myQqq={props.qqq}>게시물 {props.ggg ? "수정" : "등록"}하기!! </MyButton>}
        {props.ggg && <MyButton onClick={props.xxx} myQqq={props.qqq}>게시물 {props.ggg ? "수정" : "등록"}하기!! </MyButton>} */}
    </>
    )
    }

    ///efaultValue={props.ggg? "aaa" : ""} 하면 디폴트 값을 aaa로 띄움
    // prop.data로 바꿔서 받아온 데이터를 보여줌 
    //앞에 값은 지워도 사실 상관없으니 (어차피 안뜸) 그러니까 지워
    