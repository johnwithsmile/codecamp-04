import { ChangeEvent } from "react";

export interface IMyVariables {
  password: any;
  boardId: any;
  updateBoardInput: any;
}

export interface IBoardNewWriteprops {
  isEdit: boolean;
}

export interface IBoardNewWriteUIProps {
  isEdit?: boolean;
  myWriterUI: any;
  myTitleUI: any;
  myPasswordUI: any;
  data?: any;
  myContentsUI: any;
  mySubmitUI: any;
  myWriterError: any;
  myTitleError: any;
  myPasswordError: any;
  myContentsError: any;
  setMyColor: any;
  myColorUI: any;
  onClickEdit: any;
  onToggleModal: any;
  onChangeMyWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeMyYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
}
