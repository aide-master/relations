import React, { useState, useEffect, useRef } from 'react'
import './index.less'
import ReactRelationGraph, { Relation } from 'react-relation-graph'
import { useRouter } from 'next/router'

const NODE_SIZE_FACTOR = 20000

interface RelationCanvasProps {
  relations: WikiRelation[]
  id: string
  lang: Lang
}

const colors = ['#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9', '#C5CAE9', '#BBDEFB', '#B3E5FC', '#B2EBF2', '#B2DFDB',
  '#C8E6C9', '#DCEDC8', '#F0F4C3', '#FFF9C4', '#FFECB3', '#FFE0B2', '#FFCCBC', '#D7CCC8', '#CFD8DC']

const RelationGraph: React.FC<RelationCanvasProps> = (props: RelationCanvasProps) => {
  const { relations, id, lang } = props
  const widthMargin = 16
  const [data, setData] = useState<Relation[]>([])
  const router = useRouter()
  const selfRef = useRef<HTMLDivElement>(null)
  const [svgSize, setSvgSize] = useState<{ width: number, height: number }>({ width: 100, height: 100 })

  const handleClick = async (relation: Relation) => {
    const key = (relation.name || '').replace(' ', '_')
    await router.push({
      pathname: `/wikis/${key}`,
      query: { lang }
    })
  }

  useEffect(() => {
    const current = selfRef.current
    if (current) {
      let width = current.offsetWidth
      let height = (width / window.innerWidth) * window.innerHeight
      const maxNodeCount = (width || 0) * (height || 0) / NODE_SIZE_FACTOR
      const realNodeCount = relations.length
      if (maxNodeCount > realNodeCount) {
        const factor = Math.sqrt(maxNodeCount / (realNodeCount + 1))
        width /= factor
        height /= factor
      }
      setSvgSize({ width, height })
    }
  }, [selfRef])

  useEffect(() => {
    const subRelations: Relation[] = []
    const newData: Relation[] = [{
      name: id,
      value: 0,
      bgColor: '#29B6F6',
      relations: subRelations
    }]

    const maxSize = (svgSize.height || 0) * (svgSize.width || 0) / NODE_SIZE_FACTOR
    const size = Math.min(relations.length, maxSize)
    for (let i = 0; i < size; i++) {
      subRelations.push({
        name: relations[i].name,
        value: relations[i].value,
        bgColor: colors[relations[i].value % colors.length]
      })
    }
    setData(newData)
  }, [relations, id, svgSize])

  return (
    <div ref={selfRef}>
      <ReactRelationGraph
        width={svgSize.width - widthMargin}
        height={svgSize.height}
        relations={data}
        onClick={handleClick}
      />
    </div>
  )
}

export default RelationGraph
