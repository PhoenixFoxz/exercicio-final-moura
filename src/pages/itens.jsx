import Head from "next/head";
import ListaItens from "../components/ListaItens";

export default function Itens() {
  return (
    <>
      <Head>
        <title>Itens - Final Fantasy XIV</title>
        <meta name="description" content="Free Company do Final Fantasy XIV" />
      </Head>
      <section>
        <h2>Conheça os Itens do Final Fantasy XIV!</h2>
      </section>
      <ListaItens />
    </>
  );
}
