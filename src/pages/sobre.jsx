import Head from "next/head";
import styled from "styled-components";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - Final Fantasy XIV</title>
        <meta name="description" content="Explicando o Final Fantasy XIV" />
      </Head>
      <section>
        <h2>Sobre o Site</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          necessitatibus expedita cupiditate autem illum nulla, perspiciatis
          molestiae magnam officiis enim error, labore nemo quaerat vitae
          dolores, dolorem numquam atque? Eveniet dignissimos, autem voluptas
          vel voluptatibus totam quis repellendus, sint, ut velit voluptatum
          enim praesentium? Optio, deleniti? Magnam nostrum optio soluta
          temporibus accusamus dolorum tempora tenetur error ducimus laboriosam,
          voluptatem ullam dignissimos ipsa asperiores nulla natus! Adipisci,
          ratione. Cumque inventore quas eos beatae est reiciendis ullam
          similique animi voluptatibus aspernatur possimus debitis praesentium
          quae molestias quibusdam quisquam aut nesciunt consequatur, alias
          dolorum nostrum, amet nam tenetur eius? Aliquam a distinctio deserunt
          cum ad consequuntur placeat corrupti, nesciunt sunt inventore officia,
          vel beatae quas? Necessitatibus ut nostrum error! Dolor ab cum
          excepturi harum quisquam expedita maiores, sunt pariatur similique
          eius accusamus quis consequuntur suscipit modi sequi id et dolorum
          quam dolorem necessitatibus veritatis aperiam provident voluptatem!
          Cum placeat accusantium sunt aliquam recusandae?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta error
          voluptatum illo porro perspiciatis modi iure, doloremque incidunt
          quae! Natus facere ratione veniam nemo autem quaerat, commodi
          voluptatem voluptas, libero explicabo minus iste eum iure tempora
          architecto unde repellendus rem, modi voluptatum quasi corporis. Cum,
          debitis sed ratione recusandae perferendis harum laboriosam molestiae
          omnis dicta iure odio enim mollitia et voluptatibus! Ducimus excepturi
          in dicta architecto? Praesentium cupiditate earum placeat. Ducimus
          doloremque veniam dolorum beatae velit, perspiciatis debitis inventore
          atque aliquam minus deserunt alias reiciendis sapiente amet soluta,
          qui saepe maiores magni eum molestiae eligendi mollitia totam! Dicta,
          perferendis fugit.
        </p>
      </section>
      <StyledImg
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1cec3ab-18e2-4db8-a5b6-0e2723694736/d486ych-22dfe433-4186-47a6-85cc-82d7c75284a7.png/v1/fill/w_1175,h_680/final_fantasy_tactics_logo_by_eldi13_d486ych-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE3OSIsInBhdGgiOiJcL2ZcL2QxY2VjM2FiLTE4ZTItNGRiOC1hNWI2LTBlMjcyMzY5NDczNlwvZDQ4NnljaC0yMmRmZTQzMy00MTg2LTQ3YTYtODVjYy04MmQ3Yzc1Mjg0YTcucG5nIiwid2lkdGgiOiI8PTIwMzgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.TwK2iXJK2MF341QcTdfSoPZydgw0fw4rvQHaPIZOa10"
        alt="Final Fantasy XI logo"
      />
    </>
  );
}

const StyledImg = styled.img`
  width: 100%;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
