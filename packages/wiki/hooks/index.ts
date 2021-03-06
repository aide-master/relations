import { useEffect, useRef, useState } from 'react'
import * as Cookies from 'js-cookie'

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

function useWindowSize (type: 'inner' | 'outer'): () => WindowSize {
  return () => {
    const isClient = typeof window === 'object'
    const isInner = type === 'inner'

    const getSize = (): WindowSize => ({
      width: isClient ? (isInner ? window.innerWidth : window.outerWidth) : undefined,
      height: isClient ? (isInner ? window.innerHeight : window.outerHeight) : undefined
    })

    const [windowSize, setWindowSize] = useState(getSize())
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
}

export const useWindowInnerSize = useWindowSize('inner')
export const useWindowOuterSize = useWindowSize('outer')

// use-cookie copied from https://github.com/rrudol/useCookie/blob/master/src/index.js
/**
 * useCookie - React Hook for Cookies based on js-cookie
 * @param {string} key Cookie name
 * @param {Object|string} [initialValue]  Value will be assign if cookie doesn't exist.
 * @returns {Array} Returns cookie value, and the function to update it.
 */
export function useCookie (key, initialValue) {
  const [item, setInnerValue] = useState(() => {
    return Cookies.get(key) || initialValue
  })

  /**
   * Set value of cookie
   * @param {Object|string} value
   * @param {Cookies.CookieAttributes} [options]
   */
  const setValue = (value, options) => {
    setInnerValue(value)
    Cookies.set(key, value, options)
  }

  return [item, setValue]
}
