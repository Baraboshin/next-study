import {MainLayout} from "../../layouts/mainlayout";
import { useState, useEffect } from 'react'
import Link from "next/link";
import {useRouter} from "next/router";
import {NextPageContext} from "next";
import {MyPost} from "../../interfaces/post";

interface PostPageProps {
  post: MyPost,
}

export default function Post({ post: serverPost }) {

  const [post, setPost] = useState(serverPost)
  const router = useRouter()

  useEffect(() => {
    async function load() {
      const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
      const data = await response.json()
      setPost(data)
    }
    if (!serverPost) {
      load()
      console.log('load');
    }
  },[])

  if (!post) {
    return <MainLayout>
      <p>Loading...</p>
    </MainLayout>
  }

  return(
    <MainLayout title={`Post ${post.title}`}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={'/posts'}>
        <a>Back to All Posts</a>
      </Link>
    </MainLayout>
  )
}

// Post.getInitialProps = async({ query, req }) => {
//   if (!req) return { post: null }
//   const response = await fetch(`http://localhost:4200/posts/${query.id}`)
//   const post = await response.json()
//   return {
//     post,
//   }
// }

interface PostNextPageContext extends NextPageContext{
  query: {
    id: string
  }
}

export async function getServerSideProps({ query, req }: NextPageContext) {
  const response = await fetch(`http://localhost:4200/posts/${query.id}`)
  const post: MyPost = await response.json()
  return {
    props: {
      post,
    }, // will be passed to the page component as props
  }
}
