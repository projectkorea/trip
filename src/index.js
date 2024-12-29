import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router";
import Schedule from "./components/schedules/Schedule";
import CityPage from "./components/schedules/CityPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<BrowserRouter>
		<Routes>
			<Route index element={<App />} />
			<Route path="/schedule" element={<Schedule />} />
			<Route path="/schedule/citypage" element={<CityPage />} />
		</Routes>
	</BrowserRouter>
	// </React.StrictMode>
);
