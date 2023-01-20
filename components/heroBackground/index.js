import React from 'react'
import PropTypes from 'prop-types'

function HeroBackground({ image, imageSrc, video, videoSrc }) {
  console.log(image,imageSrc,video,videoSrc)
  return (
    <div>HeroBackground</div>
  )
}

HeroBackground.propTypes = {
  image: PropTypes.string,
  imageSrc:PropTypes.string,
  video: PropTypes.string,
  videoSrc:PropTypes.string,
}
export default HeroBackground