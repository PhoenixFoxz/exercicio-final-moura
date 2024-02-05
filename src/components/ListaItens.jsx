import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function ListaItens({ results }) {
  return (
    <StyledListaItens>
      {results.map((item) => {
        return (
          <article key={item.ID}>
            <Link href={`/itens/${item.ID}`}>
              <p>
                <Image src={"https://xivapi.com" + item.Icon} alt={item.Name} />
              </p>
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
    text-align: center;

    & p > img {
      width: 17%;
    }
  }

  article:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media screen and (min-width: 730px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    article {
      width: 32%;
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
