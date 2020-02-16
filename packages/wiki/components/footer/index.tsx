import React from 'react'
import './index.less'

interface FooterProps {
  lang: Lang
  name?: string
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const { lang, name } = props
  const host = `https://${lang}.wikipedia.org`
  const url = name ? `${host}/wiki/${name}` : host
  return (
    <footer>
      Powered by <a href={url}>Wikipedia</a>
    </footer>
  )
}

export default Footer
