import { useRouter } from "next/router"

export default function DynamicRoutedNumberPage(){
    const router = useRouter()

    console.log(router)
    console.log()
    return(
        <div>{router.query.aaa}번 게시물 상세페이지 이동완료!!</div>
    )

}