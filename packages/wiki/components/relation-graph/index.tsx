import React, { useState, useEffect } from 'react'
import { useWindowInnerSize } from '../../hooks'
import './index.less'
// import { isMobile } from 'is-mobile'
import ReactRelationGraph, { Relation } from 'react-relation-graph'
import { useRouter } from 'next/router'

const NODE_SIZE_FACTOR = 22000

interface RelationCanvasProps {
  relations: WikiRelation[]
  id: string
}

const RelationGraph: React.FC<RelationCanvasProps> = (props: RelationCanvasProps) => {
  const { relations, id } = props
  const windowSize = useWindowInnerSize()
  const widthMargin = 16
  const [data, setData] = useState<Relation[]>([])
  const router = useRouter()

  const handleClick = async (relation: Relation) => {
    await router.push({
      pathname: `/wikis/${relation.name}`
    })
  }

  // 如果是移动设备，则不存在resize的情况，锁定一次即可
  useEffect(() => {
    const subRelations: Relation[] = []
    const newData: Relation[] = [{
      name: id,
      value: 0,
      bgColor: 'lightblue',
      relations: subRelations
    }]

    const maxSize = (windowSize.width || 0) * (windowSize.height || 0) / NODE_SIZE_FACTOR
    const size = Math.min(relations.length, maxSize)
    for (let i = 0; i < size; i++) {
      subRelations.push({
        name: relations[i][0],
        value: relations[i][1]
      })
    }
    relations.map(item => ({
      name: item[0],
      value: item[1]
    }))
    setData(newData)
  }, [relations, id]) // 当outerSize变化时才重新渲染，但是渲染的时候会使用innerSize。主要是为了处理移动端url bar隐藏时的 window resize

  if (!windowSize.width || !windowSize.height) {
    return <></>
  }

  return (
    <ReactRelationGraph
      width={windowSize.width - widthMargin}
      height={windowSize.height}
      relations={data}
      onClick={handleClick}
    />
  )
}

export default RelationGraph
