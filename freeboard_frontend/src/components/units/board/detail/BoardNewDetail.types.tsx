import { IQuery } from "../../../../commons/types/generated/types";
export interface IBoardNewDetailUIprops {
  data1?: any;
  data2?: any;
  data?: Pick<IQuery, "fetchBoard">;
  onClickLike: () => void;
  onClickDislike: () => void;
  backToList: () => void;
  goToEdit: () => void;
  onClickDelete: () => void;
}

// data2: any;
