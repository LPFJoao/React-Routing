import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Header from './components/Header.jsx';
import App from './App.jsx'
import About from './components/About.jsx';
import Footer from './components/footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

		<BrowserRouter>

			<Header />

				<Routes>

					<Route path="/" element={<App />} />
					<Route path="/about" element={<About />} />

				</Routes>

			<Footer />

		</BrowserRouter>

  </StrictMode>,
);
