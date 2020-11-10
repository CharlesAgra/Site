import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Footer from '../components/footer'
import utilStyles from '../styles/utils.module.css'

export default function Index() {
  return (
    <>
      <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Layout/>
        <Head> <title>{ siteTitle }</title> </Head>

        <section style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'center'}} className={utilStyles.headingMd}>
          <p>Desenvolvedor Backend Jr</p>
          <p>Bacharelado em Ciência da Computação. Gosto de música, livros e futebol.</p>
          <p>Feito com 💜 | <a href="https://github.com/CharlesAgra/" target="_blank\">Charles Agra</a></p>
        </section>
      
        <Footer />
      </div>
    </>
  )
}