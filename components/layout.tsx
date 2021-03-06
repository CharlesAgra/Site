import Head from 'next/head'
import styles from './layout.module.css'

const name = 'Charles Agra'
export const siteTitle = 'Charles Agra | Dev'

interface Ilayout { 
  home?: boolean
}

function Layout({ home }: Ilayout) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/binary.png" />
        <meta name="description" content="website Charles Agra"/>
        <meta property="og:image" content={`https://og-image.now.sh/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}/>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.containerheader}>
        <p>
          <a href="/" className={styles.brand}>{name}</a>
        </p>
        <ul className={styles.containermenu}>
          <li className={styles.containermenuitem}><a href="/projects" className={styles.menuitem}>PROJECTS</a></li>
          <li className={styles.containermenuitem}><a href="/contact" className={styles.menuitem}>CONTACT</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Layout
