import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<>
			<footer>
				<div className={styles.footerDivIcon}>
					<a href="facebook.com">
						<img src="/imgs/facebook.png" alt="facebook logo" />
					</a>
					<a href="instagram.com">
						<img src="/imgs/instagram.png" alt="facebook logo" />
					</a>
					<a href="Twitter.com">
						<img src="/imgs/twitter.png" alt="facebook logo" />
					</a>
				</div>
				<div className={styles.footerDiv}>
					<span>Espécie & Animais</span>
				</div>
				<div className={styles.footerDiv}>Desenvolvido por @Viilih</div>
			</footer>
		</>
	);
};

export default Footer;
