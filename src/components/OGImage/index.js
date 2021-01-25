import Head from 'next/head'

function IndexPage() {
  return (
    <div>
      <Head>
      <meta property="og:image" content="${db.bg}"/>
      </Head>
    </div>
  )
}

export default IndexPage