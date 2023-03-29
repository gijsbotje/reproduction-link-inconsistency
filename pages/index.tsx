import NextLink from 'next/link';

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <NextLink href="/revalidate/" legacyBehavior>
                <a>
                    revalidated page
                </a>
            </NextLink>
        </>
    )
}

export const getStaticProps = () => {
    return {
        props: {},
    }
}