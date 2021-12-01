import {useRouter} from 'next/router'

export default function StaticRoutingNumberPage(){
    const router = useRouter()

    function onClickMove1(){
        router.push('/05-04-static-routed-number/1')
    }
    function onClickMove2(){
        router.push('/05-04-static-routed-number/2')
    }
    function onClickMove3(){
        router.push('/05-04-static-routed-number/3')
    }
//onClickMove이 이벤트핸들러!!
    return(
        <>
        <button onClick={onClickMove1}>1번 게시물로 이동하기!!</button> 
        <button onClick={onClickMove2}>2번 게시물로 이동하기!!</button> 
        <button onClick={onClickMove3}>3번 게시물로 이동하기!!</button> 
        </>
        )

}