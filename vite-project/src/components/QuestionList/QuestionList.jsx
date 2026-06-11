import functionImage from '../../assets/Rectangle 40239.png'
import './QuestionList.css'

function QuestionList() {
	return (
		<div className='question-card'>
			<h2>Что такое Virtual DOM, и как он работает?</h2>
			<div className='info-row'>
				<span>Рейтинг: 4</span>
				<span>Сложность: 10</span>
			</div>
			<img src={functionImage} alt='Virtual DOM схема' />

			<p className='description'>
				Virtual DOM (виртуальный DOM) — это программная концепция, используемая
				в разработке веб-приложений для повышения эффективности обновлений
				интерфейса. Это представление реального DOM (структуры документа,
				отображаемого в браузере) в памяти, которое позволяет оптимизировать
				изменения, минимизируя взаимодействие с реальным DOM, что ускоряет
				рендеринг и обновление страниц. При изменении данных приложения Virtual
				DOM сравнивает новое состояние с предыдущим и обновляет только те части
				реального DOM, которые изменились, вместо перерисовки всего документа.
			</p>
		</div>
	)
}

export default QuestionList
