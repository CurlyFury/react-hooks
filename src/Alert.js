import React, { useContext } from 'react'
import { CoolContext } from './App'

export default function Alert() {

	const alert = useContext(CoolContext)

	if (!alert) { return null }

	return (
		<div className={'alert alert-danger'}>
			Important message
		</div>
	)
}