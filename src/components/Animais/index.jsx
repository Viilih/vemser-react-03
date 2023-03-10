import './animais.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';

const Animais = ({ favorito, nome, desc, image, corCabecalho }) => {
	const cabecalhoCor = { backgroundColor: corCabecalho };
	const [favoritado, setFavoritado] = useState(favorito);

	function trocarFavorito() {
		setFavoritado(!favoritado);
	}

	const deleteCard = () => {};

	return (
		<div className="animal">
			<div className="cabecalho" style={cabecalhoCor}>
				<AiFillCloseCircle className="deleteCard" />
				<img src={image} alt={nome} />
			</div>
			<div className="rodape">
				<h4>{nome}</h4>
				<h5>{desc}</h5>
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
