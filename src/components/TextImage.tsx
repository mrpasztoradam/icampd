import React from 'react'
import styled from 'styled-components'

export interface ITextImage {
  children?: React.ReactNode
  className?: string
  isTextOnLeft?: boolean
  imgSrc?: string
  imgPlaceholder?: string
}

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.6fr;
`

const TextImage = ({
  children,
  className,
  isTextOnLeft = true,
  imgSrc = 'https://placehold.co/200',
  imgPlaceholder = 'Default placeholder for image',
}: ITextImage) => {
  return isTextOnLeft ? (
    <StyledDiv>
      <div>Some text value</div>
      <img
        src={imgSrc}
        alt="placeholder"
      />
    </StyledDiv>
  ) : (
    <StyledDiv>
      <img
        src="https://placehold.co/200"
        alt="placeholder"
      />
      <div>Some text value</div>
    </StyledDiv>
  )
}

export default TextImage
