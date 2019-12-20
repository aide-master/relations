import React from 'react'
// import router from 'next/router'
import './index.less'

interface RelationItemProps {
  name: string
  factor: number
  max: number
}

const RelationItem: React.FC<RelationItemProps> = (props: RelationItemProps) => {
  const maxWidthPercent = 75
  let widthPercent = props.max ? maxWidthPercent * props.factor / props.max : 1
  widthPercent = Math.max(1, Math.min(widthPercent, maxWidthPercent))
  return (
    <div className='relation-item'>
      <span className='name'>{props.name}</span>
      <div className='value' style={{ width: `${widthPercent}%`, display: 'inline-block' }} />
      {props.factor}
    </div>
  )
}

export default RelationItem
