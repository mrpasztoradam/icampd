import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
//import Button from './Button'
import OldButton from './old/OldButton'

const StyledImg = styled.img`
  width: 100%;
  border-radius: 5px 5px 0 0;
`

const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto auto auto auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  justify-items: center;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

const Title = styled.div`
  font-size: 24px;
  padding: 10px;
`
const Subtitle = styled.div`
  font-size: 16px;
  padding: 0px 10px;
`
const TextContent = styled.div`
  font-size: 14px;
  padding: 10px;
`
const ActionDiv = styled.div`
  padding: 10px;
  width: 94%;
`
const ExpandDiv = styled.div`
  padding: 10px;
`

const Hr = styled.hr`
  border: 0;
  border-top: 1px solid #aaa;
`

interface ICard {
  children?: React.ReactNode
  height?: string
  width?: string
  imgSrc?: string
  imgAlt?: string
  title?: string
  subtitle?: string
  textContent?: string
  hasAction?: boolean
  expandable?: boolean
  open?: boolean
}

const Card = ({
  children,
  height = '100%',
  width = '100%',
  imgSrc = '',
  imgAlt = '',
  title = '',
  subtitle = '',
  textContent = '',
  hasAction = false,
  expandable = false,
  open = false,
}: ICard) => {
  const [isOpen, setIsOpen] = useState(open)

  const handleOpen = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <StyledDiv style={{ height: height, width: width }}>
      {imgSrc && (
        <StyledImg
          src={imgSrc}
          alt={imgAlt}
        />
      )}
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {expandable && (
        <ExpandDiv>
          <OldButton
            shape="circle"
            onClick={handleOpen}
          >
            {isOpen ? '\uff0d' : '\uff0b'}
          </OldButton>
        </ExpandDiv>
      )}
      {isOpen && (
        <div>
          <Hr />
          <TextContent>{textContent}</TextContent>
        </div>
      )}
      {hasAction && (
        <ActionDiv>
          <Hr />
          <Button icon={'\uff20'}>Button</Button>
          <Button icon={'\uff20'}></Button>
        </ActionDiv>
      )}
    </StyledDiv>
  )
}

export default Card
