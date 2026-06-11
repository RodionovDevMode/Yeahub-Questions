import SearchInput from './SearchInput/SearchInput'
import DifficultyTags from './DifficultyTags/DifficultyTags'
import './Sidebar.css'
import StatusButtons from './StatusButtons/StatusButtons'
import RatingStars from './RatingStars/RatingStars'
import FilterBlock from './FilterBlock/FilterBlock'

function Sidebar() {
	const specializations = [
		'UI/UX designer',
		'Frontend developer',
		'Backend developer',
		'Fullstack',
		'Figma',
	]

	const skills = ['Figma', 'Wireframing', 'CSS', 'React.js', 'HTML']

	return (
		<aside className='sidebar'>
			<SearchInput />
			<div className='block'>
				<FilterBlock title='Специализация' items={specializations} />
				<FilterBlock title='Навыки' items={skills} />
			</div>

			<div className='block'>
				<DifficultyTags />
			</div>

			<div className='block'>
				<RatingStars />
			</div>

			<div className='block'>
				<StatusButtons />
			</div>
		</aside>
	)
}

export default Sidebar
