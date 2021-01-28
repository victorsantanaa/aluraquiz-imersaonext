import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

// const QuizContainer = styled.div`
//   width: 100%;
//   max-width: 350px;
//   padding-top: 45px;
//   margin: auto 10%;
//   @media screen and (max-width: 500px) {
//     margin: auto;
//     padding: 15px;
//   }
// `;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>
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
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('fazendo uma submissão por meio do react');

              // router manda para a outra página
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Me informa seu nomezinho pfvr?"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Olá, eu sou desenvolvido em Next.js</h1>

          </Widget.Header>
          <Widget.Content>
            <p>Aqui ta tudo o que deve ser escrito referido e refenciado conforme isoo bblablo</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/victorsantanaa" />
    </QuizBackground>
  );
}
