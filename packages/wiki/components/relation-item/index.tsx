import React from 'react'
// import router from 'next/router'
import * as utils from '../../utils'
import './index.less'
import Link from 'next/link'

interface RelationItemProps {
  name: string
  factor: number
  max: number
}

const RelationItem: React.FC<RelationItemProps> = (props: RelationItemProps) => {
  const { max = 1, factor, name } = props
  const maxWidthPercent = 65
  let widthPercent = max ? maxWidthPercent * factor / max : 1
  widthPercent = Math.max(1, Math.min(widthPercent, maxWidthPercent))
  const bgColor = utils.getColorByPercent(factor / max)
  return (
    <Link href={`/wikis/${name}`} prefetch={false}>
      <div className='relation-item'>
        <span className='name' title={name}>{name}</span>
        <div
          className='bar' style={{
            width: `${widthPercent}%`,
            background: `linear-gradient(to right, #1890ff, ${bgColor})`
          }}
        />
        <div className='value'>{factor}</div>
      </div>
    </Link>
  )
}

export default RelationItem
