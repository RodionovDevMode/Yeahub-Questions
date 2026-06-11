import { useEffect, useState } from 'react'

function useFetchQuestions(url) {
	const [questions, setQuestions] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetch(url)
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTPS status: ${response.status}`)
				}
				return response.json()
			})
			.then(data => {
				setQuestions(data.data || [])
				setLoading(false)
			})
			.catch(err => {
				setError(err.message)
				setLoading(false)
			})
	}, [url])

	return { questions, loading, error }
}

export default useFetchQuestions
