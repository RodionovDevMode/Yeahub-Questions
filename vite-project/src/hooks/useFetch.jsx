import { useEffect, useState } from 'react'

function useFetch(url) {
	const [data, setData] = useState(null)
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
				setData(data.data || data)
				setLoading(false)
			})
			.catch(err => {
				setError(err.message)
				setLoading(false)
			})
	}, [url])

	return { data, loading, error }
}

export default useFetch
