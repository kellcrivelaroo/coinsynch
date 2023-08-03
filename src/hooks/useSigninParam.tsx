import { useEffect } from 'react'

const useSigninParam = (signIn: () => void) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const signinParam = window.location.search.substring(1)
      if (signinParam === 'signin') {
        signIn()
      }
    }
  }, [])
}

export default useSigninParam
