import Link from 'next/link'

import styles from './styles.module.scss'

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">
                    <img src="/img/logo.svg" alt="Logo my Board" /> {/** Com next não precisa colocar o caminho exato pra buscar a img, ele é inteligente o suficiente p entender */}
                </Link>
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/board">
                        <a>My Board</a>
                    </Link>
                    
                </nav>
                <button>
                    Log in with GitHub
                </button>
            </div>
        </header>
    )
}