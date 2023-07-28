export const Select = ({ children, label, id, value, setValue }) => {
	return (
		<div>
			<label className="label black" htmlFor={id}>{label}</label>
			<select className="select lg"
				name={id}
				id={id}
				value={value}
				onChange={(event) => setValue(event.target.value)}> 
				{children}
			</select>	
		</div>
	);
};