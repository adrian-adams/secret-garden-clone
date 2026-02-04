const carouselQuery = `query CarouselQuery {
  carousels {
    id
    carousel {
      ... on Slider {
        id
        slider {
          fileName
          height
          id
          size
          url(transformation: {image: {quality: {value: 100}}})
          width
        }
      }
    }
  }
}`

export { carouselQuery };