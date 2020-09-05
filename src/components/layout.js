import React from "react"
import { Link } from "@reach/router"
import "./layout.scss"
import { StaticQuery, graphql } from "gatsby"

export default function Layout({children}) {
  return (
      <div style={{ maxWidth: '800px', margin: '0 auto'}}>
        <StaticQuery
            query={graphql`
            query HeadingQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
            `}
            render={data => (
            <header>
                <h1>{data.site.siteMetadata.title}</h1>
            </header>
            )}
        />         
          <br/>
          {children}
          <br/>
          <h3><Link to="about">About</Link>    *  <Link to="/">Home</Link></h3>
      </div>
  )
}