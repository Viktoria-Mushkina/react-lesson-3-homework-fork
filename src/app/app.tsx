import { ThemeProvider, ThemeToggle } from '../modules/theme'
import { CounterProvider, CounterWithContext, CounterWithHook } from '../modules/counter'
import styles from './app.module.css'

function MainPage() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                Урок 3: Context API и кастомные хуки
            </h1>

            <ThemeToggle />
            <h2>Счетчик с Context</h2>
            <CounterWithContext />
            <CounterWithContext />
            <CounterWithContext />
            <h2>Счетчик с Hook</h2>
            <CounterWithHook />
            <CounterWithHook />
            <CounterWithHook />

            <div className={styles.explanation}>
                <h3 className={styles.explanationTitle}>Примеры:</h3>
                <ul className={styles.list}>
                    <li>
                        <strong>Context API</strong> - используется для темы
                        приложения. Все компоненты внутри ThemeProvider имеют
                        доступ к текущей теме и функции переключения.
                    </li>
                    <li>
                        <strong>Кастомный хук</strong> - useLocalStorage
                        используется для сохранения темы в localStorage, чтобы
                        она сохранялась после перезагрузки страницы.
                    </li>
                </ul>
            </div>
        </div>
    )
}

function App() {
    return (
        <ThemeProvider>
            <CounterProvider>
                <MainPage />
            </CounterProvider>   
        </ThemeProvider>
    )
}

export default App
