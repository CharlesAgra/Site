import Head from 'next/head'
import { useState, useEffect} from 'react'
import Layout, { siteTitle } from '../components/layout'
import Footer from '../components/footer'
import Table from '../components/table'
import axios from 'axios'


export default function Projects() {
    const [repo, setRepo] = useState([]);

    async function getRepositories(){
        let { data: repositories }: any = await axios({
            url: 'https://api.github.com/users/CharlesAgra/repos'
        });

        repositories.map(repo => {
            let formatDate = new Date(repo.created_at);
            repo.created_at = formatDate.toISOString().split('T')[0]; 
        })

        setRepo(repositories);
    }

    useEffect(() => {
        getRepositories();
    }, []);

    return (
        <>
            <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Layout/>
                <Head> <title>{siteTitle}</title> </Head>
                <h2 style={{ textAlign: 'center' }}>SOFTWARE REPOSISORY</h2>
				<Table data={repo}/>
				<p style={{ marginBottom: '0.5%' }}></p>
                <Footer/>
            </div>
        </>
    )
}
