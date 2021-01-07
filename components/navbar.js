import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faFire } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link className="navbar-brand" href="/">
          <h3 id="logo">
            <FontAwesomeIcon icon={faFire} /> Blogging
          </h3>
        </Link>
        <div className="buttons">
          <Link href="/post">
            <button className="btn-mid active">Posts</button>
          </Link>
        </div>
        <div className="mob-nav">
          <Link href="/post">
            <button className="btn-mid">
              <FontAwesomeIcon icon={faBook} />
            </button>
          </Link>
        </div>
      </nav>
    </>
  )
}
