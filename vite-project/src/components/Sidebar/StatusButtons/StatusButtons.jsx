import './StatusButtons.css'

function StatusButtons({ onStatusFilterChange, statusFilter }) {
	return (
		<>
			<h3>Статус</h3>
			<div className='status-buttons'>
				<button
					className={statusFilter === 'know' ? 'active' : ''}
					onClick={() => onStatusFilterChange('know')}
				>
					Изученные
				</button>
				<button
					className={statusFilter === 'unknown' ? 'active' : ''}
					onClick={() => onStatusFilterChange('unknown')}
				>
					Не изученные
				</button>
				<button
					className={statusFilter === null ? 'active' : ''}
					onClick={() => onStatusFilterChange('all')}
				>
					Все
				</button>
			</div>
		</>
	)
}

export default StatusButtons
