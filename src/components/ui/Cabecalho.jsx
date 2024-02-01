import Link from "next/link";
import Menu from "./Menu";
import styled from "styled-components";

export default function Cabecalho() {
  return (
    <StyledHeader>
      <div className="limitador">
        <Link href="/">
          <StyledImg
            src="https://cache.secure.square-enix.com/account/content/ffxiv_register/imgs/template/common/ff14-logo-small.png?ver=17202448015115"
            alt=""
          />
        </Link>
      </div>
      <Menu />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #f7f7f7;
  box-shadow: var(--sombra-box);
  text-align: center;
`;

const StyledImg = styled.img`
  width: 55%;
`;
