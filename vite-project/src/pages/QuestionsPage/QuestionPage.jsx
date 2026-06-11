import { API_URLS } from '../../API/endpoints'
import Header from '../../components/Header/Header'
import QuestionsList from '../../components/QuestionsList/QuestionsList'
import useFetchQuestions from '../../hooks/useFetchQuestions'

function QuestionPage() {
	const { questions, loading, error } = useFetchQuestions(API_URLS.questions)
	console.log('questions в QuestionPage:', questions)
	console.log('loading:', loading)
	console.log('error:', error)
	return (
		<div>
			<Header />
			<QuestionsList questions={questions} />
		</div>
	)
}

export default QuestionPage
