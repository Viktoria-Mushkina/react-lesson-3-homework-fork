import { useContext } from 'react'
import { CounterContext } from '../contexts/counter-context'

export const useCounterContext = () => {
 const context = useContext(CounterContext)
 if(!context){
  throw new Error ('useCounter должен быть использован внутри CounterProvider')
 }
 return context
}
