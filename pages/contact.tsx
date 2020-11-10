import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Footer from '../components/footer'

export default function Contact() {
  return (
    <>
      <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Layout />
        <Head> <title>{ siteTitle }</title> </Head>
        
        <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center'}}>
          <h2 style={{ textAlign: 'center' }}>CONTACT</h2>
          <p><b>email</b>: csagra216@gmail.com</p>
          <p><a href="https://www.linkedin.com/in/charles-agra-1b838a105/" target="_blank">Linkedin</a></p>
          <Footer />
        </div>
      </div>
    </>
  );
}
