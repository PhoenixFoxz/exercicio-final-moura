import Head from "next/head";
import styled from "styled-components";
import serverItemApi from "../api/server";

export async function getStaticProps({ params }) {
  const { ID } = params;
  try {
    const resposta = await fetch(`${serverItemApi}search?filters=ID=${ID},ClassJobCategory.ID=38`);
    const dados = await resposta.json();
    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    return {
      props: { dados },
    };
  } catch (error) {
    console.error("Deu ruim:" + error.message);
    return {
      notFound: true,
    };
  }
}


export async function getStaticPaths() {
  return {
    paths: [],

    fallback: "blocking",
  };
}

export default function Item({ dados }) {
  const results = dados.Results
  const tituloPagina = `${results.Name} - Final Fantasy XIV`;
  return (
    <>
      <Head>
        <title> {tituloPagina} </title>
        <meta name="description" content={results.Name} />
      </Head>

      <StyledItens>
        <img src={"https://xivapi.com"+results.Icon} alt={results.Name} />
          <h3>{results.Name}</h3>
      </StyledItens>
    </>
  );
}

const StyledItens = styled.div` 

  article {
    background-color: #f7f7f7;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    transition: transform 200ms;
    text-align: center;

    & p > img {
    width: 10%;
  }

  }

  article:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    article {
      width: 49%;
    }
  }

  & a {
    text-decoration: none;
    color: black;

    &:hover,
    &:focus {
      color: #1a18a7;
      transition: 500ms;
    }
  }

  & h3 {
    font-weight: 700;
  }
`;
