import React from 'react'
import { useRouter } from 'next/router'
import { Breadcrumb } from 'antd'
import Link from 'next/link'
import SearchBar from '../../components/search-bar'
import RelationItem from '../../components/relation-item'
import axios from 'axios'
import './index.less'

interface WikiProps {
  relations: any[]
}

const Wiki: React.FC<WikiProps> = (props) => {
  const router = useRouter()
  const { relations } = props
  return (
    <div className='wiki'>
      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item> <Link href='/'><a>Home</a></Link> </Breadcrumb.Item>
        <Breadcrumb.Item> <Link href='/wikis/[id]' as={`/wikis/${router.query.id}`}><a>{router.query.id}</a></Link> </Breadcrumb.Item>
      </Breadcrumb>
      <div> <h2>{router.query.id}</h2> <SearchBar /> </div>
      <div className='relations'>
        {
          (relations || []).map(relation =>
            <RelationItem
              key={relation[0]}
              name={relation[0]}
              factor={relation[1]}
              max={relations ? relations[0][1] : 0}
            />)
        }
        {(!relations || !relations.length) && '没有结果'}
      </div>
    </div>
  )
}

(Wiki as any).getInitialProps = async function (context: any) {
  const { id } = context.query
  const url = `https://api.aidemaster.com/relations/search?word=${encodeURIComponent(id)}&sort=true&lang=zh`
  const res = await axios.get(url)
  return { relations: res.data.data }
}

export default Wiki
