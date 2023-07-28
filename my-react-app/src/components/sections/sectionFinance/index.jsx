import { useState } from "react";
import { FormNewValue } from "../../forms/FormNewValue";
import { ListSummary } from "./ListSummary";
import { TotalMoney } from "./TotalMoney";
import styles from "./style.module.scss";


export const SectionFinance = () => {
	const [ noteList, setNoteList] = useState([]);

	const addNote = (formData) => {
		const newNote = {...formData, id: crypto.randomUUID() };
		setNoteList([...noteList, newNote])
	};
	
	const removeNote = (removeId) =>{
		
		const newNoteList = noteList.filter(note => note.id !== removeId)
		setNoteList(newNoteList)
	}

	const totalMoneyBalance = () => {
		const balance =  noteList.reduce ((soma , note) => {
			const value = note.value
			return note.type === "Entrada" ? soma + value: soma - value ;
			
		},0)
		return balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
	}
	
	return (
		
		<section className={styles.sectionFinance}>
			<div>
				<FormNewValue addNote={addNote} />
				<TotalMoney noteList={noteList} totalMoneyBalance={totalMoneyBalance} />
			</div>
			<ListSummary noteList={noteList} removeNote={removeNote} />
		</section>
	
	)
}