import styles from './Botao.module.scss';

const Botao = ({ texto }) => {
	return (
		<>
			<button className={styles.botao}>{texto}</button>
		</>
	);
};

export default Botao;
