"use client"

import React, { useSyncExternalStore } from "react"
import { useTheme } from "next-themes"
import { FaSun, FaMoon } from "react-icons/fa"

const subscribe = () => () => {}

const useIsClient = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )

const ThemeToggle: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const mounted = useIsClient()

  // Avoid rendering theme-dependent UI during SSR
  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <button
      type="button"
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
