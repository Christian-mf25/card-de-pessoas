import "./style.css"

function Devs ( {name, age, country} ){



	return(
		<div className="devs">
				<h3> 
					DEV: {name}
				</h3>

				<p>
					Idade: {age} 
				</p>

				<p>
					País: {country}
				</p>
		</div>
	)
}


export default Devs
