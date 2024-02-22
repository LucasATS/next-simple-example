import Link from "next/link";


interface ProductProps {
    params: {
        id: string
    }
}


export default function Home({ params }: ProductProps) {
    return (
        <>
            <h2>id: {params.id}</h2>
            <Link href="/calca">Voltar</Link>
        </>
    );
}