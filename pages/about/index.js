import Router from "next/router";
import {MainLayout} from "../../layouts/mainlayout";

export default function Index() {
  const linkClickHandler = () => {
    Router.push('/')
  }
  return(
    <MainLayout title={'About Page'}>
      <h1>About</h1>
      <button onClick={linkClickHandler}>Go back to Home</button>
      <button onClick={() => {Router.push('/posts')}}>Go back to Posts</button>
    </MainLayout>
  )
}
