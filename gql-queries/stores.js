const storeQuery = `query StoresQuery {
  stores {
    addAnnouncement
    addDirections
    address
    directions {
      latitude
      longitude
    }
    email
    id
    phone
    slug
    specialAnnouncement {
      html
      markdown
      raw
      text
    }
    storeImage {
      fileName
      id
      url
    }
    storeName
    storeOperations {
      closingTime
      id
      openingTime
      storeDay
    }
    newTab
  }
}`

export {storeQuery}