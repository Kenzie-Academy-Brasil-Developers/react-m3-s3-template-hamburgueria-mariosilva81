import { useEffect, useRef } from 'react'

export const useKeyDown = (keyName, callback) => {
    const ref = useRef(null)

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === keyName) {
				if (callback) callback(ref.current)
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [])

    return ref
}