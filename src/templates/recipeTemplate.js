import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function recipeTemplate({data}) {
    const recipe = data.contentfulRecipes
    return (
        <Layout>
            <h2>{recipe.name}</h2>
            <img src={recipe.img.file.url} alt={recipe.recipe} class="img-thumbnail" />
            <p>
                {recipe.description.description}
            </p>

        </Layout>
    )
}

export const query = graphql`
query recipeQuery($slug: String!) {
    contentfulRecipes(recipe: {eq: $slug}) {
      recipe,
      description {
        description
      }
      img {
        file {
          url
        }
        title
      }
    }
  }
`