const queryBGImages = `query bgImageQuery {
  backgroundImages {
    bg {
      image {
        id
        url
      }
      title
    }
  }
}`

export { queryBGImages }