import NextLink from "next/link";
import {useRouter} from "next/router";

/** Add your relevant code here for the issue to reproduce */
export default function Demo1() {
    const { query } = useRouter();
    const { slug } = query;

    return (
        <>
            <h1>{slug}</h1>
            <NextLink href="/">
                home
            </NextLink><br/>
            <NextLink href="/revalidate">
                Revalidated page
            </NextLink>
        </>
    )
}

export const getStaticProps = () => {
    return {
        props: {},
    }
}

export const getStaticPaths = () => {
    return {
        paths: [
            {params: { slug: 'alpha/' }},
            {params: { slug: 'beta/' }},
            {params: { slug: 'charlie' }},
            {params: { slug: 'delta/' }},
        ],
        fallback: true,
    }
}
