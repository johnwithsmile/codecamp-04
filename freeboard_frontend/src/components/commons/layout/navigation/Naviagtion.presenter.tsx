import { MenuItem, Wrapper } from "./Naviagtion.styles";
import { ILayoutNavigationUIProps } from "./Navigation.types";

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <Wrapper>
      <MenuItem id="/boards" onClick={props.onClickMenu}>
        포인핸드 게시판
      </MenuItem>
      <>|</>
      <MenuItem id="/markets" onClick={props.onClickMenu}>
        포인핸드 몰
      </MenuItem>
      <>|</>
      <MenuItem id="/mypages" onClick={props.onClickMenu}>
        마이페이지
      </MenuItem>
    </Wrapper>
  );
}
