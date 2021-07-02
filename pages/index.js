import Link from "next/link";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Next Title</title>
        <meta name={'name'} content="next, nextjs, javascript, react"/>
        <meta name={'description'} content="next, nextjs, javascript, react"/>
      </Head>
      <h1>Hello Next.JS!</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/posts">
          <a >Posts</a>
        </Link>
      </p>
      <p>Lorem ipsum</p>
    </>
  )
}
