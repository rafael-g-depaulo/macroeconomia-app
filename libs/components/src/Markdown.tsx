import React from 'react'
import ReactMarkdown from 'react-markdown'

import Text from '@components/Text'
import Link from '@components/Link'
import Image from '@components/Image'

export const Markdown = ({ source = '', ...props }) => {
  return (
    <ReactMarkdown
      source={source}
      renderers={{
        paragraph: Text,
        link: Link,
        image: Image,
      }}
    />
  )
}

export default Markdown
