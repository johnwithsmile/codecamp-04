import {
    Address,
    ButtonWrapper,
    Contents,
    ImageWrapper,
    InputWrapper,
    Label,
    OptionWrapper,
    Password,
    RadioButton,
    RadioLabel,
    SearchButton,
    Subject,
    SubmitButton,
    Title,
    Wrapper,
    Writer,
    WriterWrapper,
    Youtube,
    Zipcode,
    ZipcodeWrapper,
    UploadButton,
    RedLetter 
  } from "../../../styles/new"
  import {useState} from 'react'

  export default function BoardsNewPage() {

    const [writer, setWriter] = useState("")
    const [writererror, setWriterError] = useState("")
    const [password, setPassword] = useState("")
    const [passworderror, setPasswordError] = useState("")
    const [subject, setSubject] = useState("")
    const [subjecterror, setSubjectError] = useState("")
    const [contents, setContents] = useState("")
    const [contentserror, setContentsError] = useState("")
    // const [error, setError] = useState("")

    function bbb(event){
        setWriter(event.target.value)
    }
    // function ccc(){
    //     if(writer.length === 0){
    //         setError("칸이 비어있습니다. 작성해주세요!")
    //     }
    //     else {
    //         setError("")
    //     }
    // }   
    function ddd(event){
        setPassword(event.target.value)
    }
    // function ccc(){
    //     if(password.length === 0){
    //         setError("칸이 비어있습니다. 작성해주세요!")
    //     }
    //     else {
    //         setError("")
    //     }
    // }
    function eee(event){
        setSubject(event.target.value)
    }
    // function ccc(){
    //     if(subject.length === 0){
    //         setError(" 칸이 비어있습니다. 작성해주세요!")
    //     }
    //     else {
    //         setError("")
    //     }
    // }
    function fff(event){
        setContents(event.target.value)
    }

    function ccc(){
        if(writer.length === 0){
            setWriterError(" 칸이 비어있습니다. 작성해주세요!")
        } else {
            setWriterError("")
        }
        
        if(password.length === 0){
            setPasswordError("칸이 비어있습니다. 작성해주세요!")
        } else {
            setPasswordError("")
        }
        
        if(subject.length === 0){
            setSubjectError("칸이 비어있습니다. 작성해주세요!")
        } else {
            setSubjectError("")
        } 
        
        if(contents.length === 0){
            setContentsError(" 칸이 비어있습니다. 작성해주세요!")
        }
        else {
            setContentsError("")
        }
    }

    return (
      <Wrapper>
        <Title>게시판 등록</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer type="text" placeholder="이름을 적어주세요." onChange={bbb}>
            </Writer>
            <RedLetter>{writererror}</RedLetter>
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password type="password" onChange={ddd}/>
            <RedLetter>{passworderror}</RedLetter>
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject type="text" placeholder="제목을 작성해주세요." onChange={eee}/>
          <RedLetter>{subjecterror}</RedLetter>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents placeholder="내용을 작성해주세요." onChange={fff}/>
          <RedLetter>{contentserror}</RedLetter>
        </InputWrapper>
        <InputWrapper>
          <Label>주소</Label>
          <ZipcodeWrapper>
            <Zipcode placeholder="07250" readOnly />
            <SearchButton>우편번호 검색</SearchButton>
          </ZipcodeWrapper>
          <Address readOnly />
          <Address />
        </InputWrapper>
        <InputWrapper>
          <Label>유튜브</Label>
          <Youtube placeholder="링크를 복사해주세요." />
        </InputWrapper>
        <ImageWrapper>
          <Label>사진첨부</Label>
          <UploadButton>
            <>+</>
            <>Upload</>
          </UploadButton>
          <UploadButton>
            <>+</>
            <>Upload</>
          </UploadButton>
          <UploadButton>
            <>+</>
            <>Upload</>
          </UploadButton>
        </ImageWrapper>
        <OptionWrapper>
          <Label>메인설정</Label>
          <RadioButton type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>
        <ButtonWrapper>
          <SubmitButton onClick={ccc}>등록하기</SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    );
  }