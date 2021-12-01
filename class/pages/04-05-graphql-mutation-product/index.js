import{ useMutation, gql} from '@apollo/client'
import { useState } from 'react'
//아래 조건들은 복붙하는것이 좋을것
const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $creatProductInput:CreateProductInput!){ 
    
        createProduct(seller: $seller, creatProductInput:$creatProductInput){ 
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
    
    const[mySeller, setMySeller] = useState("")
    const[myName, setMyName] = useState("")
    const[MyDetail, setMyDetail] = useState("")
    const[MyPrice, setMyPrice] = useState("")

    const [createProduct] = useMutation(CREATE_PRODUCT)

    function onChangeMyWriter(event){ 
        setMySeller(event.target.value)
    }

    function onChangeMyTitle(event){
        setMyName(event.target.value)

    }

    function onChangeMyContents(event){
        setMyDetail(event.target.value)
    
    }
    function onChangeMyContents(event){
        setMyPrice(event.target.value)
    
    }

    async function zzz (){
        const result = await createProduct({
            variables: {
                seller : mySeller,
                createProductInput:{
                    name: myName,
                    detail: MyDetail,
                    price: Number(MyPrice)
                }
            }
        })
        console.log(result)
    
    }
    return(
        <>
            판매자:<input type="text" onChange={setMySeller}/>
            상품명:<input type="text" />
            상품내용:<input type="text" />
            상품가격:<input type="text" />
            <button onClick={zzz}>상품 등록하기!! </button>
        </>
    )

}