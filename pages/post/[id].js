import { useRouter } from "next/router"
import Head from "next/head"
import moment from "moment"
import Navbar from "../../components/navbar"
const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description[0]} />
      </Head>
      <Navbar />
      <div className="single-post">
        <div className="data">
          <h1>{post.title}</h1>
          <img src={post.postIMG} alt="post-pic" />
          <div className="info">
            <p>
              by - <span className="author">{post.author}</span>
            </p>
            <p>{moment(post.data).format("DD-MMM-YYYY")}</p>
          </div>
          <div className="text">
            {post.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://blog-projects-api.herokuapp.com/api/post")
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post._id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://blog-projects-api.herokuapp.com/api/post/${params.id}`
  )
  const post = await res.json()

  return {
    props: {
      post,
    },
  }
}

export default Post
