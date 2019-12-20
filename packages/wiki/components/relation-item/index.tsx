import React from 'react'
// import router from 'next/router'
import Link from 'next/link'
import './index.less'

interface RelationItemProps {
  name: string
  factor: number
  max: number
}

const startRGB = [0x18, 0x90, 0xff]
const endRGB = [0xff, 0x00, 0x00]

const RelationItem: React.FC<RelationItemProps> = (props: RelationItemProps) => {
  const { max = 1, factor, name } = props
  const maxWidthPercent = 65
  let widthPercent = max ? maxWidthPercent * factor / max : 1
  widthPercent = Math.max(1, Math.min(widthPercent, maxWidthPercent))
  const newEndRGB = endRGB.map((end, index) => Math.floor(end + (startRGB[index] - end) * (max - factor) / max))
  const bgColor = '#' + newEndRGB.map(v => Number(v).toString(16).padStart(2, '0')).join('')
  return (
    <Link href={`/wikis/${name}`}>
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
