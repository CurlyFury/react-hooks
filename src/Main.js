import React from 'react'
import { useAlert } from './alert/AlertContext'

export default function Main() {

	const { show } = useAlert()

	return (
		<>
			<h1>Hi context</h1>
			<button onClick={show} className='btn btn-success'>Show alert</button>
		</>
	)
}