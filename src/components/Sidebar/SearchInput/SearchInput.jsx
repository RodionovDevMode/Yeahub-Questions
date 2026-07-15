import { useState } from 'react'
import './SearchInput.css'

function SearchInput({ handleSearchChange, searchQuery }) {
	const [search, setSearch] = useState(searchQuery)

	const handleChange = e => {
		setSearch(e.target.value)
		handleSearchChange(e.target.value)
	}

	return (
		<div className='search-input'>
			<input
				value={search}
				onChange={handleChange}
				placeholder='Введите запрос...'
			/>
		</div>
	)
}

export default SearchInput
