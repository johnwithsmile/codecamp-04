import { useRouter } from "next/router"
import { useQuery, gql} from "@apollo/client"
import {
    AAA,
    ButtonWrapper,
    InputWrapper,
    Label,
    SubmitButton,
    Writer,
    TestWrapper
  } from "../../../styles/new"

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId: $productId){
            seller
            name
            detail
            price
        }
    }
`

export default function DynamicProductReadPage(){
    const router = useRouter()

    const{data} = useQuery(FETCH_PRODUCT, {
        variables:{productId: router.query.myId}
    })

    return (
        <>
        {data?.fetchProduct &&
            <>
            <Label>dddd</Label>
            <Label>나의 상품 아이디 : {router.query.myId}</Label>
            <AAA>판매자 : {data.fetchProduct.seller} </AAA>
            <div>상품명 : {data.fetchProduct.name}</div>
            <div>상품상세 : {data.fetchProduct.detail}</div>
            <div>상품가격 : {data.fetchProduct.price}</div>
            {/* 주석 */}
            </>
        }
        </>
  )
}
//     return(
        
// <>
// {data?.fetchProduct &&
//     <TestWrapper>
//     <InputWrapper>
//     <Label>나의 상품 아이디 </Label>
//     <Writer type="text" >{router.query.myId}
//     </Writer>
//     </InputWrapper>
//     <InputWrapper>
//     <Label>판매자</Label>
//     <Writer type="text">{data.fetchProduct.seller}
//     </Writer>
//     </InputWrapper>
//     <InputWrapper>
//     <Label>상품내용</Label>
//     <Writer type="text">{data.fetchProduct.name}
//     </Writer>
//     </InputWrapper>
//     <InputWrapper>
//     <Label>상품가격</Label>
//     <Writer type="text">{data.fetchProduct.detail}
//     </Writer>
//     </InputWrapper>
//     <InputWrapper>
//     <Label>상품가격</Label>
//     <Writer type="text">
//     </Writer>
//     </InputWrapper>
//     <ButtonWrapper>
//     <SubmitButton >상품등록</SubmitButton>
//     </ButtonWrapper>
// </TestWrapper>
// }
// </>
//     )



