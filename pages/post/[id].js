import {useRouter} from "next/router";
import {MainLayout} from "../../layouts/mainlayout";
import { useState, useEffect } from 'react'
import Link from "next/link";

export default function Post({ post }) {
  const router = useRouter();
  console.log(router);

  return(
    <MainLayout>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={'/posts'}>
        <a>Back to All Posts</a>
      </Link>
    </MainLayout>
  )
}

Post.getInitialProps = async(ctx) => {
  const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`)
  const post = await response.json()
  return {
    post,
  }
}

