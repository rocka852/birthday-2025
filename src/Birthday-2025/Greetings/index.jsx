// function name can be anything, no matter lowercase or uppercase
import { Link, useLocation } from "react-router-dom";
export default function greetings() {
	const index = "title.jpg"
	function meow() {
		return 1
	}
	return(
		<div>
			<Link to={"../photos"}>
			<img src={require(`../../../photos/${index}`)} alt="no pic" id="cake" onClick={meow}/> 
			</Link>
		</div>
	)
}