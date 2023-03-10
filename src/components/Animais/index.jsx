import './animais.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';

const Animais = ({ animal, corCabecalho, favorito, aoDeletar }) => {
	const cabecalhoCor = { backgroundColor: corCabecalho };
	const [favoritado, setFavoritado] = useState(favorito);

	function trocarFavorito() {
		setFavoritado(!favoritado);
	}

	return (
		<div className="animal">
			<div className="cabecalho" style={cabecalhoCor}>
				<AiFillCloseCircle
					className="deleteCard"
					onClick={() => aoDeletar(animal.id)}
				/>
				<img src={animal.imagem} alt={animal.nome} />
			</div>
			<div className="rodape">
				<h4>{animal.nome}</h4>
				<h5>{animal.desc}</h5>
				<div className="fav">
					{favoritado ? (
						<AiFillHeart
							className="heart"
							onClick={trocarFavorito}
							style={{ color: 'red' }}
						/>
					) : (
						<AiOutlineHeart className="heart" onClick={trocarFavorito} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Animais;
