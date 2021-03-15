import React from "react";
import { Header } from "../components/header";
import { graphql, navigate, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import VideoLoader from "../components/videoplayer";
import CommentsFacebook from "../components/commentsFacebook";
import ReactPlayer from "react-player";

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
				whatsapp: file(relativePath: { eq: "WhatsApp_Logo_1.png" }) {
					childImageSharp {
						fixed(quality: 100, width: 144) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
				facebook: file(relativePath: { eq: "fb.png" }) {
					childImageSharp {
						fixed(quality: 100, width: 72) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
			}
		`
	);

	let date = "March 15 2021 16:30";
	let eventButton = "March 8, 2021 17:15";
	let urlRedirect = "https://www.begoba.com/interno/regalo";
	// const [sessionButton, setSessionButton] = useState(false);

	// function timing() {
	// 	setInterval(() => {
	// 		let tempdate = date;
	// 		let currentDate = Date.now();

	// 		if (currentDate > new Date(tempdate)) {
	// 			setSessionButton(true);
	// 		}
	// 	}, 10000);
	// }
	// timing();

	const redirectNext = () => {
		navigate("/s2");
	};

	return (
		<div>
			<Header date={date} />
			<div className="order-container">
				<div className="container content">
					<div className="cards">
						<div className="cards__body">
							<p className="cards__top-text animate-pulsate">
								Ahora Disponible
							</p>
							<Img fixed={data.sesion1.childImageSharp.fixed} />
							<h2 className="cards__footer__title">Sesión 1</h2>
							<p className="cards__footer__note">
								Tu gran oportunidad de tener a tus pacientes en todo el mundo
							</p>
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
							<Link to="/s4" className="cards__body">
								<p className="cards__top-text animate-pulsate">Proximamente!</p>
								<Img fixed={data.sesion4.childImageSharp.fixed} />
								<h2 className="cards__footer__title">Sesión 4</h2>
								<p className="cards__footer__note">
									Vence tu inseguridad y tus miedos tu siguietne paso para vivir
									de tus consultas
								</p>
							</Link>
						</div>
					</div>
				</div>

				<div className="container">
					<h1 className="video__heading">Sesión #1</h1>
					<h1 className="video__paragraph">
						Tu gran oportunidad de tener pacientes en todo el mundo.
					</h1>
					<div className="">
						<VideoLoader
							videoUrl="https://youtu.be/eJ5KNnL_lCo"
							urlRedirect={urlRedirect}
							buttonText="descargar regalo"
							date={eventButton}
						/>
						<div className="m4">
							<button className="mobileButton" onClick={() => redirectNext()}>
								Siguiente Sesión
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="container"></div>

			<div className="container_split">
				<div className="preguntas">
					<div>
						<h1 className="preguntas__heading">
							Cuéntanos dos cosas muy importantes para que podamos ayudarte:
						</h1>
						<div className="divider-left">
							<ul>
								<li className="preguntas__testimonios__list">
									¿Cual es el mayor desafío que tuviste al querer vender tus
									servicios profesionales en internet?
								</li>
								<li className="preguntas__testimonios__list">
									¿Te gustaría aprender a vender tu servicio de consulta por
									internet?
								</li>
							</ul>
						</div>
						<p className="preguntas__testimonios__footer">
							!Nos vemos en los comentarios!
						</p>
					</div>
					<div className="preguntas__facebook">
						<CommentsFacebook />
					</div>
				</div>

				<div className="testimonios">
					<div className="testimonios__social">
						<a href="https://chat.whatsapp.com/BspYI1xBIWlJvnuqIERaTf">
							<Img fixed={data.whatsapp.childImageSharp.fixed} />
						</a>
						<a href="https://www.facebook.com/groups/2375070212786505">
							<Img fixed={data.facebook.childImageSharp.fixed} />
						</a>
					</div>
					<div className="testimonios__videos">
						<ReactPlayer
							url="https://youtu.be/iGA3w0YVac8"
							width={320}
							height={320}
						/>
					</div>

					<div className="testimonios__videos">
						<ReactPlayer
							url="https://youtu.be/c1XGvy-ynZs"
							width={320}
							height={320}
						/>
					</div>
					<ReactPlayer
						url="https://youtu.be/NmL3jxP9BB0"
						width={320}
						height={320}
					/>
					<div className="testimonios__videos">
						<ReactPlayer
							url="https://youtu.be/6_MBqp7E3Zw"
							width={320}
							height={320}
						/>
					</div>
					<ReactPlayer
						url="https://youtu.be/gpXgrVIJrms"
						width={320}
						height={320}
					/>
				</div>
			</div>
		</div>
	);
};

export default Landing;
