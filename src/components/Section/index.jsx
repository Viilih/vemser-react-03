const Section = ({ nome, cor }) => {
	return (
		<section className={`section-${cor}`}>
			<h3>{nome}</h3>
			<input type="color" value={cor} />
		</section>
	);
};

export default Section;
