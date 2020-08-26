import React from 'react'
import styled, { css } from 'styled-components'

import { useManagingEditor } from 'Api/managingEditor'
import { footerGreen } from 'Themes/default'

import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'

import SocialMedia from './SocialMedia'

const MyFooter = styled.footer`
  min-height: 30px;
  background: ${footerGreen};
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
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`

const ContactList = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 10px;

  > * + * {
    margin-left: 20px;
  }
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

const DevRights = styled.span`
  font-size: 10px;
  color: #F2F5F8;
`

export const Footer = ({
  ...props
}) => {
  const { data } = useManagingEditor()
  return (
    <MyFooter {...props}>
      <ContactArea>
        <MyText mg="5px">Managing Editor: { data?.name ?? "admin" }</MyText>
        <ContactList>
          <ContactItem icon={<EmailIcon />}>{ data?.email ?? "email@gmail.com" }</ContactItem>
          <ContactItem icon={<PhoneIcon />}>{ data?.phone ?? "(XX) XXXXX-XXXX" }</ContactItem>
        </ContactList>
      </ContactArea>
      <DevRights>Developed by rafael.g.depaulo@gmail.com &amp; designed by nayararossisilva@gmail.com</DevRights>
      <SocialMedia />
    </MyFooter>
  )
}

export default Footer
