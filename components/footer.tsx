import Head from 'next/head'
import styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
        <ul className={styles.containerlink}>
            <li className={styles.items}>
                <a href="/projects" className={styles.link}>Projects</a>
            </li>
            <li className={styles.items}>
                <a href="/contact" className={styles.link}>Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Footer
