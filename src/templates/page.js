import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const PageTemplate = ({ data }) => {
  const page = data.wpPage
  return (
    <Layout>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
    }
  }
`

export default PageTemplate
