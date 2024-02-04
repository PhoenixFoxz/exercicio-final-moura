import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Pagina404() {
  return (
    <>
      <Head>
        <title>Ops - Final Fantaxy XIV</title>
      </Head>
      <Styled404>
        <h2>Kupo kupo kupo! Foi mal!</h2>
        <h3>Ops! Algo deu errado!</h3>
          <img
            src="/images/404.png" 
            alt="Ilustração de um Moogle"
          />
      </Styled404>
    </>
  );
}

const Styled404 = styled.section`
  text-align: center;
  img {
    max-width: 30%;
  }
`;