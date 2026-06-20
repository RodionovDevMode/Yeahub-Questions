import { useState } from 'react'
import './SearchInput.css'

function SearchInput({ onSearchChange }) {
	const [search, setSearch] = useState('')

	const handleChange = e => {
		setSearch(e.target.value)
		onSearchChange(e.target.value)
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
