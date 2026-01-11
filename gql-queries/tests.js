const testProductsQuery = `query {
  testProducts {
    description
    id
    slug
    thumbnail {
      url
    }
    title
  }
}`;

export { testProductsQuery };