const teaserQuery = `query TeaserQuery {
  teasers {
    id
    link
    preText
    title
    teaserImage {
      fileName
      id
      url
    }
    teaserBackground {
      fileName
      id
      url
    }
    teaserDecoration {
      fileName
      id
      url
    }
    buttonText
    newTab
  }
}`

export { teaserQuery };