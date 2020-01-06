import React, { useState, useEffect, ReactNode } from 'react'
import * as utils from '../../utils'
import { useWindowSize } from '../../hooks'
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

  const maxShowCount = 25 // 只取部分元素，太多了显示不过来
  const relations = fullRelations.slice(0, maxShowCount - 1)

  // 再计算关系节点
  if (relations.length) {
    const max = relations[0][1]
    const factor = (rootNodeRadius - 15) / max
    for (const relation of relations) {
      const radius = relation[1] * factor + 10
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
  return result
}

const renderLine = (begin: Node, end: Node, color: string): ReactNode => {
  const xDiff = begin.x - end.x
  const yDiff = begin.y - end.y
  const len = Math.sqrt(xDiff * xDiff + yDiff * yDiff)
  if (!len) return ''
  const x1 = begin.x - (begin.r / len) * xDiff
  const x2 = end.x + (end.r / len) * xDiff
  const y1 = begin.y - (begin.r / len) * yDiff
  const y2 = end.y + (end.r / len) * yDiff
  return <line {...{ x1, x2, y1, y2 }} stroke='black' />
}

const maxForce = (force: number): number => Math.max(-1000, Math.min(1000, force))

const arrangeElasticNodes = (nodes: Node[], width: number, height: number, times: number = 1): Node[] => {
  if (times <= 0) {
    return nodes
  }
  /**
   * 根据弹性重新排布节点
   * 每个节点都会受到三种类型的力；
   * 1. 来自连接线的的引力
   * 2. 来自其余节点的斥力
   * 3. 来自边界线的斥力(暂时忽略)
   *
   * 根据这几种力，综合计算出每个节点的受力情况，再做小幅度的运动，然后返回新的坐标值
   */

  // 第一个Node是根结点，和其它节点之间有连接线

  // 力可拆分为x轴和y轴两个维度的力，然后以正负值表示不同的方向

  // 引入质量的概念，等于球的半径（或半径的平方、立方），视效果而定

  // 连接线的引力与重力无关，而来自其余节点和边界线的斥力和质量有关

  if (!nodes || !nodes.length) {
    return nodes
  }

  const force: Array<[number, number]> = nodes.map(_item => [0, 0]) // [number, number] 分别是 x,y 轴的力

  const lineForceFactor = 1

  for (let i = 0; i < nodes.length; i++) {
    const dest = nodes[i]
    // fx, fy代表受力，正负数代表不同的方向。正值代表向上移动，负值代表向下移动
    for (let j = i + 1; j < nodes.length; j++) {
      const src = nodes[j]
      const dx = (dest.x - src.x) // x轴差
      const dy = (dest.y - src.y) // y轴差
      const lenFactor = dx * dx + dy * dy
      const len = Math.sqrt(lenFactor)

      const px = dx / len // x占百分比
      const py = dy / len // y占百分比

      // 斥力
      const rx = src.r * dest.r / len * px // tmp fx
      const ry = src.r * dest.r / len * py // tmp fy

      let gx = 0
      let gy = 0

      // 引力
      if (i === 0) { // 有中心节点，说明有连接线
        gx = lineForceFactor * len * px * 0.02
        gy = lineForceFactor * len * py * 0.02
      }
      const fx = maxForce(rx - gx) || 0
      const fy = maxForce(ry - gy) || 0

      force[i][0] += fx
      force[i][1] += fy
      force[j][0] -= fx
      force[j][1] -= fy
    }
  }

  // 得到受力情况(force之后)，计算其从运动偏移量。d = 1/2 at^2，其中t可认为是常量，所以 1/2 t^2 视为一个常量C，即 d = C * a
  // a = f / m
  const C = 1
  const newNodes = nodes.map((node, index) => {
    const result = { ...node }
    result.x = Math.max(result.r, Math.min(width - result.r, result.x + force[index][0] / result.r * C))
    result.y = Math.max(result.r, Math.min(height - result.r, result.y + force[index][1] / result.r * C))
    return result
  })
  return arrangeElasticNodes(newNodes, width, height, times - 1)
}

const RelationGraph: React.FC<RelationCanvasProps> = (props: RelationCanvasProps) => {
  const svgRef = React.useRef(null)
  const [nodes, setNodes] = useState<Node[]>([])
  // const [delay, setDelay] = useState<number>(10)
  const { relations, id } = props
  const windowSize = useWindowSize()
  useEffect(() => {
    if (windowSize.width && windowSize.height) {
      console.log('width: ', windowSize.width)
      console.log('height: ', windowSize.height)
      let newNodes = getNodesByRelations(relations, windowSize.width, windowSize.height, id)
      newNodes = arrangeElasticNodes(newNodes, windowSize.width, windowSize.height, 100)
      setNodes(newNodes)
    }
  }, [relations, windowSize])

  if (!windowSize.width || !windowSize.height) {
    return <></>
  }

  return (
    <svg
      ref={svgRef}
      width={`${windowSize.width}px`}
      height={`${windowSize.height}px`}
      className='relation-svg'
    >
      {nodes.map(node => (
        <a href={`/wikis/${encodeURIComponent(node.name)}`} key={node.name}>
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
        </a>
      ))}
    </svg>
  )
}

export default RelationGraph
