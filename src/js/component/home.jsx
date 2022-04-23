import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	const [color, setColor] = useState("");

	const classRojo = color === "rojo" ? "rojo encender" : "rojo";
	const classAmarillo =
		color === "amarillo" ? "amarillo encender" : "amarillo";
	const classVerde = color === "verde" ? "verde encender" : "verde";

	return (
		<>
			<div className="palito"> </div>

			<div className="semaforito">
				<div
					onClick={() => {
						if (color === "rojo") setColor("");
						else setColor("rojo");
					}}
					className={classRojo}></div>
				<div
					onClick={() => {
						if (color === "amarillo") setColor("");
						else setColor("amarillo");
					}}
					className={classAmarillo}></div>
				<div
					onClick={() => {
						if (color === "verde") setColor("");
						else setColor("verde");
					}}
					className={classVerde}></div>
			</div>
		</>
	);
};
export default Home;
