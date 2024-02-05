import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";

export default function Menu() {
  const linkAtivo = usePathname();
  return (
    <StyledNav>
      <Link className={linkAtivo === "/" ? "ativo" : ""} href="/">
        Home
      </Link>
      <Link
        className={linkAtivo === "/personagens" ? "ativo" : ""}
        href="/personagens"
      >
        Personagens
      </Link>
      <Link className={linkAtivo === "/itens" ? "ativo" : ""} href="/itens">
        Itens
      </Link>
      <Link className={linkAtivo === "/sobre" ? "ativo" : ""} href="/sobre">
        Sobre
      </Link>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    background-color: var(--cor-primaria-fundo);
    color: var(--cor-primaria);
    padding: 0.8rem 3rem;
    transition: 0.25s;

    &:last-child {
      border-top-right-radius: var(--borda-arredondada);
      border-bottom-right-radius: var(--borda-arredondada);
    }

    &:first-child {
      border-top-left-radius: var(--borda-arredondada);
      border-bottom-left-radius: var(--borda-arredondada);
    }

    &:hover,
    &:focus {
      background-color: var(--cor-primaria-fundo-hover);
    }

    @media screen and (max-width: 700px) {
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 10px;
    }
  }

  a.ativo {
    background-color: black;
  }
`;
