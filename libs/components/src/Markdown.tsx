import React from 'react'
import ReactMarkdown from 'react-markdown'

import Text from '@components/Text'
import Link from '@components/Link'
import Image from '@components/Image'

// this fixes an issue with ReactMarkdown trying to acess process.cwd.
window.process ??= {} as any
window.process.cwd = () => ''

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
