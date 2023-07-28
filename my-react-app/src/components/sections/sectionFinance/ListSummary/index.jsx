import { SummaryCard } from "./SummaryCard";
import styles from "./style.module.scss";

export const ListSummary = ({noteList, removeNote}) => {
	if(noteList.length === 0 ){
		return (
			<>
				<ul className={styles.listSummary} >
						<h3 className="title3 black">Resumo Financeiro</h3>
					<li>
						<p className={`title2 ${styles.empytText}`}>Você ainda não possui nenhum lançamento</p>
					</li>
				</ul>
			</>
		)
	}return (
		<>
			<ul className={styles.listSummary}>
			<h2 className="title3">Resumo Financeiro</h2>
				{noteList.map(note =>(	
					<SummaryCard key={note.id} title={note.title} type={note.type} value={note.value} removeNote={removeNote} id={note.id}/>
					))}
			</ul>
		</>
	)
	
};