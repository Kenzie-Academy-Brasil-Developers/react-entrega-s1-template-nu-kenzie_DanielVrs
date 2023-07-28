import { Header } from "../../components/Header";
import { SectionFinance } from "../../components/sections/sectionFinance";

export const Home = () => {
	return (	
		<>
			<Header />
			<main>
				<div className="container">
					<SectionFinance />
				</div>
			</main>
		</>
	)
}