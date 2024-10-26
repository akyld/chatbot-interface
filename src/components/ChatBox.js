import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import MessageBubble from './MessageBubble'

const ChatBox = ({ messages }) => {
  return (
    <div className="chat-box flex-1 p-4 overflow-y-auto">
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
          How can I help you today?
        </div>
      ) : (
        messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))
      )}
    </div>
  )
}

export default ChatBox
