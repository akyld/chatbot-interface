import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

const MessageBubble = ({ message }) => {
  return (
    <div
      className={`flex ${
        message.sender === 'user' ? 'justify-end' : 'justify-start'
      }`}
    >
      <Card
        className={`message-bubble ${
          message.sender === 'user' ? 'user' : 'bot'
        } mb-2 max-w-xs p-2`}
      >
        <CardContent>
          <p>{message.text}</p>
          <span
            className={`timestamp block text-xs mt-1 ${
              message.sender === 'user' ? 'text-white' : 'text-gray-500'
            }`}
          >
            {message.timestamp}
          </span>
        </CardContent>
      </Card>
    </div>
  )
}

export default MessageBubble
