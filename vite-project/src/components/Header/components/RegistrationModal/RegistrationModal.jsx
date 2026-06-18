import './RegistrationModal.css'
function RegistrationModal({ isOpen, openModal, closeModal }) {
	if (!isOpen) return null

	const handleSubmit = e => {
		e.preventDefault()
		closeModal()
	}

	return (
		<div className='modal-overlay'>
			<div className='modal-content' onClick={e => e.stopPropagation()}>
				<button className='close-icon' onClick={closeModal}>
					x
				</button>
				<h1>Добро пожаловать</h1>
				<p className='modal-subtitle'>Создайте аккаунт, чтобы продолжить</p>
				<form className='modal-form' onSubmit={handleSubmit}>
					<div className='input-group'>
						<label>Имя:</label>
						<input type='text' placeholder='Введите имя...' />
					</div>
					<div className='input-group'>
						<label>Пароль:</label>
						<input type='password' placeholder='Введите пароль...' />
					</div>
					<div className='input-group'>
						<label>Email:</label>
						<input type='email' placeholder='example@yandex.ru' />
					</div>
					<div className='modal-buttons'>
						<button type='submit'>Зарегистрироваться</button>
						<button type='button' onClick={closeModal}>
							Отмена
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default RegistrationModal
