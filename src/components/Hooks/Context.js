import React,{useContext, useState, createContext} from 'react'

const ThemeContext = createContext();

function Child(){
    const theme = useContext(ThemeContext)
    return <h2>
        Theme: {theme}
    </h2>
}

const Context = () => {
    const [theme, setTheme] = useState("light")
  return (
    <ThemeContext.Provider value={theme}>
        <button onClick={()=>setTheme(theme === "light"? "dark": "light")}>
            Toggle Theme
        </button>
        <Child />
    </ThemeContext.Provider>
  )
}

export default Context