import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Breadcrumb, BackTop } from 'antd'
import SearchBar from '../../components/search-bar'
import RelationItem from '../../components/relation-item'
import RelationGraph from '../../components/relation-graph'
import axios from 'axios'
import './index.less'
import Link from 'next/link'
import cookies from 'next-cookies'

// const { TabPane } = Tabs

interface WikiProps {
  relations: WikiRelation[]
}

const Wiki: React.FC<WikiProps> = (props) => {
  const router = useRouter()
  const { relations } = props

  return (
    <div className='wiki'>
      <Head>
        <title>{`${router.query.id}的关系`}</title>
        <meta name='description' content={`${router.query.id}的关系`} />
        <meta name='keywords' content={[router.query.id, '关系'].join(' ')} />
        <meta name='robots' content='index,follow' /> // 搜索优化，下同
        <meta name='google' content='index,follow' />
        <meta name='googlebot' content='index,follow' />
      </Head>
      <BackTop />
      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item> <Link href='/'><a>Home</a></Link> </Breadcrumb.Item>
        <Breadcrumb.Item> <Link href='/wikis/[id]' as={`/wikis/${router.query.id}`} prefetch={false}><a>{router.query.id}</a></Link> </Breadcrumb.Item>
      </Breadcrumb>
      <div className='headerbar'>
        <h2 title={router.query.id as string}>{router.query.id}</h2>
        <SearchBar
          defaultValue={router.query.id as string}
        />
      </div>
      <div className='relations'>
        <div className='relations-list'>
          {
            (relations || []).map(relation =>
              <RelationItem
                key={relation[0]}
                name={relation[0]}
                factor={relation[1]}
                max={relations ? relations[0][1] : 0}
              />)
          }
        </div>
        <div className='relations-graph'>
          <RelationGraph
            relations={relations || []}
            id={router.query.id as string}
          />
        </div>
        {(!relations || !relations.length) && 'Not Found'}
      </div>
    </div>
  )
}

(Wiki as any).getInitialProps = async function (ctx) {
  const { id } = ctx.query
  const { lang } = cookies(ctx)
  const url = `https://api.aidemaster.com/relations/search?word=${encodeURIComponent(id)}&sort=true&lang=${lang}`
  const res = await axios.get(url)
  return {
    relations: res.data.data
  }
}

export default Wiki
