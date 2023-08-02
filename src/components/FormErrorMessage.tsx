import { ReactNode } from 'react'

interface FormErrorMessageProps {
  children: ReactNode
}

export default function FormErrorMessage({ children }: FormErrorMessageProps) {
  return (
    <span className="-mb-4 ml-2 block h-4 text-sm text-quartenary-700">
      {children}
    </span>
  )
}
