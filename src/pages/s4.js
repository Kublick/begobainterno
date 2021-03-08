import React from "react";
import { Header } from "../components/header";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import VideoLoader from "../components/videoplayer";
import { Link } from "gatsby";

const Landing = () => {
	const data = useStaticQuery(
		graphql`
			query {
				sesion1: file(relativePath: { eq: "sesion1.png" }) {
					childImageSharp {
						fixed(quality: 90, width: 144) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
				sesion2: file(relativePath: { eq: "sesion2.png" }) {
					childImageSharp {
						fixed(quality: 90, width: 144) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
				sesion3: file(relativePath: { eq: "sesion3.png" }) {
					childImageSharp {
						fixed(quality: 90, width: 144) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
				sesion4: file(relativePath: { eq: "sesion4.png" }) {
					childImageSharp {
						fixed(quality: 90, width: 144) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
			}
		`
	);

	let date = "March 15,2021 16:30";
	let urlRedirect = "https://pay.hotmart.com/W42168207B?checkoutMode=10";

	return (
		<div>
			<Header date={date} />
			<div className="container content">
				<div className="cards">
					<div className="cards__body">
						<Link to="/s1" className="cards__body">
							<p className="cards__top-text animate-pulsate">
								Ahora Disponible
							</p>
							<Img fixed={data.sesion1.childImageSharp.fixed} />
							<h2 className="cards__footer__title">Sesión 1</h2>
							<p className="cards__footer__note">
								Tu gran oportunidad de tener a tus pacientes en todo el mundo
							</p>
						</Link>
					</div>
					<div className="cards__body">
						<Link to="/s2" className="cards__body">
							<p className="cards__top-text animate-pulsate">
								Ahora Disponible
							</p>
							<Img fixed={data.sesion2.childImageSharp.fixed} />
							<h2 className="cards__footer__title">Sesión 2</h2>
							<p className="cards__footer__note">
								7 formas de tener dinero 100% online y los 5 errores de novato
							</p>
						</Link>
					</div>
					<div className="cards__body">
						<Link to="/s3" className="cards__body">
							<p className="cards__top-text animate-pulsate">
								Ahora Disponible
							</p>
							<Img fixed={data.sesion3.childImageSharp.fixed} />
							<h2 className="cards__footer__title">Sesión 3</h2>
							<p className="cards__footer__note">
								Consigue tus primeros pacientes online con la estrategia
								D.E.P.E.
							</p>
						</Link>
					</div>
					<div className="cards__body">
						<p className="cards__top-text animate-pulsate">Ahora Disponible</p>
						<Img fixed={data.sesion4.childImageSharp.fixed} />
						<h2 className="cards__footer__title">Sesión 4</h2>
						<p className="cards__footer__note">
							Vence tu inseguridad y tus miedos tu siguietne paso para vivir de
							tus consultas
						</p>
					</div>
				</div>
			</div>

			<div className="container">
				<h1 className="video__heading">Sesión #4</h1>
				<h1 className="video__paragraph">
					Vence tu inseguridad y tus miedos tu siguietne paso para vivir de tus
					consultas
				</h1>
				<div className="">
					<VideoLoader
						videoUrl="https://youtu.be/yLPLFklI1hU"
						urlRedirect={urlRedirect}
						buttonText="inscribirme en el entrenamiento"
					/>
				</div>
			</div>
		</div>
	);
};

export default Landing;
