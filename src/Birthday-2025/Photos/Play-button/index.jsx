import { RiPlayReverseLargeLine } from "react-icons/ri";
import { IoPlayForwardOutline } from "react-icons/io5";
import { RiPlayLargeLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react"
import "./index.css"



function PlayButton(props) {
	const length = 88
	const frequency = 3000
	const [auto, setAuto] = useState(true)
	const [autoIndex, setAutoIndex] = useState(0)
	
	
	function add() {
		if (props.index > length) {
			props.setIndex(0)
		}
		else {
			props.setIndex(props.index + 1)
		}
		setAuto(false)
		
		//clearInterval(pauseInterval)
	}
	const minus = () => {
		if(props.index > 1) {
			props.setIndex(props.index - 1)
		}
		else {
			props.setIndex(length)
		}
		setAuto(false)
		//clearInterval(pauseInterval)
	}

	function autopic() {
		setAuto(true)
		setAutoIndex(autoIndex + 1)
	}

	function temp() {
		if (auto) {
			setTimeout(() => {
			    setAutoIndex((autoIndex + 1) % length)
			    props.setIndex(autoIndex)
			}, frequency)
		}
		
	}

	useEffect(temp, [autoIndex])


	const buttons = [
		{label: "back", icon: <RiPlayReverseLargeLine 
								   size={55}
								   color="blue" 
		                           className="button me-5"
		                           onClick={()=>minus()}/>},
		{label: "auto", icon: <IoPlayForwardOutline  
		                           size={55} 
		                           color="blue" 
		                           className="button me-5"
		                           onClick={autopic}/>},
		{label: "play", icon: <RiPlayLargeLine  
		                           size={55}
		                           color="blue" 
		                           className="button"
		                           onClick={add} />},
		{label: "close", icon: <IoClose 
		                           size={42}
		                           color="blue" 
		                           className="button"
		                           onClick={() => props.setHide(false)} />}
	]
	
	return(
		<>		
		
		<div className={props.hide? "row myrow" :"row myhiddenrow"}>
			
			<div className="col-8 buttons">
				<div className="flex-fill">
				{buttons[0].icon}
				{buttons[1].icon}
				{buttons[2].icon}
				</div>
			</div>
			<div className="col-2">
				{buttons[3].icon}
			</div>
		</div>
		</>
	)
}

export default PlayButton;