import React from 'react'
import styled, { css } from 'styled-components'

import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'

const MyFooter = styled.footer`
  min-height: 30px;
  background: #31965F;
  grid-area: footer;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px 15px;

  @media (max-width: 800px) {
    flex-direction: column;
     > *:first-child {
      margin-bottom: 20px;
    }
  }
`

const ContactArea = styled.div`
  display: flex;
  flex-direction: row;
`

const ContactList = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 20px;
`

const MyText = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
  color: #F2F5F8;

  ${props => props.mg && css`margin-top: ${props.mg};`}
`

const ItemLabel = styled(MyText)`
  margin-left: 15px;
`

const Centered = styled.div`
  display: flex;
  align-items: center;
`
const ContactItem = ({ icon, children }) => (
  <Centered>
    {/* <span>|</span> */}
    { icon }
    <ItemLabel>{children}</ItemLabel>
  </Centered>
)

export const Footer = ({
  ...props
}) => {
  return (
    <MyFooter {...props}>
      <ContactArea>
        <MyText mg="5px">Managing Editor: John Doe</MyText>
        <ContactList>
          <ContactItem icon={<EmailIcon />}>1</ContactItem>
          <ContactItem icon={<PhoneIcon />}>2</ContactItem>
        </ContactList>
      </ContactArea>
      <MyText>Developed by rafael.g.depaulo@gmail.com &amp; designed by nayararossisilva@gmail.com</MyText>
    </MyFooter>
  )
}

export default Footer
