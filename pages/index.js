import React from 'react';
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
        <meta property="og:image" content={db.bg} />
        <title>{db.title}</title>
        <meta property="og:title" content={db.title} key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href={db.icon} />
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

              const audio = document.getElementById('bgm');
              audio.loop = true;
              audio.load();
              audio.play();

              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Qual seu nome, guerreiro?"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Tatakae!
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Os outros quizes desenvolvidos durante a Imersão React da Alura</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Aqui ficarão os quizzes da galera, aguarde...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/victorsantanaa" />
    </QuizBackground>
  );
}
