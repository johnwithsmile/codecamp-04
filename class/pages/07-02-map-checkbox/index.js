//데이터를 받아보고 화면에 뿌려주고를 해보자
import styled from '@emotion/styled'
import {gql, useMutation, useQuery} from '@apollo/client'

const FETCH_BOARDS = gql`
    query{
        fetchBoards{
            number
            writer
            title
            createdAt
        }
    }
`
const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message
        }
    }
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
`
const Column = styled.div`
    width: 60%;
`

//이번에는 variables를 넣지 않음
//데이터가 있을수도 없을수도있으니 ?.옵셔널 체이닝을 함

export default function MapCheckboxPage(){
    const[deleteBoard] = useMutation(DELETE_BOARD)
    const {data} = useQuery(FETCH_BOARDS) // [{number:1, writer: ... }, {...}, {...}]

    async function onClickDelete(event){
        try{
        await deleteBoard({
            variables: {number: Number(event.target.id)},
            refetchQueries: [{query : FETCH_BOARDS}]    
    })
        } catch(error){
            alert(error.message)
        }

    }

    return(
        <div>
            {data?.fetchBoards.map((el, index)=> (
                <Row key= {el.number}>
                    <Column><input type="checkbox"/></Column>
                    <Column>{index + 1}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.createdAt}</Column>
                    <Column><button id={el.number} onClick={onClickDelete}>삭제하기</button></Column>
                </Row>

            ))}
        </div>
    )

}

//Row Key 부분에 유니크한 key값을 넣어줘야 Map이 그려주면서 인식함! 그런데 key 값으로 index값을 넣어주면 삭제해도 인덱스 값은 남음(3번삭제해봤자 3번인덱스 추가)
