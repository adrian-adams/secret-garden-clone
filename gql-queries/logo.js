const logoQuery = `query LogoQuery {
  brandLogos {
    id
    logo {
      fileName
      id
      url
    }
    title
  }
}`

export { logoQuery };