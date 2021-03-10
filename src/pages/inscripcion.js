import React from "react";
import { bullet } from "../images/airplane";

const Inscripcion = () => {
	const hotmartRedirect = () => {
		window.open("https://pay.hotmart.com/W42168207B?checkoutMode=10");
	};

	return (
		<>
			<div>
				<div className="inscripcion-container">
					<h2 className="inscripcion__subheader">
						La estrategia que ha logrado que
					</h2>
					<h1 className="inscripcion__header">
						Psicólogos incrementen su número de pacientes
					</h1>
					<h2 className="inscripcion__subheader">
						y dupliquen sus ingresos a través de internet incluso empezando
						desde cero.
					</h2>
					<div className="center">
						<button
							className="inscripcion__button"
							onClick={() => hotmartRedirect()}
						>
							Deseo Inscribirme
						</button>
					</div>
				</div>
				<div className="inscripcion-container-white">
					<h1 className="center m4">Esto es para ti si:</h1>
					<ul className="inscripcion__list">
						<l1>
							{bullet} ¿Quieres aprender a generar nuevos pacientes a través de
							internet?
						</l1>
						<li>
							{bullet} Ya estas trabajando de forma online, pero aun no logras
							los resultados que deseas y quieres llegar a más personas.
						</li>
						<li>
							{bullet} Es para ti si acabas de salir de la universidad y no
							tienes ni la menor idea de por dónde comenzar a generar ingresos y
							tener pacientes.
						</li>
						<li>
							{bullet} Te has estado actualizando con las nuevas herramientas
							digitales, pero ahora necesitas algo más: acompañamiento y
							seguimiento para implementar todo esto efectivamente.
						</li>
						<li>
							{bullet} No tienes el tiempo ni la claridad para seguir intentando
							avanzar, sin saber si estás realmente enfocándote en lo esencial
							para seguir creciendo.
						</li>
						<li>
							{bullet} Estás necesitando tener orden, planificación y un sistema
							de trabajo que te permita escalar y ampliar tus servicios. Quieres
							saber ahora ya, cuál debería ser tu próximo paso.
						</li>
						<li>
							{bullet} A veces es difícil para ti saber qué es prioritario y no
							sabes por dónde empezar, por lo que no estás segura de si vas por
							el camino que te llevará donde quieres.
						</li>
						<li>
							{bullet} Estás buscando que te tomen de la mano y que te ayuden a
							implementar eso que sabes que hay que hacer para crecer, pero que
							aún no has logrado concretizar.
						</li>
						<li>
							{bullet} Emprender es muy solitario y quisieras compartir tus
							victorias y retos con un grupo que te entienda y esté en tu mismo
							nivel para aprender de la experiencia real de otras Psicólogos, al
							mismo tiempo que recibes feedback experto personalizado.
						</li>
						<li>
							{bullet} Te gustaría seguir trabajando conmigo y mi equipo, pero
							por el momento no tienes el dinero como para invertir fuertemente,
							aunque sabes que es muy necesario seguir acompañada
						</li>
					</ul>
				</div>
				<div className="inscripcion-container">
					<h1 className="inscripcion__subheader">
						Por más que has tratado de hacerlo, te falta la guía especializada
						que te de la confianza que necesitas para llevarte al nivel superior
						al que aspiras en tu calidad de vida, ingresos y realización
						personal y laboral.
					</h1>

					<h2 className="inscripcion__third">
						Pero no sabes cómo hacer todo esto sin sentirte egoísta,
						desconectada de la “realidad” ni parecer que te estás aprovechando
						de la situación de la pandemia de salud mental que hay.
					</h2>
				</div>
				<div className="inscripcion-container-white">
					<h1 className="inscripcion__subheader-red">
						Tristemente esta es la realidad de miles de psicólogos hoy.
					</h1>
					<h2 className="inscripcion__third-red">
						Pero no de todos. Puedo con mucho orgullo y tranquilidad decirte que
						los psicólogos que han pasado por mi entrenamiento hoy cuentan con
						todas las herramientas necesarias para aportar más que nunca y
						seguir ejerciendo en medio de esta situación, con abundancia y
						calidad de vida.
					</h2>
					<h2 className="inscripcion__third-red">
						Si respondiste que si al menos alguna de estas situaciones sigue
						leyendo, llevo años de camino recorrido y te puedo ayudar a llegar a
						dónde quieres, en una fracción del tiempo e inversión que me llevo a
						mí.
					</h2>
					<div className="center">
						<button
							className="inscripcion__button"
							onClick={() => hotmartRedirect()}
						>
							SI QUIERO QUE ME AYUDES A LLEGAR A MI META
						</button>
					</div>
				</div>
				<div className="inscripcion-container">
					<h2 className="inscripcion__third">
						<span className="inscripcion__third__strong">
							¿Sientes el llamado verdad?
						</span>{" "}
						Esa adrenalina en tus venas que sabe qué llegó tu momento. Y ahora
						lo único que quieres es saber cómo avanzar hacia el próximo paso que
						te permita convertirte en un{" "}
						<span className="inscripcion__third__strong">
							Psicólogo éxitoso
						</span>
					</h2>
				</div>
			</div>
		</>
	);
};

export default Inscripcion;
