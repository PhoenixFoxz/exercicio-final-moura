import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function Company() {
  return (
    <>
      <Head>
        <title>Free Company - Final Fantasy XIV</title>
        <meta name="description" content="Free Company do Final Fantasy XIV" />
      </Head>
      <section>
        <h2>Conheça as Free Company do Final Fantasy XIV!</h2>
      </section>
      <StyledListaPerso>
        <article>
          <Link href="/">
            <h3>Título do post...</h3>
            <p>Subtítulo do post...</p>
          </Link>
        </article>
        <article>
          <Link href="/">
            <h3>Título do post...</h3>
            <p>Subtítulo do post...</p>
          </Link>
        </article>
        <article>
          <Link href="/">
            <h3>Título do post...</h3>
            <p>Subtítulo do post...</p>
          </Link>
        </article>
        <article>
          <Link href="/">
            <h3>Título do post...</h3>
            <p>Subtítulo do post...</p>
          </Link>
        </article>
      </StyledListaPerso>
    </>
  );
}

const StyledListaPerso = styled.div`
  article {
    background-color: #f7f7f7;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    transition: transform 200ms;
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
`;
