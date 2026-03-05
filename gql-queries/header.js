const header = `query HeaderQuery {
  headers {
    desktop {
      fileName
      id
      url(transformation: {image: {quality: {value: 100}}})
    }
    mobile {
      fileName
      id
      url(transformation: {image: {quality: {value: 100}}})
    }
  }
}`

export { header };