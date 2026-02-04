const header = `query HeaderQuery {
  headers {
    desktop(first: 1) {
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