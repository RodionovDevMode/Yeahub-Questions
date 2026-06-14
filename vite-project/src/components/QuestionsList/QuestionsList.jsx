import useSidebarData from '../../hooks/useSidebarData'
import QuestionCard from '../QuestionCard/QuestionCard'
import Sidebar from '../Sidebar/Sidebar'
import './QuestionsList.css'

function QuestionsList() {
	const {
		specializations,
		skills,
		questions,
		loadingQuestions,
		errorQuestions,
		loadingSpec,
		errorSpec,
		loadingSkills,
		errorSkills,
	} = useSidebarData()
	return (
		<div className='page'>
			<header className='header'>
				<div className='subtitle'>Вопросы React, JavaScript</div>
			</header>

			<div className='main-grid'>
				<div className='question-section'>
					<QuestionCard
						questions={questions}
						loading={loadingQuestions}
						error={errorQuestions}
					/>
				</div>

				<Sidebar
					specializations={specializations}
					skills={skills}
					loadingSpec={loadingSpec}
					errorSpec={errorSpec}
					loadingSkills={loadingSkills}
					errorSkills={errorSkills}
				/>
			</div>
		</div>
	)
}

export default QuestionsList
