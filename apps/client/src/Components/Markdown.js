import React from 'react'
import ReactMarkdown from 'react-markdown'

import Text from 'Components/Text'
import Link from 'Components/Link'

export const Markdown = ({
  source = "",
  ...props
}) => {
  return (
    <ReactMarkdown
      source={source}
      renderers={{
        paragraph: Text,
        link: Link
      }}
    />
  )
}

export default Markdown
