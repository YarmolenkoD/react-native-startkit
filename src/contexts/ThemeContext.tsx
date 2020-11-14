import * as React from 'react'
import { useState } from 'react';
import { modes } from '../themes';

type ThemeContextType = {
  mode: string
  toggleMode: () => void
}

export const ThemeContext = React.createContext<Partial<ThemeContextType>>({
  mode: 'default'
})

export const useThemeContext = () => React.useContext(ThemeContext)

const ThemeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState(modes[0])

  const toggleMode = () => {
    const i = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[i])
  }

  return <ThemeContext.Provider value={{ mode, toggleMode }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider