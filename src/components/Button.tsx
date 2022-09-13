import React from 'react'
import styled from 'styled-components'

interface IButton {
  onClick?: () => void
  children?: React.ReactNode
  icon?: string
}
const ButtonDiv = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: auto auto;
  background: #ffd124;
  border: none;
  box-shadow: 1px 1px 10px rgba(255, 209, 36, 0.1);
  height: 32px;
  width: 80px;
  border-radius: 8px;
  font-size: 22px;
  :hover {
    background: #ffb900;
  }
  :active {
    background: #ffe482;
  }
`
const Icon = styled.div``

const StyledButton = styled.button`
  text-align: center;
  border: none;
  background: none;
`

const Button = ({ children, icon, onClick }: IButton) => {
  return (
    <ButtonDiv>
      {icon && <Icon>{icon}</Icon>}
      {children && <StyledButton onClick={onClick}>{children}</StyledButton>}
    </ButtonDiv>
  )
}

export default Button
