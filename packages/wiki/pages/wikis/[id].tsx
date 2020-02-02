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

// const { TabPane } = Tabs

interface WikiProps {
  relations: WikiRelation[]
  extract: string
  lang: Lang
}

const Wiki: React.FC<WikiProps> = (props) => {
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
                key={relation[0]}
                name={relation[0]}
                factor={relation[1]}
                max={relations ? relations[0][1] : 0}
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

(Wiki as any).getInitialProps = async function (ctx) {
  const { id } = ctx.query
  const lang = getValidLang(ctx.query.lang, containsChinese(id) ? 'zh' : 'en')
  const url = `https://api.aidemaster.com/relations/search?word=${encodeURIComponent(id)}&lang=${lang}`
  const res = await axios.get(url)
  const { relations = [], extract = '' } = res.data.data || { }
  return {
    relations,
    lang,
    extract
  }
}

export default Wiki
