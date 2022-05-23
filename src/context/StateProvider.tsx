import { useContext, useState, createContext } from 'react'
import { Task } from '../types/types'


interface StateContextType {
  tasks: Task[] | null
  dark: boolean
  setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>
  setDark: React.Dispatch<React.SetStateAction<boolean>>
}
const StateContext = createContext({} as StateContextType)
export const StateProvider = ({ children }: any) => {
  const [tasks, setTasks] = useState<Task[] | null>(null)
  const [dark, setDark] = useState(false)
  return (
    <StateContext.Provider value={{ tasks, setTasks, dark, setDark }}>
      {children}
    </StateContext.Provider>
  )
}
export const useStateContext = (): StateContextType => useContext(StateContext)

// これは従来の管理方法Reduxのみの管理