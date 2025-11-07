import { useCounter } from '../hooks/use-counter' 
import styles from './counter.module.css'
export const CounterWithHook = () => {
 const { count,increment,decrement,reset } = useCounter(0)
 return(
  <div className={styles.count_container}>
   <div className={styles.count}>{count}</div>
   <button className={styles.incrementBtn} onClick={increment}>+1</button>
   <button className={styles.decrementBtn} onClick={decrement}>-1</button>
   <button className={styles.resetBtn} onClick={reset}>Сброс</button>
  </div>
 )
}
