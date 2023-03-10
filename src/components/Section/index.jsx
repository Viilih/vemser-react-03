import './Section.css';
import { useState } from 'react';
import hexToRgba from 'hex-to-rgba';
import AnimalCard from '../Animais';

const Section = ({ animais, nome, cor, aoDeletar }) => {
	const [backgroundColor, setBackgroundColor] = useState(cor);

	const mudarCorBg = e => {
		setBackgroundColor(e.target.value);
	};

	const corDeFundo = hexToRgba(backgroundColor, 0.6);

	const sectionStyle = {
		backgroundColor: corDeFundo,
	};
	const titleStyle = {
		borderBottom: `4px solid ${backgroundColor}`,
	};

	return (
		animais.length > 0 && (
			<section className="section" style={sectionStyle}>
				<div className="upperContent">
					<h3 style={titleStyle}>{nome}</h3>
					<input
						type="color"
						value={backgroundColor}
						onChange={mudarCorBg}
						className="input-color"
					/>
				</div>
				<div className="animaisContainer">
					{animais.map((animal, index) => {
						return (
							<AnimalCard
								animal={animal}
								corCabecalho={backgroundColor}
								key={index}
								favorito={false}
								aoDeletar={aoDeletar}
							/>
						);
					})}
				</div>
			</section>
		)
	);
};

export default Section;
