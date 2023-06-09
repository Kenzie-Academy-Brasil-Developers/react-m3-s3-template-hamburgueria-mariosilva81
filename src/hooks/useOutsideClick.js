import { useEffect, useRef } from 'react'

export const useOutsideClick = (callback) => {
    const ref = useRef(null)

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				if (callback) callback()
			}
		}

		document.addEventListener('mousedown', handleOutsideClick)

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick)
		}
	}, [])

    return ref
}