import {useState} from 'react'

export const useExampleHook = () => {
    const[state, setState] = useState("")

    const printState=(input)=>{
      setState(input)
      console.log(state)
    }
  return {printState, state}
   
}

