import React from "react";
import { Header } from "../components/header";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import VideoLoader from "../components/videoplayer";
import CommentsFacebook from "../components/commentsFacebook";
import ReactPlayer from "react-player";

const Sesion4 = () => {
	const data = useStaticQuery(
		graphql`
			query {
				sesion1: file(relativePath: { eq: "Clase1.png" }) {
					childImageSharp {
						fixed(quality: 90, width: 144) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
				sesion2: file(relativePath: { eq: "Clase2.png" }) {
					childImageSharp {
						fixed(quality: 90, width: 144) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
				sesion3: file(relativePath: { eq: "Clase3.png" }) {
					childImageSharp {
						fixed(quality: 90, width: 144) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
				sesion4: file(relativePath: { eq: "Clase4.png" }) {
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
			}
		`
	);

	let date = "July 1, 2021 17:30";
	let urlRedirect = "https://es.surveymonkey.com/r/6DBTWVW";
	let eventButton = "July 1, 2021 18:10";

	let show = false;
	if (new Date("July 1, 2021 19:00").getTime() < Date.now().toString()) {
		show = true;
	}

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
							<h2 className="cards__footer__title">Clase 1</h2>
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
							<h2 className="cards__footer__title">Clase 2</h2>
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
							<h2 className="cards__footer__title">Clase 3</h2>
							<p className="cards__footer__note">
								Consigue tus primeros pacientes online con la estrategia
								D.E.P.E.
							</p>
						</Link>
					</div>
					<div className="cards__body">
						<p className="cards__top-text animate-pulsate">Ahora Disponible</p>
						<Img fixed={data.sesion4.childImageSharp.fixed} />
						<h2 className="cards__footer__title">Clase 4</h2>
						<p className="cards__footer__note">
							Vence tu inseguridad y tus miedos tu siguietne paso para vivir de
							tus consultas
						</p>
					</div>
				</div>
			</div>

			<div className="container">
				<h1 className="video__heading">Clase #4</h1>
				<h1 className="video__paragraph">
					Vence tu inseguridad y tus miedos tu siguietne paso para vivir de tus
					consultas
				</h1>
				<div>
					<VideoLoader
						videoUrl="https://youtu.be/xL4vvrUq4Kg"
						urlRedirect={urlRedirect}
						buttonText="Ir al Formulario"
						date={eventButton}
					/>
				</div>
			</div>
			<div className="container_split">
				<div className="preguntas">
					<div>
						<h1 className="preguntas__heading">
							¿Te gustaria seguir aprendiendo a incrementar tu numero de
							pacientes?
						</h1>
						<div className="preguntas__heading">
							<button
								className="communityButton communityButton--animated"
								onClick={() =>
									window.open("https://wa.me/message/LD54V7JCH3TXD1")
								}
							>
								Recibe informacion envía un Whatsapp
							</button>
							{show ? (
								<div className="testimonios">
									<h4>Te Perdiste la Clase 1</h4>
									<div className="testimonios__videos">
										<ReactPlayer
											url="https://youtu.be/wN8h9H2H7So"
											width={380}
											height={380}
										/>
									</div>
									<h4>Te Perdiste la Clase 2</h4>
									<div className="testimonios__videos">
										<ReactPlayer
											url="https://youtu.be/BURILmkSxTg"
											width={380}
											height={380}
										/>
									</div>
									<h4>Te Perdiste la Clase 3</h4>
									<div className="testimonios__videos">
										<ReactPlayer
											url="https://youtu.be/HlKVxcsD7ls"
											width={380}
											height={380}
										/>
									</div>
								</div>
							) : null}
						</div>
						{/* <p className="preguntas__testimonios__footer">
							!Nos vemos en los comentarios!
						</p> */}
					</div>
					<div className="preguntas__facebook">
						<CommentsFacebook />
					</div>
				</div>

				<div className="testimonios">
					<div className="testimonios__social">
						{/* <a href="https://chat.whatsapp.com/BspYI1xBIWlJvnuqIERaTf">
							<Img fixed={data.whatsapp.childImageSharp.fixed} />
						</a> */}
					</div>
					<div className="testimonios__videos">
						<ReactPlayer
							url="https://youtu.be/z9CsFqeleUo"
							width={320}
							height={320}
						/>
					</div>

					<div className="testimonios__videos">
						<ReactPlayer
							url="https://youtu.be/wXHrOaaJZoM"
							width={320}
							height={320}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sesion4;
