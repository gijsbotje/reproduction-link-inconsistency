import NextLink from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Revalidate() {
    return (
        <>
            <h1>Revalidate</h1>
            <p>Revalidates every 30 seconds</p>
            <NextLink href="/">
                home
            </NextLink>
        </>
    )
}

export const getStaticProps = () => {
  return {
    props: {},
    revalidate: 30,
  }
}