import React, { useState, useEffect, useRef } from 'react'
import './index.less'
import ReactRelationGraph, { Relation } from 'react-relation-graph'
import { useRouter } from 'next/router'

const NODE_SIZE_FACTOR = 22000

interface RelationCanvasProps {
  relations: WikiRelation[]
  id: string
}

const colors = ['#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9', '#C5CAE9', '#BBDEFB', '#B3E5FC', '#B2EBF2', '#B2DFDB',
  '#C8E6C9', '#DCEDC8', '#F0F4C3', '#FFF9C4', '#FFECB3', '#FFE0B2', '#FFCCBC', '#D7CCC8', '#CFD8DC']

const RelationGraph: React.FC<RelationCanvasProps> = (props: RelationCanvasProps) => {
  const { relations, id } = props
  const widthMargin = 16
  const [data, setData] = useState<Relation[]>([])
  const router = useRouter()
  const selfRef = useRef<HTMLDivElement>(null)
  const [svgSize, setSvgSize] = useState<number>(0)

  const handleClick = async (relation: Relation) => {
    await router.push({
      pathname: `/wikis/${relation.name}`
    })
  }

  useEffect(() => {
    const current = selfRef.current
    if (current) {
      setSvgSize(current.offsetWidth)
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

    const maxSize = (svgSize || 0) * (svgSize || 0) / NODE_SIZE_FACTOR
    console.log('svgSize is: ', svgSize)
    console.log('maxSize is: ', maxSize)
    const size = Math.min(relations.length, maxSize)
    for (let i = 0; i < size; i++) {
      subRelations.push({
        name: relations[i][0],
        value: relations[i][1],
        bgColor: colors[relations[i][1] % colors.length]
      })
    }
    relations.map(item => ({
      name: item[0],
      value: item[1]
    }))
    setData(newData)
  }, [relations, id, svgSize])

  return (
    <div ref={selfRef}>
      <ReactRelationGraph
        width={svgSize - widthMargin}
        height={svgSize}
        relations={data}
        onClick={handleClick}
      />
    </div>
  )
}

export default RelationGraph
