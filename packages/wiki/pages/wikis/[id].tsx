import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Breadcrumb } from 'antd'
import Link from 'next/link'
import SearchBar from '../../components/search-bar'
import RelationItem from '../../components/relation-item'
import axios from 'axios'
import './index.less'

const Wiki: React.FC = () => {
  const router = useRouter()
  const [relations, setRelations] = useState<Relation[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    (async () => {
      if (!router.query.id) {
        return
      }
      const url = `https://api.aidemaster.com/relations/search?word=${router.query.id}&sort=true&lang=zh`
      setLoading(true)
      const res = await axios.get(url)
      setRelations(res.data.data)
      setLoading(false)
    })().catch(console.error)
  }, [router.query.id])
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
        {((!relations || !relations.length) && !loading) && '没有结果'}
      </div>
    </div>
  )
}

export default Wiki
