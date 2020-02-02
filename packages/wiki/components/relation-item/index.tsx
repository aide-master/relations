import React from 'react'
// import router from 'next/router'
import * as utils from '../../utils'
import './index.less'
import Link from 'next/link'

interface RelationItemProps {
  name: string
  value: number
  max: number
  lang: Lang
  id: string
}

const RelationItem: React.FC<RelationItemProps> = (props: RelationItemProps) => {
  const { max = 1, value, name, lang, id } = props
  const maxWidthPercent = 65
  let widthPercent = max ? maxWidthPercent * value / max : 1
  widthPercent = Math.max(1, Math.min(widthPercent, maxWidthPercent))
  const bgColor = utils.getColorByPercent(value / max)
  return (
    <Link href={{ pathname: `/wikis/${id}`, query: { lang } }} prefetch={false} key={id}>
      <div className='relation-item'>
        <span className='name' title={name}>{name}</span>
        <div
          className='bar' style={{
            width: `${widthPercent}%`,
            background: `linear-gradient(to right, #1890ff, ${bgColor})`
          }}
        />
        <div className='value'>{value}</div>
      </div>
    </Link>
  )
}

export default RelationItem
