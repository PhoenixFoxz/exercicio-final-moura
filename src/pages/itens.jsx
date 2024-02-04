import Head from "next/head";
import serverItemApi from "./api/server";
import ListaItens from "../components/ListaItens";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverItemApi}`);
    const data = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    const itens = Object.keys(data.itens).map((item) => {
      return {
        ...data.itens[item],
        id: item,
      };
    });

    return {
      props: { itens },
    };
  } catch (error) {
    console.error("Deu ruim:" + error.message);

    return {
      notFound: true,
    };
  }
}

export default function Itens(data) {
  // const [itens, setItens] = useState([]);
  // useEffect(() => {
  //   const carregarDados = async () => {
  //     const resposta = await fetch(
  //       "https://xivapi.com/search?filters=LevelItem%3E35,LevelItem%3C=40,ClassJobCategory.ID=38"
  //     );
  //     const dados = await resposta.json();
  //     console.log(dados.Results);
  //     setItens(dados.Results);
  //   };
  //   carregarDados();
  // }, []);
  return (
    <>
      <Head>
        <title>Itens - Final Fantasy XIV</title>
        <meta name="description" content="Free Company do Final Fantasy XIV" />
      </Head>
      <section>
        <h2>Conheça os Itens do Final Fantasy XIV!</h2>
      </section>
      <ListaItens itens={ListaItens} />
    </>
  );
}
