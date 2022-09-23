import { createContext, ReactNode, useEffect } from 'react'

interface IssuesContextProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({})

export function IssuesContextProvider({
  children,
}: IssuesContextProviderProps) {
  useEffect(() => {}, [])
  return <IssuesContext.Provider value={}>{children}</IssuesContext.Provider>
}
