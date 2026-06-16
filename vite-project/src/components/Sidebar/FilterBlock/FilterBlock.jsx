import './FilterBlock.css'

function FilterBlock({ title, items, limit = 5, loading, error }) {
	if (loading) return <p>Загрузка...</p>
	if (error) return <p>Ошибка: {error}</p>

	if (!items || items.length == 0) {
		return null
	}

	const displayedItems = items
		.filter(item => {
			const title = item.title?.toLowerCase() || ''
			return !title.includes('проверка') && !title.includes('загл')
		})
		.slice(0, limit)

	return (
		<>
			<h3>{title}</h3>
			<ul>
				{displayedItems.map(item => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</>
	)
}

export default FilterBlock
