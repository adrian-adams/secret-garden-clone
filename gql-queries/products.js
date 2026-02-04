const productQuery = `query MyQuery {
  products {
    color
    deliveryRange
    deliveryTime
    id
    listColor {
      ...RichTextFragment
      html
      markdown
      raw
      text
    }
    petFriendly
    plantSize
    price
    productInfo
    qty
    size
    slug
    sun
    tags
    thumbnail {
      fileName
      id
      url
    }
    title
    water
  }
}

fragment RichTextFragment on RichText {
  html
  markdown
  raw
  text
}`

export { productQuery };