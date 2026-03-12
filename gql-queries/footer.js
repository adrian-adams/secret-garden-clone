const footerDetails = `query Footer {
  footers {
    aboutUs
    aboutUsDesc
    contactUs
    email
    followUs
    footerGallery {
      fileName
      id
      url
    }
    footerPages {
      ... on TextImageGroup {
        id
        link
        title
        text {
          json
        }
      }
    }
    footerServices {
      ... on TextImageGroup {
        id
        link
        title
        beforeImage {
          fileName
          id
          url
        }
        text {
          text
          html
          json
          markdown
          raw
        }
      }
    }
    id
    phoneNumber
    socials {
      ... on TextImageGroup {
        id
        link
        title
        beforeImage {
          fileName
          id
          url
        }
      }
    }
    year
  }
}`

export { footerDetails }