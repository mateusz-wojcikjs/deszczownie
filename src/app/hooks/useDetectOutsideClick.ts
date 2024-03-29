import { useEffect, useState } from 'react'

export const useDetectOutsideClick: any = (el, initialState): any => {
  const [isActive, setIsActive] = useState(initialState)
  const windowGlobal = typeof window !== 'undefined' && window

  useEffect(() => {
    const onClick: any = (e): any => {
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive)
      }
    }
    if (isActive) {
      windowGlobal.addEventListener('click', onClick)
    }

    return () => {
      windowGlobal.removeEventListener('click', onClick)
    }
  }, [isActive])

  return [isActive, setIsActive]
}
