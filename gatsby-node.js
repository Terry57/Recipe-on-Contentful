const path = require("path")

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
  
    const recipeTemplate = path.resolve(`src/templates/recipeTemplate.js`)
  
    return graphql(`
        {
          allContentfulRecipes {
            nodes {
              recipe
                description {
                    description
                }
                img {
                    file {
                        url
                    }
                }
            }
        }
    }`
            
    ).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }
  
      result.data.allContentfulRecipes.nodes.forEach((node) => {
        createPage({
            path: node.recipe,
            component: recipeTemplate,  //match path on line 6
            context: {
                slug: node.recipe
            }, // additional data can be passed via context
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
  }