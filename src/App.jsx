import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './assets/Global.module.scss';
import './index.css';
import Banner from './components/Banner';
import Footer from './components/Rodape';
import Formulario from './components/Formulario';
import Animais from './components/Animais';
import Section from './components/Section';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [animais, setAnimais] = useState([]);
	const [classeAnimais, setClasseAnimais] = useState([
		{
			id: uuidv4(),
			nome: 'Mamíferos',
			cor: '#57C278',
		},
		{
			id: uuidv4(),
			nome: 'Aves',
			cor: '#82CFFA',
		},
		{
			id: uuidv4(),
			nome: 'Peixes',
			cor: '#A6D157',
		},
		{
			id: uuidv4(),
			nome: 'Anfíbios',
			cor: '#E06B69',
		},
		{
			id: uuidv4(),
			nome: 'Répteis',
			cor: '#DB6EBF',
		},
		{
			id: uuidv4(),
			nome: 'Equinodermos',
			cor: '#FFBA05',
		},
		{
			id: uuidv4(),
			nome: 'Poríferos',
			cor: '#FF8A29',
		},
	]);

	// function createEspecie(){
	// 	setClasseAnimais([...classeAnimais,{id:uuidv4(), nome:}])
	// }

	return (
		<div>
			<Banner />
			{/* O array de objetos animais é mapeado para retornar um array com apenas os
			nomes dos animais que é uma prop a ser utilizada na função Formulario, que
			posteriormente será utilizada em ListaSuspensa --> Hierarquia props */}
			<Formulario
				classeAnimais={classeAnimais.map(classeAnimal => classeAnimal.nome)}
			/>
			<section className="especie-section">
				<h2 className="sectionTitle">Espécies & Animais</h2>
				<Section nome="Mamíferos" cor="#57C278" />
			</section>
			{/* */}
			<Footer />
		</div>
	);
}

export default App;
