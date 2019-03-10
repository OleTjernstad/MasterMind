import React from 'react'
import '../App.css';

function Rules(props) {
	return <div style={{
			padding: '10px'
		}}>
		<p>Ved start av spill genereres en fire farget kode, av seks forskjellige farger. Det er lov å gjenta en farge flere ganger. Koden kan til og med være fire like Ditt mål er å avdekke hvilke farger koden består av, og sette de i samme rekkefølge.</p>

		<p>Velg fire farger i neste ledige rad, klikk så på kontroll, så vil datamaskinen bedømme koden din på denne måten:</p>
		<ul>
			<li>
				For hver farge som er riktig, og på riktig plass får du et svart merke</li>
			<li>For hver farge som er riktig, men på feil plass får du et rødt merke
			</li>
		</ul>
		<p>Du har tolv rader på deg å gjette, om du ikke klarer det på de radene vil du tape og du må resette spillet, det vil da bli generert en ny kode.</p>

		<p>Lykke til!</p>
	</div>
}

export default Rules
