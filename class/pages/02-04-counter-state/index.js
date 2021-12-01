import {useState} from 'react'
//setQqq에다가 기존에 있던qqq+1 바로 처리 완료
export default function CounterStatePage(){

        const [qqq, setQqq] = useState(0)

        function zzz(){
            setQqq(Number(qqq)+1)            
        }
        return(
            <>
            <div>{qqq}</div> 
            <button onClick={zzz}>카운트증가!!</button>

            </>
        )

}