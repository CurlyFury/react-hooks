import React, { useContext, useReducer } from 'react'

const AlertContext = React.createContext()

export const useAlert = () => {
	return useContext(AlertContext)
}

export const AlertProvider = ({ children }) => {

	// const [alert, setAlert] = useState(false)
	// const toggle = () => setAlert(val => !val)

	const reducer = (state, action) => {
		switch (action.type) {
			case 'show': return { ...state, visible: true }
			case 'hide': return { ...state, visible: false }
			default: return state
		}
	}

	const [state, dispatch] = useReducer(reducer, {
		visible: false,
	})

	const show = () => dispatch({ type: 'show' })
	const hide = () => dispatch({ type: 'hide' })

	return (
		<AlertContext.Provider value={{
			visible: state.visible,
			show, hide
		}}>
			{children}
		</AlertContext.Provider>
	)
}