import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Final Fantasy XIV</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/personagens">Personagens</Link>
          <Link href="/company">Company</Link>
          <Link href="/sobre">Sobre</Link>
        </nav>
      </header>
      <main className="limitador">{children}</main>
    </>
  );
}
