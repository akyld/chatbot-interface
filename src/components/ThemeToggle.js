import React from 'react'
import { Button } from '@/components/ui/button'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <Button
      onClick={toggleTheme}
      className="fixed top-4 left-4 sm:left-auto sm:right-4 p-2 text-black dark:text-white rounded-full z-50"
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </Button>
  )
}

export default ThemeToggle
