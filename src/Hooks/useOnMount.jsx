/* eslint-disable */
import react, { useEffect } from 'react'

export const useOnMount = (callback) => {
  useEffect(callback, [])
}