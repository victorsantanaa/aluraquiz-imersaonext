import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import Head from 'next/head'

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <>
    <Head>
    <title>Quiz TODO PODEROSO TIMÃO!</title>
        <meta name="title" content="Quiz SNK" />
        <meta name="description" content="Teste seus conhecimentos SNK" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Quiz SNK" />
        <meta property="og:description" content="Teste seus conhecimentos SNK" />
        <meta property="og:image" content="https://images4.alphacoders.com/607/thumb-1920-607877.jpg" />
        <meta property="og:image:secure_url" content="https://images4.alphacoders.com/607/thumb-1920-607877.jpg" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://images4.alphacoders.com/607/thumb-1920-607877.jpg" />
        <meta property="twitter:title" content="Quiz SNK" />
        <meta property="twitter:description" content="Teste seus conhecimentos SNK" />
        <meta property="twitter:image" content="https://images4.alphacoders.com/607/thumb-1920-607877.jpg" />
    </Head>
    <QuizBackground backgroundImage = {db.bg}>
      <QuizContainer>
        <Widget>
        <Widget.Header>
            <h1>Olá, eu sou desenvolvido em Next.js</h1>

            </Widget.Header>
          <Widget.Content>
           
            <p>Aqui ta tudo o que deve ser escrito referido e refenciado conforme isoo blabblablo</p>
          </Widget.Content>
        </Widget>

        <Widget>
        <Widget.Header>
            <h1>Olá, eu sou desenvolvido em Next.js</h1>

            </Widget.Header>
          <Widget.Content>
            <p>Aqui ta tudo o que deve ser escrito referido e refenciado conforme isoo blabblablo</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl = "https://github.com/victorsantanaa"/>
    </QuizBackground>
    </>
  )
}
