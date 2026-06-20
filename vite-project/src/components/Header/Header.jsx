import { useState } from 'react'
import './Header.css'
import RegistrationModal from './components/RegistrationModal/RegistrationModal'

function Header() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	return (
		<div className='header'>
			<div className='logo'>
				<h1>
					<strong>Yeahub</strong>
				</h1>
			</div>
			<div className='menu'>
				<h3>База вопросов</h3>
				<h3>Тренажер</h3>
				<h3>Материалы</h3>
				<h3>Навыки(hh)</h3>
			</div>
			<form onSubmit={e => e.preventDefault()}>
				<button>Вход</button>
				<button type='submit' onClick={openModal}>
					Регистрация
				</button>
			</form>
			{isModalOpen && (
				<RegistrationModal isOpen={isModalOpen} closeModal={closeModal} />
			)}
		</div>
	)
}

export default Header
