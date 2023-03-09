import { useState } from 'react';
import reactLogo from './assets/react.svg';
import '../src/assets/Global.module.scss';
import Banner from './components/Banner';
import Footer from './components/Rodape';
import Formulario from './components/Formulario';

function App() {
	const [animais, setAnimais] = useState([
		{
			// id: uuidv4(),
			nome: 'Mamíferos',
			cor: '#57C278',
		},
		{
			// id: uuidv4(),
			nome: 'Aves',
			cor: '#82CFFA',
		},
		{
			// id: uuidv4(),
			nome: 'Peixes',
			cor: '#A6D157',
		},
		{
			// id: uuidv4(),
			nome: 'Anfíbios',
			cor: '#E06B69',
		},
		{
			// id: uuidv4(),
			nome: 'Répteis',
			cor: '#DB6EBF',
		},
		{
			// id: uuidv4(),
			nome: 'Equinodermos',
			cor: '#FFBA05',
		},
		{
			// id: uuidv4(),
			nome: 'Poríferos',
			cor: '#FF8A29',
		},
	]);

	return (
		<div>
			<Banner />
			{/* O array de objetos animais é mapeado para retornar um array com apenas os
			nomes dos animais que é uma prop a ser utilizada na função Formulario, que
			posteriormente será utilizada em ListaSuspensa --> Hierarquia props */}
			<Formulario animais={animais.map(animal => animal.nome)} />
			<Footer />
		</div>
	);
}

export default App;
