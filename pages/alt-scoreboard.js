import axios from 'axios';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import ScoreboardContainer from '../scoreboard/with-config';


export default function Scoreboard({ games }) {
  return (
    <Layout >
      <Head>
        <title>{siteTitle}</title>
      </Head>
     <ScoreboardContainer games={games} />
    </Layout>
  )
}

export async function getServerSideProps() {
    const games = await axios(
    `https://api-stage.sprtactn.co/web/v1/scoreboard/nfl?bookIds=15&date=20180620`
  ).then((response) => response.data.games);


  return {
    props: {
      games,
    }
  }
}
