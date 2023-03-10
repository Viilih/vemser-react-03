import './Section.css';
import { useState } from 'react';
import hexToRgba from 'hex-to-rgba';
import AnimalCard from '../Animais';

const Section = ({ animais, nome, cor }) => {
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
	console.log(animais);
	return (
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
							nome={animal.nome}
							image={animal.imagem}
							desc={animal.desc}
							corCabecalho={backgroundColor}
							key={index}
							favorito={false}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Section;
