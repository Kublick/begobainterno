import * as React from "react";
import Landing from "./sesion_1";
import SEO from "../components/seo";

const IndexPage = () => {
	return (
		<>
			<SEO
				keywords={[`psicologo`, `curso`, `pacientes`, `formacion`]}
				title="Incrementa tu numero de pacientes"
			/>

			<Landing />
		</>
	);
};

export default IndexPage;
