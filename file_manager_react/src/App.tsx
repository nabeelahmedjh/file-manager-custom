import React from "react";
import "./App.css";
import { FileManagerComponent } from "@syncfusion/ej2-react-filemanager";

function App() {
	const host_URL = "http://localhost:8090";
	const queryStr = "?serverPath=test";
	// const queryStr = "";
	return (
		<div className="App">
			<FileManagerComponent
				ajaxSettings={{
					url: host_URL + queryStr,
					downloadUrl: host_URL + "Download",
					uploadUrl: host_URL + "Upload",
					// getImageUrl = "http://localhost:{port}/GetImage",
				}}></FileManagerComponent>
		</div>
	);
}

export default App;
