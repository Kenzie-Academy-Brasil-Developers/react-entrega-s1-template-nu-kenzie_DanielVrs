import styles from "./style.module.scss";

export const TotalMoney = ({noteList,totalMoneyBalance}) => {
	if(noteList.length === 0 ){
		return(
			<>
			</>
		)
	}return(
		<aside className={styles.totalMoney}>
			<div>
				<h3 className="title3 black">Valor Total:</h3>
				<p className="title3 pink">{totalMoneyBalance()}</p>
			</div>
				<span className="title4">O valor se refere ao Saldo</span>
		</aside>
	)
		
}