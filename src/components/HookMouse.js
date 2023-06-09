import React, {useState, useEffect} from 'react'

function HookMouse() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log("Вызвался logMousePosition")
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() => {
		console.log("Вызвался useEffect")
		window.addEventListener('mousemove', logMousePosition)

		return () => {
			console.log("Аналог componentWillUnmount")
			window.removeEventListener('mousemove', logMousePosition)
		}
	}, [])

	return (
		<div>
			X - {x} Y - {y}
		</div>
	);
}

export default HookMouse;