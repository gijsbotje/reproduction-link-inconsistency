import NextLink from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Revalidate() {
    return (
        <>
            <h1>Revalidate</h1>
            <p>Revalidates every 30 seconds</p>
            <NextLink href="/">
                home
            </NextLink><br/>
            <NextLink href="/dynamic/alpha/" legacyBehavior>
                <a>
                    dynamic pre rendered page
                </a>
            </NextLink><br/>
            <NextLink href="/dynamic/kilo/" legacyBehavior>
                <a>
                    dynamic ISR page
                </a>
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