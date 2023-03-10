import styles from './Lista.module.scss';

const ListaSuspensa = ({ label, valor, aoAlterado, items, obrigatorio }) => {
	return (
		<div className={styles.ListaSuspensa}>
			<label className={styles.label}>{label}</label>
			<select
				className={styles.select}
				required={obrigatorio}
				value={valor}
				onChange={e => aoAlterado(e.target.value)}
			>
				{/* Opção vazia */}
				<option />
				{/* Opção vazia */}

				{/* Para o array de opções recebido, ele cria um option para cada item do array */}
				{items.map((item, index) => (
					<option key={index}>{item}</option>
				))}
			</select>
		</div>
	);
};

export default ListaSuspensa;
