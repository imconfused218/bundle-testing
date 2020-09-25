import axios from 'axios';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import ScoreboardContainer from '../scoreboard';
import SEOExternal from '../config/seo-external';


export default function Scoreboard({ games, title }) {
  return (
    <Layout >
      <Head>
        <title>{siteTitle}</title>
      </Head>
     <ScoreboardContainer title={title} games={games} />
    </Layout>
  )
}

export async function getServerSideProps() {
    const games = await axios(
    `https://api-stage.sprtactn.co/web/v1/scoreboard/nfl?bookIds=15&date=20180620`
  ).then((response) => response.data.games);

  const title = SEOExternal.pages.home.metaTitle

  return {
    props: {
      games,
      title
    }
  }
}
