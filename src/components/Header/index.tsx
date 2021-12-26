import styles from './styles.module.scss'

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/img/logo.svg" alt="Logo my Board" /> {/** Com next não precisa colocar o caminho exato pra buscar a img, ele é inteligente o suficiente p entender */}
                <a>Home</a>
                <a>My Board</a>

                <button>
                    Log in with GitHub
                </button>
            </div>
        </header>
    )
}