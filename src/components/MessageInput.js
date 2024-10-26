import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FaArrowUp } from 'react-icons/fa'

const MessageInput = ({ onSend }) => {
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      onSend(input)
      setInput('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div className="message-input p-4 border-t border-gray-200 dark:border-gray-700 flex">
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder=" Type a message... "
        className="flex-1 mx-2"
      />
      <Button onClick={handleSend}>
        <FaArrowUp />
      </Button>
    </div>
  )
}

export default MessageInput
