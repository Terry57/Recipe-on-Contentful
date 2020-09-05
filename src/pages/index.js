import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default function Home({data}) {
  return (
    <>
    <Layout>
  <h1>Welcome</h1>
  <div class="row">
    {data.allContentfulRecipes.nodes.map((node, index) => (
     
      <div class="col-sm-4">        
          <div class="card">
           <div class="card-body">
               <img class="card-img-top" src={ node.img.file.url } alt= { node.recipe }/>                                
                <p class="card-text">{node.recipe}</p>
                <br/>
                 <div class="btn-group">
                 <a href={node.recipe} class="btn btn-sm btn-outline-secondary">VIEW</a>                 
              </div>
            </div>
          </div>  
       </div>                  
                     
))} 
  
  </div>
 
  </Layout>
  </>
  )
}
     
export const query = graphql`
query MyQuery {
  allContentfulRecipes {
    nodes {
      description {
        description
      }
      img {
        file {
          url
        }
      }
      recipe
    }
  }
}`

  
