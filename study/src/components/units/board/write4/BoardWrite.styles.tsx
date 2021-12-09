import{IStylesprops} from './BoardWrite.types'
import styled from '@emotion/styled'

export const MyInput = styled.input`

`

export const MyButton = styled.button`
    background-color: ${(props: IStylesprops) => props.myQqq === true?"yellow" : "gray"};
    font-size: 30px;
`
