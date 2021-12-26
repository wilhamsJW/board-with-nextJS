import Link from 'next/link'

import styles from './styles.module.scss'

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                {/** Com next não precisa colocar o caminho exato pra buscar a img, ele é inteligente o suficiente p entender 
                 * 
                 * OBS: Havia um erro chamado: "Multiple children were passed to
                    Why This Error Occurred"
                    isso ocorreu pq havia um comentário dentro da tag LINK e ele entendeu como outro elemento
                    ou seja não é suportado vários filhos ou tags dentro de uma mesma TAG <LINK />

                    https://nextjs.org/docs/messages/link-multiple-children
                */}
                <Link href="/">
                    <img src="/img/logo.svg" alt="Logo my Board" />
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