import Head from "next/head"
import Navbar from "../../components/navbar"
import Link from "next/link"
import moment from "moment"

function shorten(str, maxLen, separator = " ") {
  if (str.length <= maxLen) return str
  return str.substr(0, str.lastIndexOf(separator, maxLen))
}

function PostsPage({ posts }) {
  return (
    <div>
      <Head>
        <title>Blogging App</title>
        <meta
          name="description"
          content="the best platform to share knowledge with in the developer circles"
        />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <Navbar />
      <div className="home">
        <h5>Welcome Guest</h5>
        <div className="post">
          {posts.map((post) => (
            <div className="post-card" key={post._id}>
              <div className="image">
                <img src={post.postIMG} alt="post-pic" />
              </div>
              <div className="post-info">
                <Link href={`/post/${post._id}`}>
                  {post.title.length < 40 ? (
                    <h2 className="h-mid">{post.title}</h2>
                  ) : (
                    <h2 className="h-sm">{post.title}</h2>
                  )}
                </Link>
                <p>{shorten(post.description.join(), 130, " ")}...</p>
                <div className="author-data">
                  <div className="author">
                    <h3>{post.author}</h3>
                    <p>{moment(post.date).format("DD-MMM-YYYY")}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://blog-projects-api.herokuapp.com/api/post")
  const posts = await res.json()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts,
    },
  }
}

export default PostsPage
