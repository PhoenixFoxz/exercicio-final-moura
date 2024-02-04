import Link from "next/link";
import styled from "styled-components";

export default function ListaItens({ itens }) {
  return (
    <StyledListaItens>
      {itens.map((item) => {
        return (
          <article key={item.id}>
            <Link href="/">
              <h3>Título do post...</h3>
              <p>{item.Name}</p>
            </Link>
          </article>
        );
      })}
    </StyledListaItens>
  );
}

const StyledListaItens = styled.div`
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

  & h3 {
    font-weight: 700;
  }
`;
