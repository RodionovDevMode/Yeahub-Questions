import { API_URLS } from '../API/endpoints'
import useFetch from './useFetch'

function useSidebarData() {
	const {
		data: specializations,
		loading: loadingSpec,
		error: errorSpec,
	} = useFetch(API_URLS.specializations)
	const { data: skills, loadingSkills, errorSkills } = useFetch(API_URLS.skills)
	const {
		data: questionsList,
		loading: loadingQuestions,
		error: errorQuestions,
	} = useFetch(API_URLS.questions)

	const specializationsList =
		specializations?.map(spec => ({
			id: spec.id,
			title: spec.title,
		})) || []

	const skillsList =
		skills?.map(skill => ({
			id: skill.id,
			title: skill.title,
		})) || []
	return {
		specializations: specializationsList,
		skills: skillsList,
		questions: questionsList,
		loadingQuestions,
		errorQuestions,
		loadingSpec,
		errorSpec,
		loadingSkills,
		errorSkills,
	}
}

export default useSidebarData
