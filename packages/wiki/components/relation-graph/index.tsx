import React, { useState, useEffect, ReactNode } from 'react'
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
  color: string
  bgColor: string
  name: string
}

const getNodesByRelations = (fullRelations: Relation[], width: number, height: number, id: string): Node[] => {
  // 首先插入根节点
  const rootNodeRadius = 50
  const bgColor = utils.getColorByPercent(0)
  const rootNode: Node = { x: width / 2, y: height / 2, r: rootNodeRadius, bgColor, name: id, color: utils.getReverseColor(bgColor, true) }
  const result: Node[] = []
  result.push(rootNode)

  const relations = fullRelations.slice(0, 19) // 只取20个元素，太多了显示不过来

  // 再计算关系节点
  if (relations.length) {
    const max = relations[0][1]
    const factor = (rootNodeRadius - 10) / max
    for (const relation of relations) {
      const radius = relation[1] * factor
      const diameter = 2 * radius
      const bgColor = utils.getColorByPercent((max - relation[1]) / max)
      result.push({
        x: Math.random() * (width - diameter) + radius,
        y: Math.random() * (height - diameter) + radius,
        r: radius,
        name: relation[0],
        bgColor,
        color: utils.getReverseColor(bgColor, true)
      })
    }
  }
  console.log('result is: ', result)
  return result
}

const renderLine = (begin: Node, end: Node, color: string): ReactNode => {
  const xDiff = begin.x - end.x
  const yDiff = begin.y - end.y
  const len = Math.sqrt(xDiff * xDiff + yDiff * yDiff)
  const x1 = begin.x - (begin.r / len) * xDiff
  const x2 = end.x + (end.r / len) * xDiff
  const y1 = begin.y - (begin.r / len) * yDiff
  const y2 = end.y + (end.r / len) * yDiff
  return <line {...{ x1, x2, y1, y2 }} stroke='black' />
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
            fill={node.bgColor}
          >
            <title>{node.name}</title>
          </circle>
          <text
            x={node.x}
            y={node.y}
            dominantBaseline='middle'
            textAnchor='middle'
            fill={node.color}
          >
            {node.name}
          </text>
          {renderLine(nodes[0], node, 'black')}
        </g>
      ))}
    </svg>
  )
}

export default RelationGraph
