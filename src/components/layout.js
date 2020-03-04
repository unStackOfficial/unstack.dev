import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <footer className="py-12 md:px-32 px-16 mt-10 bg-primary text-white text-center">
      © {new Date().getFullYear()}, unStack
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
