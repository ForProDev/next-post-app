import Link from "next/link"
import Head from "next/head"
import Navbar from "../components/navbar"
function HomePage() {
  return (
    <>
      <Head>
        <title>Blogging App</title>
        <meta
          name="description"
          content="the best platform to share knowledge with in the developer circles"
        />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <Navbar />
      <div className="landing">
        <h1>
          READ & WRITE the BEST in <span>BLOGS</span>
        </h1>
        <p>
          Login or signup to contribute to this not for profit website & help
          the needed ones with your knowledge.
        </p>

        <Link href="/post" className="btn btn-lg">
          <button className="btn-lg">Read for free.</button>
        </Link>
      </div>
    </>
  )
}

export default HomePage
