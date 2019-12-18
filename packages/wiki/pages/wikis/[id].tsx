import React from 'react'
import { useRouter } from 'next/router'
import { Breadcrumb } from 'antd'
import Link from 'next/link'

const Wiki: React.FC = () => {
  const router = useRouter()
  return (
    <div className='wiki'>
      <Breadcrumb>
        <Breadcrumb.Item> <Link href='/'><a>Home</a></Link> </Breadcrumb.Item>
        <Breadcrumb.Item> <Link href='/wikis/[id]' as={`/wikis/${router.query.id}`}><a>{router.query.id}</a></Link> </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default Wiki
