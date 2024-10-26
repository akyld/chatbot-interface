'use client'

import React, { useState, useEffect } from 'react'
import ChatBox from '../components/ChatBox'
import MessageInput from '../components/MessageInput'
import ThemeToggle from '../components/ThemeToggle'
import { botResponses } from '../data/botResponses'

const Home = () => {
  const [messages, setMessages] = useState([])
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const addMessage = (text, sender) => {
    const newMessage = {
      text,
      sender,
      timestamp: new Date().toLocaleTimeString(),
    }
    setMessages((prevMessages) => [...prevMessages, newMessage])
  }

  const handleSend = (text) => {
    addMessage(text, 'user')
    const botResponse =
      botResponses[Math.floor(Math.random() * botResponses.length)]
    setTimeout(() => addMessage(botResponse, 'bot'), 1000)
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center w-full">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className="chat-container w-full max-w-6xl flex-1 flex flex-col md:my-10">
        <ChatBox messages={messages} />
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  )
}

export default Home
