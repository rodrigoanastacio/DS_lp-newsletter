import Head from 'next/head';

import Hero from '../../components/Hero';
import FollowMe from '../../components/FollowMe';

import styles from '../../styles/Home.module.scss';

const cadastroConfirmado = () => {
  return (
    <>
      <Head>
        <title>Cadastro Confirmado | Dayane Silva</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero>
        <div className={styles.newsletter}>
          <h1>Obrigada, agora você faz parte da minha lista Vip!</h1>

          <p>
            Aqui será um espaço para que eu possa compartilhar conteúdos
            exclusivos, que farão diferença no seu crescimento e também nos
            resultados do seu negócio.
          </p>

          <h3>Me acompanhe nas Redes Sociais</h3>
          <FollowMe />
        </div>
      </Hero>
    </>
  );
};

export default cadastroConfirmado;
