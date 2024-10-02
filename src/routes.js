import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
	return (
		<Router>
			<Routes> {/* funciona como um switch, sempre param na primeira rota que ele encontra */}
				<Route path="/" element={<Inicio />} />
				<Route path="/cardapio" element={<Cardapio />} />
			</Routes>
		</Router>
	);
}