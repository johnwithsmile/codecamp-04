//export default 해서 만들기!! () class폴더 보고 따라만들기
import {FirstDiv,MyHead,NameAndPassword,Name, Password, Subject,Main, Address, Adress3, AddressSearch, Youtube, Attachment, Setting, SignUp, MainBorder1, NameBorder1, AddressBorder1, YoutubeBorder1, AttachmentBorder1, PasswordLeft, SettingBorder1, SignUpBorder1} from '../../../styles/new.js'

export default function EmotionPage(){

    return(
        <FirstDiv>
                <MyHead> 게시물 등록 </MyHead>
                <NameAndPassword>
                <div>
                    <div> 작성자 </div>
                    <Name type="text" placeholder= "이름을 적어주세요"></Name>
                </div>

                <PasswordLeft>
                    <div> 비밀번호 </div>
                    <Password type="password" placeholder= "비밀번호를 적어주세요"></Password>
                </PasswordLeft>
                </NameAndPassword>

                <NameBorder1>
                    제목<br></br><Subject type= "text" placeholder= "제목을 적어주세요"></Subject>
                </NameBorder1>
                <MainBorder1>
                <div>
                    내용<br></br>
                    <Main type= "text" placeholder= "내용을 작성해주세요"></Main>
                </div>
                </MainBorder1>
                <AddressBorder1>
                    주소<br></br>
                    <Address type="text" placeholder= "07250"></Address>
                    <AddressSearch type="text" placeholder= "우편번호 검색"></AddressSearch>
                </AddressBorder1>
                <div>
                    <Adress3 type="text"></Adress3>
                    <Adress3 type="text"></Adress3>
                </div>
                <YoutubeBorder1>
                    유튜브<br></br>
                    <Youtube type= "text" placeholder= "내용을 작성해주세요"></Youtube>
                </YoutubeBorder1>
                <AttachmentBorder1>
                    사진첨부<br></br>
                    <Attachment type= "text" placeholder= "Upload"></Attachment>
                    <Attachment type= "text" placeholder= "Upload"></Attachment>
                    <Attachment type= "text" placeholder= "Upload"></Attachment>
                </AttachmentBorder1>
                <SettingBorder1>
                    메인 설정<br></br>
                    <Setting type= "radio" ></Setting> 유튜브
                    <Setting type= "radio" ></Setting> 사진
                </SettingBorder1>
                <SignUpBorder1>
                    <SignUp>등록하기</SignUp>
                </SignUpBorder1>
        </FirstDiv>
    )

}