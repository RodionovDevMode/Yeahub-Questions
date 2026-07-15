import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import QuestionPage from './pages/QuestionsPage/QuestionPage'
import SkillsHhPage from './pages/SkillsHhPage/SkillsHhPage'
import PracticePage from './pages/PracticePage/PracticePage'
import MaterialPage from './pages/MaterialsPage/MaterialsPage'
import QuestionDetail from './components/QuestionDetail/QuestionDetail'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <QuestionPage />,
			},
			{ path: '/question-detail/:questionId', element: <QuestionDetail /> },
			{
				path: '/practice',
				element: <PracticePage />,
			},
			{
				path: '/materials',
				element: <MaterialPage />,
			},
			{
				path: '/skills',
				element: <SkillsHhPage />,
			},
		],
	},
])
