import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import { v4 as uuidv4 } from 'uuid';

import styles from './Formulario.module.scss';

const Formulario = ({
	aoCadastrarAnimal,
	classeAnimais,
	aoCadastrarEspecie,
}) => {
	const [animal, setAnimal] = useState('');

	// Animal
	const [desc, setDesc] = useState('');
	const [imagem, setImagem] = useState('');
	const [especie, setEspecie] = useState('');

	const aoSubmeterAnimal = e => {
		e.preventDefault();
		aoCadastrarAnimal({ animal, imagem, especie, desc });
	};

	// Especie
	const [nomeEspecie, setNomeEspecie] = useState('');
	const [corEspecie, setCorEspecie] = useState('');
	const aoSubmeterEspecie = e => {
		e.preventDefault();
		aoCadastrarEspecie({ nome: nomeEspecie, cor: corEspecie, id: uuidv4() });
	};

	return (
		<>
			<section className={styles.formularioContainer}>
				<form className={styles.formulario} onSubmit={aoSubmeterAnimal}>
					<h2> Preencha os dados para criar o card de animais</h2>
					<Campo
						obrigatorio
						label="Animal"
						placeholder="Digite o tipo de animal"
						value={animal}
						aoAlterado={valor => setAnimal(valor)}
					/>
					<Campo
						obrigatorio={true}
						label="Descrição"
						placeholder="Digite a descrição"
						value={desc}
						aoAlterado={valor => setDesc(valor)}
					/>
					<Campo
						obrigatorio
						label="Imagem"
						placeholder="Informe a url da imagem"
						value={imagem}
						aoAlterado={valor => setImagem(valor)}
					/>

					<ListaSuspensa
						obrigatorio
						label="Espécie"
						value={especie}
						aoAlterado={valor => setEspecie(valor)}
						items={classeAnimais}
					/>

					<Botao texto="Criar card do animal informado" />
				</form>

				<form className={styles.formulario} onSubmit={aoSubmeterEspecie}>
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
						value={corEspecie}
						aoAlterado={valor => setCorEspecie(valor)}
					/>
					<Botao texto="Criar nova seção para o animal" />
				</form>
			</section>
		</>
	);
};

export default Formulario;
