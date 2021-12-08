import { IQuery } from "../../../../commons/types/generated/types";

export interface IUsedItemDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  onClickMoveToList: () => void;
  onClickMoveToUpdate: () => void;
  onClickDelete: () => void;
}
