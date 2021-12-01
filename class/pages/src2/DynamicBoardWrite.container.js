import {useRouter} from 'next/router'
import DynamicBoardWriteUI from './DynamicBoardWrite.presenter'

export default function DynamicBoardWrite(){

const router = useRouter()

function onClickMove1(){
    router.push('/05-06-dynamic-routed-number/1')
}
function onClickMove2(){
    router.push('/05-06-dynamic-routed-number/2')
}
function onClickMove3(){
    router.push('/05-06-dynamic-routed-number/3')
}

return (
    <DynamicBoardWriteUI
    aaa={onClickMove1}
    bbb={onClickMove2}
    ccc={onClickMove3}
    />
)

}