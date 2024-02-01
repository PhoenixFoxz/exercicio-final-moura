import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/personagens">Personagens</Link>
      <Link href="/company">Company</Link>
      <Link href="/sobre">Sobre</Link>
    </nav>
  );
}
