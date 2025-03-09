import { Route, Routes, Navigate } from "react-router"
import Greetings from "./Greetings"
import Photos from "./Photos"
import BirthDayNavigation from "./Navigation"

export default function birthday() {
	return (	
			<div>
				<BirthDayNavigation />			
				<Routes>
		            <Route path="/" element={<Navigate to="/Greetings" />} />
		            <Route path="Greetings" element={<Greetings />} />
		            <Route path="Photos" element={<Photos />} />          
        		</Routes>			
			</div>
		
	)
}