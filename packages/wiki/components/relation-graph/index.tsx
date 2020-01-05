import React, { useState, useEffect } from 'react'
import * as utils from '../../utils'
// import router from 'next/router'
// import Link from 'next/link'
import './index.less'

interface RelationCanvasProps {
  relations: Relation[]
  id: string
}

interface Node {
  x: number
  y: number
  r: number // radius
  color?: string
  name: string
}

const getNodesByRelations = (relations: Relation[], width: number, height: number, id: string): Node[] => {
  // 首先插入根节点
  const rootNodeRadius = 30
  const color = utils.getColorByPercent(1)
  const rootNode: Node = { x: width / 2, y: height / 2, r: rootNodeRadius, color, name: id }
  const result: Node[] = []
  result.push(rootNode)

  // 再计算关系节点
  // const totalRelationValue = relations.reduce((res, item) => res + item[1], 0)
  // const factor = totalRelationValue / rootNodeRadius
  console.log('result is: ', result)
  return result
}

const RelationGraph: React.FC<RelationCanvasProps> = (props: RelationCanvasProps) => {
  const svgRef = React.useRef(null)
  const [nodes, setNodes] = useState<Node[]>([])
  const { relations, id } = props
  const width = 750
  const height = 750
  useEffect(() => {
    const newNodes = getNodesByRelations(relations, width, height, id)
    setNodes(newNodes)
  }, [relations])
  return (
    <svg
      ref={svgRef}
      width={`${width}px`}
      height={`${height}px`}
    >
      {nodes.map(node => (
        <g key={node.name}>
          <circle
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={node.color}
          >
            <title>{node.name}</title>
          </circle>
          <text
            x={node.x}
            y={node.y}
            dominantBaseline='middle'
            textAnchor='middle'
          >
            {node.name}
          </text>
        </g>
      ))}
    </svg>
  )
}

export default RelationGraph
