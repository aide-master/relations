import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Breadcrumb, BackTop, Button } from 'antd'
import SearchBar from '../../components/search-bar'
import RelationItem from '../../components/relation-item'
import RelationGraph from '../../components/relation-graph'
import axios from 'axios'
import './index.less'
import Link from 'next/link'
import { getValidLang } from '../../utils'
import containsChinese from 'contains-chinese'
import { NextPage } from 'next'

// const { TabPane } = Tabs

interface WikiProps {
  relations: WikiRelation[]
  extract: string
  lang: Lang
}

const Wiki: NextPage<WikiProps> = (props) => {
  const router = useRouter()
  const [showSize, setShowSize] = useState<number>(50)
  const { relations, extract, lang } = props
  const name = router.query.id
  let title = `Relations of ${name}`
  let loadMoreBtnText = 'load more'
  if (lang === 'zh') {
    title = `${name}的关系`
    loadMoreBtnText = '加载更多'
  }

  const maxValue = relations.reduce((res, item) => Math.max(res, item.value), 1)
  const loadMore = () => setShowSize(showSize * 2)

  return (
    <div className='wiki'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={title} />
        <meta name='keywords' content={[name, '关系', 'relations'].join(' ')} />
        <meta name='robots' content='index,follow' />
        <meta name='google' content='index,follow' />
        <meta name='googlebot' content='index,follow' />
      </Head>
      <BackTop />
      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item> <Link href={{ pathname: '/', query: { lang } }}><a>Home</a></Link> </Breadcrumb.Item>
        <Breadcrumb.Item> <Link href={{ pathname: '/wikis/[id]', query: { lang } }} as={`/wikis/${name}`} prefetch={false}><a>{name}</a></Link> </Breadcrumb.Item>
      </Breadcrumb>
      <div className='headerbar'>
        <h2 title={name as string}>{name}</h2>
        <SearchBar
          defaultValue={name as string}
          lang={lang}
        />
      </div>
      <span className='extract'>{extract}</span>
      <hr />
      <div className='relations'>
        <div className='relations-list'>
          {
            (relations || []).map((relation, index) => index >= showSize ? ''
              : <RelationItem
                id={relation.id}
                name={relation.name}
                value={relation.value}
                max={maxValue}
                lang={lang}
              />)
          }
          {
            relations.length > showSize &&
              <div className='load-more'>
                <Button onClick={loadMore}>{loadMoreBtnText}</Button>
              </div>
          }
        </div>
        <hr />
        <div className='relations-graph'>
          <RelationGraph
            relations={relations || []}
            id={name as string}
            lang={lang}
          />
        </div>
        {(!relations || !relations.length) && 'Not Found'}
      </div>
    </div>
  )
}

Wiki.getInitialProps = async function (ctx): Promise<WikiProps> {
  const { id } = ctx.query
  const lang = getValidLang(ctx.query.lang as string, containsChinese(id) ? 'zh' : 'en')
  const url = `https://api.aidemaster.com/relations/search?word=${encodeURIComponent(id as string)}&lang=${lang}`
  const res = await axios.get(url)
  const { relations = [], extract = '' } = res.data.data || { }

  // set cachec-control
  if (ctx.res) {
    ctx.res.setHeader('Cache-Control', 'max-age=86400, public')
  }

  return {
    relations: relations.map(item => ({ name: (item[0] || '').replace(/_/g, ' '), value: item[1], id: item[0] })),
    lang,
    extract
  }
}

export default Wiki
