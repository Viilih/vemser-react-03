import './animais.css';

const Animais = ({ nome, raca, imagem, especie, desc }) => {
	return (
		<div className="animal">
			<div className="cabecalho">
				<img src={imagem} alt={nome} />
			</div>
			<div className="rodape">
				<h4>{nome}</h4>
				<h5>{desc}</h5>
			</div>
		</div>
	);
};

export default Animais;
