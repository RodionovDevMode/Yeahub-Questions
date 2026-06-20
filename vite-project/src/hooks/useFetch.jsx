import { useEffect, useState } from 'react'

function useFetch(url) {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const controller = new AbortController()
		let isMounted = true
		setLoading(true)
		fetch(url, { signal: controller.signal })
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTPS status: ${response.status}`)
				}
				return response.json()
			})
			.then(data => {
				if (isMounted) {
					setData(data.data || data)
				}
			})
			.catch(err => {
				if (isMounted && err.name !== 'AbortError') {
					setError(err.message)
				}
			})
			.finally(() => {
				if (isMounted) {
					setLoading(false)
				}
			})
		return () => {
			isMounted = false
			controller.abort()
		}
	}, [url])

	return { data, loading, error }
}

export default useFetch
