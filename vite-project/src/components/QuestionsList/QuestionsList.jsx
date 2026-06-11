import QuestionItems from '../QuestionItems/QuestionItems'
import functionImage from './assets/Rectangle 40239.png'
import './QuestionsList.css'
function QuestionsPage() {
	return (
		<div className='page'>
			{/* Шапка */}
			<header className='header'>
				<div className='subtitle'>Вопросы React, JavaScript</div>
			</header>

			{/* Основная сетка: вопрос + боковая панель */}
			<div className='main-grid'>
				{/* Левая часть — вопрос */}
				<div className='question-section'>
					<div className='question-card'>
						<h2>Что такое Virtual DOM, и как он работает?</h2>
						<div className='info-row'>
							<span>Рейтинг: 4</span>
							<span>Сложность: 10</span>
						</div>
						<img src={functionImage} alt='Virtual DOM схема' />

						<p className='description'>
							Virtual DOM (виртуальный DOM) — это программная концепция,
							используемая в разработке веб-приложений для повышения
							эффективности обновлений интерфейса. Это представление реального
							DOM (структуры документа, отображаемого в браузере) в памяти,
							которое позволяет оптимизировать изменения, минимизируя
							взаимодействие с реальным DOM, что ускоряет рендеринг и обновление
							страниц. При изменении данных приложения Virtual DOM сравнивает
							новое состояние с предыдущим и обновляет только те части реального
							DOM, которые изменились, вместо перерисовки всего документа.
						</p>
					</div>
					<QuestionItems />
					<QuestionItems />
					<QuestionItems />
					<QuestionItems />
					<QuestionItems />
					<QuestionItems />
					<QuestionItems />
					<QuestionItems />
				</div>

				{/* Правая часть — боковая панель */}
				<aside className='sidebar'>
					{/* Специализация */}
					<input placeholder='Введите запрос...' />

					<div className='block'>
						<h3>Специализация</h3>
						<ul>
							<li>UI/UX designer</li>
							<li>Frontend developer</li>
							<li>Backend developer</li>
							<li>Fullstack</li>
							<li>Figma</li>
							<li>Посмотреть все</li>
						</ul>
					</div>

					{/* Навыки */}
					<div className='block'>
						<h3>Навыки</h3>
						<ul>
							<li>Figma</li>
							<li>Wireframing</li>
							<li>CSS</li>
							<li>React.js</li>
							<li>HTML</li>
							<li>Посмотреть все</li>
						</ul>
					</div>

					{/* Уровень сложности */}
					<div className='block'>
						<h3>Уровень сложности</h3>
						<div className='tags'>
							<button>1–3</button>
							<button>4–6</button>
							<button>7–8</button>
							<button>9–10</button>
						</div>
					</div>

					{/* Рейтинг (звёзды) */}
					<div className='block'>
						<h3>Рейтинг</h3>
						<div className='stars'>
							<span>★</span>
							<span>★</span>
							<span>★</span>
							<span>★</span>
							<span>☆</span>
							<span>4</span>
						</div>
					</div>

					{/* Статус */}
					<div className='block'>
						<h3>Статус</h3>
						<div className='status-buttons'>
							<button>Изученные</button>
							<button>Не изученные</button>
							<button>Все</button>
						</div>
					</div>
				</aside>
			</div>
		</div>
	)
}

export default QuestionsPage
