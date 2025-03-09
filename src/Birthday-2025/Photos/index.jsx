import "./index.css"
import { useState, useEffect } from "react"
import Playbutton from "./Play-button"
export default function Photos() {
	
	const [ index, setIndex ] = useState(0) 
	const [ hide, setHide ] = useState(true)
	function meow() {
		setHide(true)
	}

	//useEffect(() => {
		//const img = Document.queryselector("#myimg")
	//})
	return (
		<div className="position-relative mycontainer" >
			
			<img src={require(`../../../photos/${index}.JPG`)} alt="no pic" id="mainpics" onClick={meow}/> 
			
			<div>
				<Playbutton index={index} setIndex={setIndex} hide={hide} setHide={setHide}/>
			</div>
			
		</div>
	)
}