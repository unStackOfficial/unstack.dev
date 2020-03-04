import { Link } from "gatsby"
import React from "react"

const unstackLogo =
  "https://res.cloudinary.com/kingisaac95/image/upload/v1581518763/unstack_assets/logo.png"

const Header = () => (
  <header className="flex md:items-end items-center justify-between md:flex-row flex-col bg-primary md:px-12 px-6 py-5">
    <Link to="/">
      <figure>
        <img
          className="h-auto w-24 mx-auto"
          src={unstackLogo}
          alt="unstack logo"
        />
      </figure>
    </Link>
    <section className="flex mt-4 md:mt-0">
      <h4 className="m-0">
        <Link to="/speakers" className="text-white no-underline">
          Speakers
        </Link>
      </h4>
      {/* <h4 className="m-0 ml-4">
        <Link to="/schedule" className="text-white no-underline">
          Schedule
        </Link>
      </h4> */}
      <h4 className="m-0 ml-4">
        <Link to="/#organizers" className="text-white no-underline">
          Organizers
        </Link>
      </h4>
    </section>
  </header>
)

export default Header
