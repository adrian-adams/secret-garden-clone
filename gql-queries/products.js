const productQuery = `query ProductsQuery {
  products {
    availability
    color
    deliveryRange
    deliveryTime
    id
    petFriendly
    plantColour {
      ... on PlantColour {
        id
        plantColour
      }
    }
    plantSize {
      id
      plantSizes
    }
    price
    productInfo
    qty
    slug
    sun
    tags
    title
    water
    thumbnail {
      fileName
      id
      url
    }
  }
}`

export { productQuery };