import React from 'react'
// import router from 'next/router'
import { Tooltip } from 'antd'
import './index.less'

interface RelationItemProps {
  name: string
  factor: number
  max: number
}

const RelationItem: React.FC<RelationItemProps> = (props: RelationItemProps) => {
  const maxWidthPercent = 80
  let widthPercent = props.max ? maxWidthPercent * props.factor / props.max : 1
  widthPercent = Math.max(1, Math.min(widthPercent, maxWidthPercent))
  return (
    <div className='relation-item'>
      <Tooltip title={`${props.name}: ${props.factor}`}>
        <div className='row'>
          <span className='name'>{props.name}</span>
          <span className='value' style={{ width: `${widthPercent}%`, display: 'inline-block' }} />
          {props.factor}
        </div>
      </Tooltip>
    </div>
  )
}

export default RelationItem
