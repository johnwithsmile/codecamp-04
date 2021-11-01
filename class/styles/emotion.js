import styled from '@emotion/styled' 

//''치면 어디서 가져올껀지 선택(설치하고나서)
//이름은 짓기나름이지만 처음이랑 매 첫 단어마다 대문자
//export를 붙여야 다른 파일에서 사용할 수 있음
//import를 통해서 export한 걸 가져야와함
//{}가 있는거 없는것의 차이는 to be continue..

export const MyDiv = styled.div` 
    color: black;  
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: 30px;
    padding-top: 30px;
`

export const MyInput = styled.input`
    width: 300px;
    color: gray;  
    display: flex;
    justify-content: center;
    align-items: center;
`