export const Input = ({ label, id, placeholder, type, value, setValue }) => {
	return (
		<div>
			<label className="label black" htmlFor={id}>{label}</label>
			<input required className="input lg" type={type}
				placeholder={placeholder}
				name={id}
				id={id}
				value={value}	
				onChange={(event) => setValue(type === "number" ? parseFloat(event.target.value) : event.target.value)}
			/>
		</div>
	);	
};