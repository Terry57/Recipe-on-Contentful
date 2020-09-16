import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { firestore } from  "../../firebase"
import Layout from "../components/layout"
import Comments from "../components/comments.js"

export default function RecipeTemplate({data}) {
    const recipe = data.contentfulRecipes
    const [comments, setComments] = useState([])

    useEffect(() => {
      firestore.collection(`comments`).orderBy(`Created`, `desc`).onSnapshot(snapshot => {
        console.log (snapshot.docs)
        const posts = snapshot.docs
          .filter(doc => doc.data().Page === recipe.recipe)
          .map(doc => {
            return { id: doc.id, ...doc.data() }
          })
        setComments(posts)
      })
    }, [recipe] )
    
    return (
        <Layout>
            <h2>{recipe.recipe}</h2>
            <img src={recipe.img.file.url} alt={recipe.recipe} class="img-thumbnail" />
            <p>
                {recipe.description.description}
            </p>
            <Comments comments={comments} page={recipe.recipe} />

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