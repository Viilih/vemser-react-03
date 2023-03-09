import styles from './Banner.module.scss';

const Banner = () => {
	return (
		<>
			<header className={styles.cabecalho}>
				<img src="/imgs/banner.png" alt="Texto banner" />
			</header>
		</>
	);
};

export default Banner;
