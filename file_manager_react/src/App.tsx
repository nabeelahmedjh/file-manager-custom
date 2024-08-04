import React from "react";
import "./App.css";
import { FileManagerComponent } from "@syncfusion/ej2-react-filemanager";

function App() {
	const host_URL = "http://localhost:8090";
	return (
		<div className="App">
			<FileManagerComponent
				ajaxSettings={{
					url: host_URL + "?serverPath=/test",
					downloadUrl: host_URL + "Download",
					uploadUrl: host_URL + "Upload",
					// getImageUrl = "http://localhost:{port}/GetImage",
				}}></FileManagerComponent>
		</div>
	);
}

export default App;
