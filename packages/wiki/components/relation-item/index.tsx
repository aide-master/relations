import React from 'react'
// import router from 'next/router'
import Link from 'next/link'
import './index.less'

interface RelationItemProps {
  name: string
  factor: number
  max: number
}

const RelationItem: React.FC<RelationItemProps> = (props: RelationItemProps) => {
  const maxWidthPercent = 65
  let widthPercent = props.max ? maxWidthPercent * props.factor / props.max : 1
  widthPercent = Math.max(1, Math.min(widthPercent, maxWidthPercent))
  return (
    <Link href={`/wikis/${props.name}`}>
      <div className='relation-item'>
        <span className='name' title={props.name}>{props.name}</span>
        <div className='bar' style={{ width: `${widthPercent}%`, display: 'inline-block' }} />
        <div className='value'>{props.factor}</div>
      </div>
    </Link>
  )
}

export default RelationItem
