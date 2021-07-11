import {MainLayout} from "../layouts/mainlayout";
import  { useState, useEffect } from 'react'
import Link from "next/link";
import {MyPost} from "../interfaces/post";
import {NextPageContext} from "next";


interface PostsPageProps {
  posts: MyPost[]
}

export default function Posts({ posts : serverPosts } : PostsPageProps) {

  const [posts, setPosts] = useState(serverPosts)

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts`)
      const posts = await response.json()
      setPosts(posts)
    }
    if(!serverPosts) {
      load()
      console.log('load');
    }
  }, []);

  if(!posts) {
    return <MainLayout>
      <p>Laoding...</p>
    </MainLayout>
  }

  return(
    <MainLayout title={'Posts Page'}>
      <h1>Posts</h1>
      <ul>
        { posts.map(post => (
          <li key={post.id}>
            <Link href={'/post/[id]'} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

Posts.getInitialProps = async({ req }: NextPageContext) => {
  if(!req) return { posts: null }
  const response = await fetch(`${process.env.API_URL}/posts`)
  const posts: MyPost[] = await response.json()
  return {
    posts,
  }
}
