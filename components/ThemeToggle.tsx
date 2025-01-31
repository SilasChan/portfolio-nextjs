import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { FaSun, FaMoon } from "react-icons/fa"

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent mismatch during hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300"
    >
      {resolvedTheme === "light" ? (
        <FaMoon size={20} className="text-gray-800" />
      ) : (
        <FaSun size={20} className="text-yellow-400" />
      )}
    </button>
  )
}

export default ThemeToggle
