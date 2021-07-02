import Link from "next/link";
import classes from '../styles/error.module.css'
import {MainLayout} from "../layouts/mainlayout";

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1 className={classes.error}>Error 404</h1>
      <p>Please <Link href={'/'}><a>go back</a></Link> safety</p>
    </MainLayout>
  )
}
