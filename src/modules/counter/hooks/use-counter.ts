import { useState } from "react";

export function useCounter(initialValue: number = 0){
 const [count, setCount] = useState(initialValue)
 const increment = () => {
  setCount((count) => count += 1)
 }
 const decrement = () => {
  setCount((count) => count -= 1)
 }
 const reset = () => {
  setCount((count) => count = initialValue)
 }
 return({
  count,
  increment,
  decrement,
  reset
 })
}

