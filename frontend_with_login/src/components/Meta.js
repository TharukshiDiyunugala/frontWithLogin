import { Helmet } from "react-helmet";
import React from 'react'

const Meta = (props) => {
  return (
    <Helmet>
      <meta charSet="utf-8">
        <title>props.title</title>
      </meta>
    </Helmet>
  )
}

export default Meta