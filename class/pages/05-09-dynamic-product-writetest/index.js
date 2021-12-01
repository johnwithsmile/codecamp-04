import{ useMutation, gql} from '@apollo/client'
import router, { useRouter } from 'next/router'
import { useState } from 'react'
import {
    ButtonWrapper,
    InputWrapper,
    Label,
    SubmitButton,
    Writer,
    TestWrapper
  } from "../../styles/new"
//아래 조건들은 복붙하는것이 좋을것
const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput:CreateProductInput!){ 
    
        createProduct(seller: $seller, createProductInput:$createProductInput){ 
          _id
          number
          message
        }
    }
`
//밑에 variables 에서 위로 넣으려면 $붙이기, 아래서 넣은게 위로 들어감
//왜 전달전달인가요? 나중에는 전달해주는게 여러개일 수 있기 때문에 윗쪽의 mutation부분에서 필요한 부분들을 아래쪽에서 찾아감
//반드시 $ 붙이기 $$$$
//아래 묶인 함수들을 이벤트함수라고 부름
//플레이그라운드 보면서 하기!!
export default function GraphqlMUtationProductPage(){
    const router = useRouter()
    const[mySeller, setMySeller] = useState("")
    const[myProductName, setMyProductName] = useState("")
    const[MyProductDetail, setMyProdctDetail] = useState("")
    const[MyPrice, setMyPrice] = useState("")

    const [createProduct] = useMutation(CREATE_PRODUCT)

    function onChangeMySeller(event){ 
        setMySeller(event.target.value)
    }

    function onChangeMyProductName(event){
        setMyProductName(event.target.value)

    }

    function onChangeMyProductDetail(event){
        setMyProdctDetail(event.target.value)
    
    }
    function onChangeMyPrice(event){
        setMyPrice(event.target.value)
    
    }

    async function zzz (){

        try {
            const result = await createProduct({
                variables: {
                    seller : mySeller,
                    createProductInput:{
                        name: myProductName,
                        detail: MyProductDetail,
                        price: Number(MyPrice)
                    }
                }
            })
            console.log(result)
            // router.push('/05-08-dynamic-product-read/'+result.data.createProduct._id) // 가장 기초
            router.push(`/05-10-dynamic-product-readtest/${result.data.createProduct._id}`) //템플릿 리터럴
            // router.push('/05-08-dynamic-product-read/${result.data.createProduct._id}') //잘못된 표기+
        
        } catch(error){
            console.log(error.message
                )
        }

       
    }
    return(
        <TestWrapper>
            <InputWrapper>
            <Label>판매자</Label>
            <Writer type="text" onChange={onChangeMySeller}>
            </Writer>
          </InputWrapper>
          <InputWrapper>
            <Label>상품명</Label>
            <Writer type="text" onChange={onChangeMyProductName}>
            </Writer>
          </InputWrapper>
          <InputWrapper>
            <Label>상품내용</Label>
            <Writer type="text" onChange={onChangeMyProductDetail}>
            </Writer>
          </InputWrapper>
          <InputWrapper>
            <Label>상품가격</Label>
            <Writer type="text" onChange={onChangeMyPrice}>
            </Writer>
          </InputWrapper>
          <ButtonWrapper>
          <SubmitButton onClick={zzz}>상품등록</SubmitButton>
          </ButtonWrapper>
        </TestWrapper>
    )

}