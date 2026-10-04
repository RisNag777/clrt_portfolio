import type { ReactNode } from 'react'

/** Renders trusted text with optional <em>…</em> italics. */
export function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = []
  const pattern = /<em>(.*?)<\/em>/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    parts.push(<em key={key++}>{match[1]}</em>)
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return <>{parts}</>
}
