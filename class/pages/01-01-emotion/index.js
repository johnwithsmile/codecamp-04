import {MyDiv, MyInput} from '../../styles/emotion'
export default function EmotionPage(){ 
    
    //export 페이지 보내기 default단 하나뿐인 파일
    //이름은 자유지만 파일이름에 근거하여 쓰기
    //return안쪽과 바깥쪽을 구별, 안쪽은 html쓰는곳(JSX) 바깥쪽은 자바 스크립트
    //2줄이상 입력시 return + ()는 필수
    //react에서는 html을 하나로 만들어야함. 큰 div로 묶기 / <> </> fragment로도 가능
    //이미지는 public 안에 이미 있음 public 대신 / 사용
    return( 
        <>
        <MyDiv>로그인 </MyDiv> 
        아이디
        <MyInput type="text" /> <br/>
        비밀번호
        <MyInput type="text" />
        나의 이미지: <img src='/images/lotto.png'/>        
        </>

        )

}