import DifficultyTags from './DifficultyTags/DifficultyTags'
import FilterBlock from './FilterBlock/FilterBlock'
import RatingStars from './RatingStars/RatingStars'
import SearchInput from './SearchInput/SearchInput'
import './Sidebar.css'
import StatusButtons from './StatusButtons/StatusButtons'

function Sidebar({
	specializations,
	skills,
	loadingSpec,
	errorSpec,
	loadingSkills,
	errorSkills,
	onDifficultyChange,
}) {
	return (
		<aside className='sidebar'>
			<SearchInput />
			<div className='block'>
				<FilterBlock
					title='Специализация'
					items={specializations}
					limit={5}
					loading={loadingSpec}
					error={errorSpec}
				/>
				<FilterBlock
					title='Навыки'
					items={skills}
					loading={loadingSkills}
					error={errorSkills}
				/>
			</div>

			<div className='block'>
				<DifficultyTags onDifficultyChange={onDifficultyChange} />
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
