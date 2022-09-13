import React from 'react'

interface IHeroImage {
  imgSrc?: string
  imgAlt?: string
  titleText?: string
  subtitleText?: string
}

const HeroImage = ({
  imgSrc = 'https://placehold.co/600x100',
  imgAlt = 'placeholder text',
  titleText = 'Default Title',
  subtitleText = 'Default subtitle',
}: IHeroImage) => {
  return (
    <div style={{ height: '100%' }}>
      <div
        style={{ background: `url(${imgSrc})`, width: '100%', height: '100%' }}
      ></div>
      <div
        style={{
          position: 'relative',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <p>{titleText}</p>
        <p>{subtitleText}</p>
      </div>
    </div>
  )
}

export default HeroImage
