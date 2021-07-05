import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title = 'Next App' }) {
  return (
   <>
     <Head>
       <title>{title} | Next Study</title>
       <meta name={'name'} content="next, nextjs, javascript, react"/>
       <meta name={'description'} content="next, nextjs, javascript, react"/>
     </Head>
     <nav>
       <Link href={'/'}>
         <a>Home</a>
       </Link>
       <Link href={'/posts'}>
         <a>Posts</a>
       </Link>
       <Link href={'/about'}>
         <a>About</a>
       </Link>
       <Link href={'/about/author'}>
         <a>Author</a>
       </Link>
     </nav>
     <main>
       { children }
     </main>
     <style jsx>{`
       nav {
         position: fixed;
         display: flex;
         justify-content: space-around;
         align-items: center;
         height: 60px;
         top: 0;
         left: 0;
         right: 0;
         background: darkblue;
       }
       
       nav a {
         color: white;
         text-decoration: none;
       }
       
       main {
        margin-top: 60px;
       }
     `}</style>
   </>
  )
}
