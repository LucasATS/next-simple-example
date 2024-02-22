import Image from "next/image";
import Link from "next/link";

export default async function About() {
    const resp = await fetch('https://api.github.com/users/lucasATS');
    const user = await resp.json();

    const resp1 = await fetch('https://api.github.com/users/LucasATS/repos', {
        next: {
            revalidate: 30,
        },
    });
    const repos = await resp1.json();

    const resp2 = await fetch('https://worldtimeapi.org/api/timezone/America/Campo_Grande', {
        next: {
            revalidate: 5,
        },
    });
    const clock = await resp2.json();

    return (
        <>
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

            <h2>About</h2>
            <p>Time {clock?.unixtime}</p>
            <Link href="/">Home</Link>
            <br />
            <br />
            <Image src={user?.avatar_url} alt="avatar_url" width={100} height={100} />
            <pre>{user?.bio}</pre>

            {/* <pre>{JSON.stringify(repos, null, 2)}</pre> */}

            <h3>Repositórios</h3>
            <ul>
                {
                    repos.map((_item: any, _key: any) =>
                        <li key={_key}>
                            <a href={_item?.html_url}>{_item?.name}</a>
                            <p>{_item?.description}</p>
                            <br />
                        </li>
                    )
                }
            </ul>
        </>
    );
}