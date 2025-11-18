import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PageTemplate = ({ data: { page } }) => {
  return (
    <Layout>
      <Seo title={page.title} />

      <article
        className="wp-page"
        itemScope
        itemType="http://schema.org/WebPage"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <h1>{parse(page.title)}</h1>

        <section>{parse(page.content)}</section>
      </article>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageById($id: String!) {
    page: wpPage(id: { eq: $id }) {
      id
      title
      content
      uri
    }
  }
`
