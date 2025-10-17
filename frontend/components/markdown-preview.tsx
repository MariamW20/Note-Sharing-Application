"use client"

import { useEffect, useState } from "react"

interface MarkdownPreviewProps {
  content: string
}

export function MarkdownPreview({ content }: MarkdownPreviewProps) {
  const [html, setHtml] = useState("")

  useEffect(() => {
    // Simple markdown parser for demo purposes
    // In production, use a library like marked or remark
    const parseMarkdown = (text: string) => {
      const result = text
        // Headers
        .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
        .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mt-8 mb-4">$1</h2>')
        .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
        // Code blocks
        .replace(/```(.*?)```/gs, '<pre class="bg-muted p-4 rounded-lg my-4 overflow-x-auto"><code>$1</code></pre>')
        // Inline code
        .replace(/`(.*?)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm">$1</code>')
        // Links
        .replace(/\[(.*?)\]$$(.*?)$$/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
        // Line breaks
        .replace(/\n/g, "<br />")

      return result
    }

    setHtml(parseMarkdown(content))
  }, [content])

  if (!content.trim()) {
    return (
      <div className="text-muted-foreground text-center py-12">
        Nothing to preview yet. Start writing in the Edit tab.
      </div>
    )
  }

  return <div className="prose prose-sm max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: html }} />
}
