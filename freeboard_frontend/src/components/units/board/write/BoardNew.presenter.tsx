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
  RedLetter,
} from "./BoardNew.styles";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";
import { IBoardNewWriteUIProps } from "./BoardNew.types";
export default function BoardNewWriteUI(props: IBoardNewWriteUIProps) {
  return (
    <Wrapper>
      <Title>게시판 {props.isEdit ? "수정" : "등록"}</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.myWriterUI}
            defaultValue={props.data?.fetchBoard.writer}
          />
          <RedLetter>{props.myWriterError}</RedLetter>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password type="password" onChange={props.myPasswordUI} />
          <RedLetter>{props.myPasswordError}</RedLetter>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.myTitleUI}
          defaultValue={props.data?.fetchBoard.title}
        />
        <RedLetter>{props.myTitleError}</RedLetter>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          placeholder="내용을 작성해주세요."
          onChange={props.myContentsUI}
          defaultValue={props.data?.fetchBoard.contents}
        />
        <RedLetter>{props.myContentsError}</RedLetter>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode placeholder="07250" readOnly />
          <Button type="primary" onClick={props.onToggleModal}>
            우편번호 검색
          </Button>
        </ZipcodeWrapper>
        <Address />내 주소 : {props.myAddress} <br />내 우편번호:
        {props.myZonecode}
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube
          placeholder="링크를 복사해주세요."
          onChange={props.onChangeMyYoutubeUrl}
          defaultValue={props.data?.fetchBoard.youtubeUrl}
        />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton onClick={props.onClickMyimage}>
          <>+</>
          <>Upload</>
        </UploadButton>
        <img src={`https://storage.googleapis.com/${props.myImages[0]}`} />
        <input
          style={{ display: "none" }}
          type="file"
          ref={props.fileRef}
          onChange={props.onChangeFile}
        />
        
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
        {!props.isEdit && (
          <SubmitButton onClick={props.mySubmitUI} setMyColor={props.myColorUI}>
            등록하기
          </SubmitButton>
        )}
        {props.isEdit && (
          <SubmitButton
            onClick={props.onClickEdit}
            setMyColor={props.myColorUI}
          >
            수정하기
          </SubmitButton>
        )}
      </ButtonWrapper>
      {props.isOpen && (
        <Modal
          visible={true}
          onOk={props.onToggleModal}
          onCancel={props.onToggleModal}
        >
          <DaumPostcode onComplete={props.handleComplete} />
        </Modal>
      )}
      {props.isOpen && (
        <Modal
          visible={true}
          onOk={props.onToggleModal}
          onCancel={props.onToggleModal}
        >
          <DaumPostcode onComplete={props.handleComplete} />
        </Modal>
      )}
    </Wrapper>
  );
}
