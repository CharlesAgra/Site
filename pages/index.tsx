import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Footer from '../components/footer'
import utilStyles from '../styles/utils.module.css'

export default function Index() {
  return (
    <>
      <Layout/>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Desenvolvedor Backend Jr</p>
        <p>Bacharelado em Ciência da Computação. Gosto de música, livros e futebol.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <p>Feito com 💜 | <a href="https://github.com/CharlesAgra/" target="_blank\">Charles Agra</a></p>
      </section>
      <Footer/>
    </>
  )
}