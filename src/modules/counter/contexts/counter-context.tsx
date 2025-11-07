import { createContext } from 'react'

export type CounterContextType = {
 count: number,
 increment: () => void,
 decrement: () => void,
 reset: () => void
}
export const CounterContext = createContext<CounterContextType | undefined>(undefined)
// - counter-context.tsx: Определите типы и создайте контекст

//     - Тип: CounterContextType с полями: count: number, increment: () => void, decrement: () => void, reset: () => void

//     - Создайте CounterContext с помощью createContext

// - counter-provider.tsx: Реализуйте провайдер

//     - Используйте useState для хранения состояния счетчика

//     - Начальное значение: 0

//     - Реализуйте функции: increment, decrement, reset

// - use-counter-context.ts: Создайте хук для использования контекста

//     - Используйте useContext для получения контекста

//     - Добавьте проверку на использование вне провайдера с понятным сообщением об ошибке