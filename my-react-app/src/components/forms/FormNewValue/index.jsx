import { useState } from "react";
import { Input } from "../Input";
import { Select } from "../Select";
import styles from "./style.module.scss"

export const FormNewValue = ({addNote}) => {
	const [ title, setTitle ]  = useState("");
	const [ value , setValue ]  = useState("");
	const [ type, setType ]  = useState("Entrada");
	
	const submit = (event) => {
		event.preventDefault();
		
		addNote({title,value,type});
		setTitle("");
		setValue("");
		setType("Entrada");
	}
	
	return (	
		<form className={styles.formFlex} onSubmit={submit}>
			<div>
				<Input label="Descrição" 
					placeholder="Digite aqui sua descrição" 
					type="text"
					id="description" 
					value={title} 
					setValue={setTitle} />
				<p className="label gray">Ex: Compra de roupas</p>
			</div>
			<Input label="Valor (R$)" 
				placeholder="1" 
				type="number"
				id="includeValue" 
				value={value} 
				setValue={setValue} />
			
			<Select label="Tipo do valor" 
				id="type" 
				value={type} 
				setValue={setType}>
				<option value="Entrada">Entrada</option>
				<option value="Despesa">Despesa</option>
			</Select>
			
			<button className="btn">Inserir Valor</button>
		</form>
	);
};