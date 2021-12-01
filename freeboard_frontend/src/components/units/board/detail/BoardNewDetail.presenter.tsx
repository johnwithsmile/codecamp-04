import * as S from "./BoardNewDetail.styles";
import { IBoardNewDetailUIprops } from "./BoardNewDetail.types";

export default function BoardNewDetailUI(props: IBoardNewDetailUIprops) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            {/* <Avatar src="/images/avatar.png" /> */}
            <S.Info>
              <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
              <S.CreatedAt>{props.data?.fetchBoard.createdAt}</S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
          {props.data?.fetchBoard.youtubeUrl && (
            <S.Youtube
              url={props.data?.fetchBoard.youtubeUrl}
              width="486px"
              height="240px"
            />
          )}
          <S.ImageWrapper>
            <img
              src={`https://storage.googleapis.com/${props.data?.fetchBoard.images}`}
              // alt=""
            />
            {/* {props.data?.fetchBoard.images} */}
          </S.ImageWrapper>
          <S.LikeWrapper>
            <S.IconWrapper>
              <S.LikeIcon onClick={props.onClickLike} />
              <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
            </S.IconWrapper>
            <S.IconWrapper>
              <S.DislikeIcon onClick={props.onClickDislike} />
              <S.DislikeCount>
                {props.data?.fetchBoard.dislikeCount}
              </S.DislikeCount>
            </S.IconWrapper>
          </S.LikeWrapper>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.backToList}>목록으로</S.Button>
        <S.Button onClick={props.goToEdit}>수정하기</S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
