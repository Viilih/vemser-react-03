import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';

import styles from './Formulario.module.scss';

const Formulario = ({ aoCadastrar, animais, cadastrarEspecie }) => {
	const [animal, setAnimal] = useState('');
	const [raca, setRaca] = useState('');
	const [imagem, setImagem] = useState('');
	const [especie, setEspecie] = useState('');
	const [nomeEspecie, setNomeEspecie] = useState('');
	const [corEspecie, setCorEspecie] = useState('');

	const aoSubmeter = e => {
		e.preventDefault();
		console.log('Form enviado', animal, raca, imagem, especie);
		aoCadastrar({ animal, raca, imagem, especie });
	};

	return (
		<>
			<section className={styles.formularioContainer}>
				<form className={styles.formulario} onSubmit={aoSubmeter}>
					<h2> Preencha os dados para criar o card de animais</h2>
					<Campo
						obrigatorio
						label="Animal"
						placeholder="Digite o tipo de animal"
						valor={animal}
						aoAlterado={valor => setAnimal(valor)}
					/>
					<Campo
						obrigatorio={true}
						label="Raça"
						placeholder="Digite a raça"
						valor={raca}
						aoAlterado={valor => setRaca(valor)}
					/>
					<Campo
						obrigatorio
						label="Imagem"
						placeholder="Informe a url da imagem"
						valor={imagem}
						aoAlterado={valor => setImagem(valor)}
					/>

					<ListaSuspensa
						obrigatorio
						label="Espécie"
						value={especie}
						aoAlterado={valor => setEspecie(valor)}
						items={animais}
					/>

					<Botao texto="Criar card do animal informado" />
				</form>
				<form className={styles.formulario} onSubmit={aoSubmeter}>
					<h2>Preencha os dados para criar uma nova categoria.</h2>
					<Campo
						obrigatorio
						label="Espécie"
						value={nomeEspecie}
						aoAlterado={valor => setNomeEspecie(valor)}
					/>
					<Campo
						obrigatorio
						type="color"
						label={'Cor da seção'}
						vaalue={corEspecie}
						aoAlterado={valor => setCorEspecie(valor)}
					/>
					<Botao texto="Criar nova seção para o animal" />
				</form>
			</section>
		</>
	);
};

export default Formulario;
