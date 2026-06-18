import { useState } from 'react'
import './FilterBlock.css'

function FilterBlock({
	title,
	items,
	limit = 5,
	loading,
	error,
	onSkillSelect,
	selectedSkill,
}) {
	const [showAll, setShowAll] = useState(false)

	if (loading) return <p>Загрузка...</p>
	if (error) return <p>Ошибка: {error}</p>

	if (!items || items.length == 0) {
		return null
	}

	const filteredItems = items.filter(item => {
		const title = item.title?.toLowerCase() || ''
		return !title.includes('проверка') && !title.includes('загл')
	})

	const displayedItems = showAll ? filteredItems : filteredItems.slice(0, limit)

	const handleClick = id => {
		if (selectedSkill === id) {
			onSkillSelect(null)
		} else {
			onSkillSelect(id)
		}
	}

	return (
		<div className='filter-block'>
			<h3>{title}</h3>
			<ul>
				{displayedItems.map(item => (
					<li
						key={item.id}
						onClick={() => handleClick(item.id)}
						className={selectedSkill === item.id ? 'active' : ''}
					>
						{item.title}
					</li>
				))}
			</ul>
			{filteredItems.length > limit && (
				<button className='show-more' onClick={() => setShowAll(!showAll)}>
					{showAll ? 'Скрыть' : 'Посмотреть все'}
				</button>
			)}
		</div>
	)
}

export default FilterBlock
