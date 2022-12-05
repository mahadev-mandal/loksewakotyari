import React from 'react'
import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

function ReadTextQuill({ value }) {
  return (
    <ReactQuill
      value={value}
      readOnly={true}
      theme={"bubble"}
    />
  )
}

ReadTextQuill.propTypes = {
  value: PropTypes.string,
}
export default ReadTextQuill