import React from 'react'
import styled from 'styled-components'

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

const ContactItem = ({ icon, children }) => (<span>{children}</span>)

export const Footer = ({
  ...props
}) => {
  return (
    <MyFooter {...props}>
      <ContactArea>
        <span>Managing Editor: John Doe</span>
        <ContactList>
          <ContactItem>1</ContactItem>
          <ContactItem>2</ContactItem>
        </ContactList>
      </ContactArea>
      <span>Developed by Rafael G de Paulo and designed by Nayara Silva</span>
    </MyFooter>
  )
}

export default Footer
