function FilterBlock({ title, items }) {
	return (
		<>
			<h3>{title}</h3>
			<ul>
				{items.map((item, i) => (
					<li key={i}>{item}</li>
				))}
			</ul>
		</>
	)
}

export default FilterBlock
