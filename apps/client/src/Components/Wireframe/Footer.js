import React from 'react'
import styled from 'styled-components'

import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'

const MyFooter = styled.footer`
  min-height: 30px;
  background: #31965F;
  grid-area: "footer";

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px 15px;
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

const ItemLabel = styled.span`
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
        <span>Managing Editor: John Doe</span>
        <ContactList>
          <ContactItem icon={<EmailIcon />}>1</ContactItem>
          <ContactItem icon={<PhoneIcon />}>2</ContactItem>
        </ContactList>
      </ContactArea>
      <span>Developed by rafael.g.depaulo@gmail.com & designed by nayararossisilva@gmail.com</span>
    </MyFooter>
  )
}

export default Footer
