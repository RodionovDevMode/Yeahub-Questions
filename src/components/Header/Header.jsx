import { useState } from 'react'
import RegistrationModal from './components/RegistrationModal/RegistrationModal'

import './Header.css'
import Nav from '../Nav/Nav'

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
				<Nav />
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
