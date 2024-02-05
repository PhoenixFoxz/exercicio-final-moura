import Head from "next/head";
import serverItemApi from "./api/server";
import ListaItens from "../components/ListaItens";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverItemApi}search?filters=LevelItem>1,ClassJobCategory.ID=38`);
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

export default function Itens({dados}) {
  const results = dados.Results
  return (
    <>
      <Head>
        <title>Itens - Final Fantasy XIV</title>
        <meta name="description" content="Free Company do Final Fantasy XIV" />
      </Head>
      <section>
        <h2>Itens do Final Fantasy XIV!</h2>
      </section>
      <ListaItens results={results} />
    </>
  );
}
