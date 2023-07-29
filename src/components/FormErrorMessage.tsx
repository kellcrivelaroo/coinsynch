import { ReactNode } from 'react'

interface FormErrorMessageProps {
  children: ReactNode
}

export default function FormErrorMessage({ children }: FormErrorMessageProps) {
  return (
    <span className="-mb-3 ml-2 block h-3 text-sm text-quartenary-700">
      {children}
    </span>
  )
}
