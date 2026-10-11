import type { ReactNode } from 'react'

/** Renders trusted text with optional <em> italics and https <a> links. */
export function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = []
  const pattern = /<em>([\s\S]*?)<\/em>|<a href="(https?:\/\/[^"]+)">([\s\S]*?)<\/a>/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    if (match[1] !== undefined) {
      parts.push(<em key={key++}>{match[1]}</em>)
    } else {
      parts.push(
        <a key={key++} href={match[2]} target="_blank" rel="noreferrer">
          {match[3]}
        </a>,
      )
    }
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return <>{parts}</>
}
