import { useEffect, useRef, useState } from 'react'

export function useInterval (callback: Function, delay: number | null): void {
  const savedCallback = useRef<Function | undefined>()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick (): void {
      if (savedCallback.current) {
        savedCallback.current()
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

interface WindowSize {
  width?: number
  height?: number
}

export function useWindowSize (): WindowSize {
  const isClient = typeof window === 'object'

  const getSize = (): WindowSize => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined
  })

  const [windowSize, setWindowSize] = useState(getSize)
  const handleResize = (): void => setWindowSize(getSize())

  useEffect(() => {
    if (!isClient) {
      return
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}
