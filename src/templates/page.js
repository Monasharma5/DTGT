import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../components/layout"
import Seo from "../components/seo"

const PageTemplate = ({ data: { page } }) => {
  return (
    <Layout>
      <Seo title={page.title} description={page.excerpt} />

      <article className="page">
        <h1>{parse(page.title)}</h1>
        <div>{parse(page.content)}</div>
      </article>
    </Layout>
  )
}

export default PageTemplate

export const query = graphql`
  query PageById($id: String!) {
    page: wpPage(id: { eq: $id }) {
      id
      title
      excerpt
      content
      uri
    }
  }
`
