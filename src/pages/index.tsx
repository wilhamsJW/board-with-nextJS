import Head from 'next/head';

import styles from '../styles/styles.module.scss';

export default function Home() {
  return (
    <>
    <Head>
        <title>Board - Organizing your tasks.</title>
    </Head>
    <div>
      <h1 className={styles.title}>
        Primeiro Projeto NextJS
      </h1>
    </div>
    </>
  )
}
