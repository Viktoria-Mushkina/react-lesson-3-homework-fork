import { useCounterContext } from "../hooks/use-counter-context";
import styles from './counter.module.css'
export const CounterWithContext = () => {
 const { count,increment,decrement,reset } = useCounterContext()
 return(
  <div className={styles.count_container}>
   <div className={styles.count}>{count}</div>
   <button className={styles.incrementBtn} onClick={increment}>+1</button>
   <button className={styles.decrementBtn} onClick={decrement}>-1</button>
   <button className={styles.resetBtn} onClick={reset}>Сброс</button>
  </div>
 )
}

