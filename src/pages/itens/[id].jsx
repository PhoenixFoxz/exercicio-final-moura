import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import serverItemApi from "../api/server";

export async function getStaticProps({ params }) {
  const { id } = params;

  try {
    const resposta = await fetch(`${serverItemApi}/item/${id}`);

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }
    const dados = await resposta.json();

    return {
      props: {
        description: dados,
      },
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

export default function Item({ description }) {
  const tituloPagina = `${description.Name} - Final Fantasy XIV`;

  const descricao =
    description.BaseParam0 != null
      ? description.BaseParam0.Description
      : "Description soon";
  return (
    <>
      <Head>
        <title> {tituloPagina} </title>
        <meta name="description" content={description.Name} />
      </Head>

      <StyledItens>
        <article>
          <Image
            src={"https://xivapi.com/" + description.IconHD}
            alt={description.Name}
            width={300}
            height={300}
          />
          <h3>{description.Name}</h3>
          <Image
            src={"https://xivapi.com/" + description.ItemUICategory.IconHD}
            alt=""
            width={300}
            height={300}
          />
          <p>{descricao}</p>
        </article>
      </StyledItens>
    </>
  );
}

const StyledItens = styled.div`
  text-align: center;

  article {
    margin-top: 50px;
    background-color: #f7f7f7;
    padding: 1rem;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    text-align: center;
    width: 100%;

    & p > img {
      width: 10%;
    }
  }

  img:hover {
    cursor: pointer;
    transition: transform 200ms;
    transform: scale(1.2);
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
