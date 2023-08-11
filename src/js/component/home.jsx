import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import LobbyGame from "./LobbyGame";
import GameComponent from "./GameComponent";

//create your first component
const Home = () => {
	// Defino un estado inicial que es el lobby y cambiara a "game" solo cuando ingrese ambos nombres y le de click al boton para iniciar
	const [stateGame, setStateGame] = useState("Lobby")
	const [Players, setPlayers] = useState("")

	return (
		<div className="container ">
			<div className="row tittle">
				<div className="col-12">
					<h1 className="text-center mt-5 text-white">Tic Tac Toe in React.js</h1>
				</div>
			</div>
			{
				stateGame === "Lobby"? <LobbyGame goGame= {setStateGame} setPlayers={setPlayers}/> : <GameComponent Players={Players}/>
			}

		</div>
	);
};

export default Home;
