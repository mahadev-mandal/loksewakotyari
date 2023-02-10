import { useRouter } from 'next/router'
import React from 'react'

function Syllabus() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>{slug}</div>
  )
}

export default Syllabus