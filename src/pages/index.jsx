import Head from 'next/head';

import Hero from '../components/Hero';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Newsletter Vip | Dayane Silva</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <div className={styles.newsletter}>
          <h1>Entre para minha Lista VIP</h1>

          <p>
            Faça parte da minha lista exclusiva e receba conteúdos semanais
            sobre: <mark>Negócios</mark>, <mark>Empreendedorismo</mark>,{' '}
            <mark>Marketing</mark>, <mark>Posicionamento</mark> e{' '}
            <mark>Imagem Pessoal</mark>. <br />
            Aqui quero compartilhar experiências, insights e novidades para você
            construir uma marca <strong>FORTE</strong> no digital!
          </p>

          <form
            id="sib-form"
            method="POST"
            action="https://04c4e6f3.sibforms.com/serve/MUIEALcfYhQ6OY98UQxiExZs7K8a_Ed0ddpL7QkPdJE8wA0Jull5JCRDP0jAgNqEEubSLJRGKVlR4LeqpiGBl_cE6wKFiIVNJiWklUUeHHVs5Jy5eyUs4QNQ8JhOUrrULEqagDo0rxB_Xf90Kdpv-tC2sbQNF2AeMKZ5gymB-IR0WI3DPdXcx8AoTHVh7vmnwvAESFnznkOOVV-U"
          >
            <input
              type="email"
              id="EMAIL"
              name="EMAIL"
              autoComplete="off"
              placeholder="E-mail"
              data-required="true"
              required
            />

            <button form="sib-form" type="submit">
              Quero Fazer parte da Lista Vip
            </button>

            <input type="hidden" name="locale" value="pt" />
            <input type="hidden" name="html_type" value="simple" />
          </form>
        </div>
      </Hero>
    </>
  );
}
