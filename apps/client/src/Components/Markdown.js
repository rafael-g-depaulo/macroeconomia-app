import React from 'react'
import ReactMarkdown from 'react-markdown'

import Text from 'Components/Text'
import Link from 'Components/Link'
import Image from './Image'

export const Markdown = ({
  source = "",
  ...props
}) => {
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
