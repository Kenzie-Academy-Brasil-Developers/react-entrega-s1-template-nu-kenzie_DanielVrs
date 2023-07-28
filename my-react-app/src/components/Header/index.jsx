import logoLight from "../../assets/logo-nukenzie-black.svg";
import styles from "./style.module.scss";

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<img src={logoLight} alt="" />
			</div>
		</header>
	)
}