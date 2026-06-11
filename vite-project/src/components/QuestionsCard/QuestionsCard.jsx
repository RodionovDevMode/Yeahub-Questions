import QuestionList from '../QuestionList/QuestionList'
import Sidebar from '../Sidebar/Sidebar'
import './QuestionsCard.css'
function QuestionsCard() {
	return (
		<div className='page'>
			{/* Шапка */}
			<header className='header'>
				<div className='subtitle'>Вопросы React, JavaScript</div>
			</header>

			<div className='main-grid'>
				<div className='question-section'>
					<QuestionList />
				</div>

				<Sidebar />
			</div>
		</div>
	)
}

export default QuestionsCard
