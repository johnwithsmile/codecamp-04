import styled from "@emotion/styled";

interface ImyButtonProps {
  isValid: boolean;
}

const MyButton = styled.button`
  background-color: ${(props: ImyButtonProps) =>
    props.isValid ? "yellow" : ""};
`;

export default function Button01(props) {
  return (
    <MyButton type={props.type} isValid={props.isValid}>
      {props.name}
    </MyButton>
  );
}
