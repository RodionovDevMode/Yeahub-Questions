import DifficultyTags from './DifficultyTags/DifficultyTags'
import FilterBlock from './FilterBlock/FilterBlock'
import RatingStars from './RatingStars/RatingStars'
import SearchInput from './SearchInput/SearchInput'
import './Sidebar.css'
import StatusButtons from './StatusButtons/StatusButtons'
import { useSearchParams } from 'react-router-dom'

function Sidebar({
	specializations,
	skills,
	questions,
	loadingSpec,
	errorSpec,
	loadingSkills,
	errorSkills,
	onDifficultyChange,
	onRatingChange,
	onSkillSelect,
	selectedSkill,
	onStatusFilterChange,
	statusFilter,
}) {
	const [searchParams, setSearchParams] = useSearchParams()
	const searchQuery = searchParams.get('search') || ''

	const handleSearchChange = value => {
		setSearchParams(prev => {
			if (value.trim()) {
				prev.set('search', value)
			} else {
				prev.delete('search')
			}
			return prev
		})
	}

	return (
		<aside className='sidebar'>
			<SearchInput
				searchQuery={searchQuery}
				handleSearchChange={handleSearchChange}
			/>
			<div className='block'>
				<FilterBlock
					title='Специализация'
					items={specializations}
					limit={5}
					loading={loadingSpec}
					error={errorSpec}
					onSkillSelect={onSkillSelect}
					selectedSkill={selectedSkill}
				/>
				<FilterBlock
					title='Навыки'
					items={skills}
					loading={loadingSkills}
					error={errorSkills}
					onSkillSelect={onSkillSelect}
					selectedSkill={selectedSkill}
				/>
			</div>

			<div className='block'>
				<DifficultyTags onDifficultyChange={onDifficultyChange} />
			</div>

			<div className='block'>
				<RatingStars questions={questions} onRatingChange={onRatingChange} />
			</div>

			<div className='block'>
				<StatusButtons
					onStatusFilterChange={onStatusFilterChange}
					statusFilter={statusFilter}
				/>
			</div>
		</aside>
	)
}

export default Sidebar
