import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Final Fantasy XIV</title>
        <meta
          name="description"
          content="Site de informações do Final Fantasy XIV"
        />
      </Head>
      <section>
        <h2>Bem-Vindo ao Final Fantasy XIV!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus ab
          expedita possimus ducimus cupiditate consequuntur delectus architecto
          laudantium fugit quas labore iusto iure animi fuga pariatur ullam
          sapiente accusantium ex aperiam, hic est incidunt quo! Minus harum
          inventore veniam fuga facilis! Repudiandae quia numquam nulla quos
          sit, totam est dolor nostrum ipsam architecto maxime nobis, hic labore
          in magni quaerat delectus molestias pariatur consectetur velit
          necessitatibus soluta. Dolore sint laboriosam ut eos! Eos enim,
          perferendis eum delectus facere autem quos explicabo dolor culpa,
          praesentium ex? Doloremque quis cum enim voluptate sapiente repellat
          consectetur reiciendis nesciunt provident laboriosam, perspiciatis
          quasi, nemo magni corporis dolore tempore quam asperiores similique
          rem corrupti fugiat, autem vero at! Cumque ea explicabo voluptatibus,
          esse voluptates recusandae similique ex accusamus, voluptatum harum
          beatae saepe maxime architecto nisi.
        </p>
        <StyledImg
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1cec3ab-18e2-4db8-a5b6-0e2723694736/d48amu8-1affac56-9e8a-49b4-8f66-2b492f1f1251.png/v1/fill/w_1195,h_669/fft__war_of_the_lions_logo_by_eldi13_d48amu8-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2NyIsInBhdGgiOiJcL2ZcL2QxY2VjM2FiLTE4ZTItNGRiOC1hNWI2LTBlMjcyMzY5NDczNlwvZDQ4YW11OC0xYWZmYWM1Ni05ZThhLTQ5YjQtOGY2Ni0yYjQ5MmYxZjEyNTEucG5nIiwid2lkdGgiOiI8PTI0NDMifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.JeBGRzpl64GiQDQjjmyrMIFT4Ausn0k1ZI8vasvBiOo"
          alt="Final Fantasy Tactics logo"
        ></StyledImg>
      </section>
    </>
  );
}

const StyledImg = styled.img`
  width: 100%;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
