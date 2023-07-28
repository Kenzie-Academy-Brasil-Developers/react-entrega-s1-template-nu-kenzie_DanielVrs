import styles from "./style.module.scss";

export const SummaryCard = ({title, type, value, removeNote, id }) => {
	return (
		<li className={`${styles.cardSummary} ${type === "Entrada" ? styles.green : styles.gray}`} >
			
			<div>
				<h3 className="title3 black">{title}</h3>
				<span className="body">{type}</span>
			</div>
			
			<div>
				<p className="body black">{value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
				<button className="btnDelete" onClick={() => removeNote(id)}>Excluir</button>
			</div>
			
		</li>
	)
}