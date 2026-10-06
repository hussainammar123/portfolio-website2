import { useEffect, useRef, useState, type FormEvent } from 'react'
import { getAnswer, type ChatMessage } from '../data/portfolio'
import ArrowIcon from './ArrowIcon'

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 0,
      from: 'assistant',
      text: 'Hi! I’m Hussain’s portfolio guide. Ask me about his work, skills, or background.',
    },
  ])
  const sequence = useRef(0)
  const responseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(
    () => () => {
      if (responseTimer.current) clearTimeout(responseTimer.current)
    },
    [],
  )

  function sendMessage(text: string) {
    const cleanText = text.trim()
    if (!cleanText || isTyping) return

    const visitorId = ++sequence.current
    setMessages((current) => [
      ...current,
      { id: visitorId, from: 'visitor', text: cleanText },
    ])
    setQuestion('')
    setIsTyping(true)
    responseTimer.current = setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: ++sequence.current,
          from: 'assistant',
          text: getAnswer(cleanText),
        },
      ])
      setIsTyping(false)
      responseTimer.current = null
    }, 550)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    sendMessage(question)
  }

  return (
    <aside className="chat-widget" aria-label="Portfolio chat assistant">
      {isOpen && (
        <section className="chat-panel" aria-label="Chat with the portfolio guide">
          <div className="chat-header">
            <span className="chat-avatar" aria-hidden="true">H</span>
            <div>
              <strong>Meet Hussain</strong>
              <span><i /> Here to answer your questions</span>
            </div>
            <button
              className="chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              type="button"
            >
              ×
            </button>
          </div>

          <div className="chat-messages" aria-live="polite">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-message chat-message--${message.from}`}
              >
                {message.text}
              </div>
            ))}
            {isTyping && (
              <div className="chat-message chat-message--assistant typing-indicator" aria-label="Preparing a reply">
                <i /><i /><i />
              </div>
            )}
          </div>

          {messages.length === 1 && (
            <div className="chat-suggestions">
              <button type="button" onClick={() => sendMessage('Tell me about your projects')}>Projects</button>
              <button type="button" onClick={() => sendMessage('What are your technical skills?')}>Tech stack</button>
              <button type="button" onClick={() => sendMessage('How can I contact you?')}>Get in touch</button>
            </div>
          )}

          <form className="chat-input-row" onSubmit={handleSubmit}>
            <label className="visually-hidden" htmlFor="chat-question">Ask a question</label>
            <input
              id="chat-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask me anything..."
              autoComplete="off"
              disabled={isTyping}
            />
            <button type="submit" aria-label="Send message" disabled={!question.trim() || isTyping}>
              <ArrowIcon />
            </button>
          </form>
          <p className="chat-disclaimer">A little portfolio guide · Replies come from this page</p>
        </section>
      )}

      <button
        className={`chat-launcher${isOpen ? ' chat-launcher--open' : ''}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close portfolio chat' : 'Chat with Hussain’s portfolio guide'}
        type="button"
      >
        {isOpen ? (
          <span className="launcher-x" aria-hidden="true">×</span>
        ) : (
          <>
            <span className="launcher-spark" aria-hidden="true">✳</span>
            <span>Ask about my work</span>
            <ArrowIcon />
          </>
        )}
      </button>
    </aside>
  )
}

export default ChatWidget
