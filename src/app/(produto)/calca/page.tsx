import Link from "next/link";

export default function Home() {
    return (
        <>
            <h2>Calças</h2>
            <Link href="/calca/1">item 1</Link>
            <Link href="/calca/2">item 2</Link>
            <Link href="/calca/3">item 3</Link>
            <Link href="/calca/4">item 4</Link>
            <Link href="/calca/5">item 5</Link>
            <Link href="/calca/6">item 6</Link>
            <Link href="/calca/7">item 7</Link>
            <br/>
            <Link href="/">Voltar</Link>
        </>
    );
}