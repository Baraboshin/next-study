import {MainLayout} from "../layouts/mainlayout";
import  { useState, useEffect } from 'react'

export default function About() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function load() {
      const response = await fetch('http://localhost:4200/posts')
      const json = await response.json()
      setPosts(json)
      console.log(json)
    }
    load()
  }, [])

  return(
    <MainLayout title={'Posts Page'}>
      <h1>Posts</h1>
      <ul>
        <li></li>
      </ul>
      <pre>{JSON.stringify(posts)}</pre>
    </MainLayout>
  )
}
