import { useState } from 'react';
import './assets/Global.module.scss';
import './index.css';
import Banner from './components/Banner';
import Footer from './components/Rodape';
import Formulario from './components/Formulario';
import Animais from './components/Animais';
import Section from './components/Section';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [classeAnimais, setClasseAnimais] = useState([
		{
			id: uuidv4(),
			nome: 'Mamíferos',
			cor: '#57C278',
		},
		{
			id: uuidv4(),
			nome: 'Aves',
			cor: '#82CFFA',
		},
		{
			id: uuidv4(),
			nome: 'Peixes',
			cor: '#A6D157',
		},
		{
			id: uuidv4(),
			nome: 'Anfíbios',
			cor: '#E06B69',
		},
		{
			id: uuidv4(),
			nome: 'Répteis',
			cor: '#DB6EBF',
		},
		{
			id: uuidv4(),
			nome: 'Equinodermos',
			cor: '#FFBA05',
		},
	]);

	function createEspecie({ nome, cor, id }) {
		setClasseAnimais([...classeAnimais, { nome, cor, id }]);
	}

	const [animais, setAnimais] = useState([
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Gato/Felino - Maine Coon',
			desc: 'Maine Coon é uma raça de gato originária do nordeste dos Estados Unidos.',
			imagem: 'https://mega.ibxk.com.br/2016/08/23/23184723908456.jpg?ims=610x',
			especie: classeAnimais[0].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Cachorro/Canino - Dachshund',
			desc: 'Dachshund ou teckel, também apelidado de cão-salsicha, é uma raça de cães oriunda da Alemanha.',
			imagem:
				'https://www.petz.com.br/cachorro/racas/dachshund/img/dachshund-guia-racas.webp',
			especie: classeAnimais[0].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Lobo - Canino',
			desc: 'É parente bem próximo do cão doméstico e acredita-se que este tenha se originado através da domesticação de lobos cinzentos. ',
			imagem:
				'	https://www.infoescola.com/wp-content/uploads/2008/05/lobo-360x450.jpg',
			especie: classeAnimais[0].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Raposa - Canino',
			desc: 'A raposa tem uma aparência que lembra os cachorros de estimação. Alguns tipos podem apresentar um perigo para o ser humano é necessário ficar um pouco distante para a sua própria proteção.',
			imagem:
				'http://4.bp.blogspot.com/-JW33BOQRVpE/UwxXYVpmXFI/AAAAAAAAA9M/aF_a4vKcf3U/s1600/Feneco+II.jpg',
			especie: classeAnimais[0].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Gato/Felino - Maine Coon',
			desc: 'Maine Coon é uma raça de gato originária do nordeste dos Estados Unidos.',
			imagem: 'https://mega.ibxk.com.br/2016/08/23/23184723908456.jpg?ims=610x',
			especie: classeAnimais[1].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Cachorro/Canino - Dachshund',
			desc: 'Dachshund ou teckel, também apelidado de cão-salsicha, é uma raça de cães oriunda da Alemanha.',
			imagem:
				'https://www.petz.com.br/cachorro/racas/dachshund/img/dachshund-guia-racas.webp',
			especie: classeAnimais[1].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Lobo - Canino',
			desc: 'É parente bem próximo do cão doméstico e acredita-se que este tenha se originado através da domesticação de lobos cinzentos. ',
			imagem:
				'	https://www.infoescola.com/wp-content/uploads/2008/05/lobo-360x450.jpg',
			especie: classeAnimais[1].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Raposa - Canino',
			desc: 'A raposa tem uma aparência que lembra os cachorros de estimação. Alguns tipos podem apresentar um perigo para o ser humano é necessário ficar um pouco distante para a sua própria proteção.',
			imagem:
				'http://4.bp.blogspot.com/-JW33BOQRVpE/UwxXYVpmXFI/AAAAAAAAA9M/aF_a4vKcf3U/s1600/Feneco+II.jpg',
			especie: classeAnimais[1].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Cavalo Marinho',
			desc: 'São peixes ósseos do gênero Hippocampus são cheios de peculiaridades: além da morfologia irreverente, recordando um cavalo, as espécies deste gênero apresentam cuidado parental realizado pelo macho, que carrega em sua bolsa incubadora os ovos fecundados.',
			imagem:
				'https://www.infoescola.com/wp-content/uploads/2008/05/cavalo-marinho-109485932-480x600.jpg',
			especie: classeAnimais[2].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Kinguio Telescópio',
			desc: 'O kinguio telescópio é conhecido como peixe-telescópio ou peixe dragão. Sua origem é chinesa, mas também foi uma espécie bastante desenvolvida no Japão por meio de várias técnicas de reprodução. Atualmente, o Japão conta com 30 variedades de kinguio.',
			imagem:
				'https://pm1.narvii.com/6981/23b83440a31458e3bb1ff84115249a4f6c225bccr1-427-640v2_hq.jpg',
			especie: classeAnimais[2].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Polvo',
			desc: 'Os polvos são moluscos da classe Cephalopoda. Esses animais destacam-se por sua forma peculiar e por apresentar incríveis meios de defesa. Estima-se que existam, no mínimo, 100 espécies diferentes de polvos.',
			imagem:
				'https://img.freepik.com/fotos-premium/um-polvo-gigante-do-oceano-ilustracoes-3d_533101-92.jpg?w=2000',
			especie: classeAnimais[2].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Tubarão',
			desc: 'Tubarão-branco é uma espécie de tubarão lamniforme. Trata-se do maior peixe predador existente nos oceanos. Os tubarões brancos são bem conhecidos por seu tamanho e fama de assassino.',
			imagem:
				'https://i.pinimg.com/564x/dc/33/35/dc33359eca7e0fb321d52800bfcfa14f--shark-jaws-sharks.jpg',
			especie: classeAnimais[2].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Gato/Felino - Maine Coon',
			desc: 'Maine Coon é uma raça de gato originária do nordeste dos Estados Unidos.',
			imagem: 'https://mega.ibxk.com.br/2016/08/23/23184723908456.jpg?ims=610x',
			especie: classeAnimais[3].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Cachorro/Canino - Dachshund',
			desc: 'Dachshund ou teckel, também apelidado de cão-salsicha, é uma raça de cães oriunda da Alemanha.',
			imagem:
				'https://www.petz.com.br/cachorro/racas/dachshund/img/dachshund-guia-racas.webp',
			especie: classeAnimais[3].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Lobo - Canino',
			desc: 'É parente bem próximo do cão doméstico e acredita-se que este tenha se originado através da domesticação de lobos cinzentos. ',
			imagem:
				'	https://www.infoescola.com/wp-content/uploads/2008/05/lobo-360x450.jpg',
			especie: classeAnimais[3].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Raposa - Canino',
			desc: 'A raposa tem uma aparência que lembra os cachorros de estimação. Alguns tipos podem apresentar um perigo para o ser humano é necessário ficar um pouco distante para a sua própria proteção.',
			imagem:
				'http://4.bp.blogspot.com/-JW33BOQRVpE/UwxXYVpmXFI/AAAAAAAAA9M/aF_a4vKcf3U/s1600/Feneco+II.jpg',
			especie: classeAnimais[3].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Gato/Felino - Maine Coon',
			desc: 'Maine Coon é uma raça de gato originária do nordeste dos Estados Unidos.',
			imagem: 'https://mega.ibxk.com.br/2016/08/23/23184723908456.jpg?ims=610x',
			especie: classeAnimais[4].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Cachorro/Canino - Dachshund',
			desc: 'Dachshund ou teckel, também apelidado de cão-salsicha, é uma raça de cães oriunda da Alemanha.',
			imagem:
				'https://www.petz.com.br/cachorro/racas/dachshund/img/dachshund-guia-racas.webp',
			especie: classeAnimais[4].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Lobo - Canino',
			desc: 'É parente bem próximo do cão doméstico e acredita-se que este tenha se originado através da domesticação de lobos cinzentos. ',
			imagem:
				'	https://www.infoescola.com/wp-content/uploads/2008/05/lobo-360x450.jpg',
			especie: classeAnimais[4].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Raposa - Canino',
			desc: 'A raposa tem uma aparência que lembra os cachorros de estimação. Alguns tipos podem apresentar um perigo para o ser humano é necessário ficar um pouco distante para a sua própria proteção.',
			imagem:
				'http://4.bp.blogspot.com/-JW33BOQRVpE/UwxXYVpmXFI/AAAAAAAAA9M/aF_a4vKcf3U/s1600/Feneco+II.jpg',
			especie: classeAnimais[4].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Gato/Felino - Maine Coon',
			desc: 'Maine Coon é uma raça de gato originária do nordeste dos Estados Unidos.',
			imagem: 'https://mega.ibxk.com.br/2016/08/23/23184723908456.jpg?ims=610x',
			especie: classeAnimais[5].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Cachorro/Canino - Dachshund',
			desc: 'Dachshund ou teckel, também apelidado de cão-salsicha, é uma raça de cães oriunda da Alemanha.',
			imagem:
				'https://www.petz.com.br/cachorro/racas/dachshund/img/dachshund-guia-racas.webp',
			especie: classeAnimais[5].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Lobo - Canino',
			desc: 'É parente bem próximo do cão doméstico e acredita-se que este tenha se originado através da domesticação de lobos cinzentos. ',
			imagem:
				'	https://www.infoescola.com/wp-content/uploads/2008/05/lobo-360x450.jpg',
			especie: classeAnimais[5].nome,
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Raposa - Canino',
			desc: 'A raposa tem uma aparência que lembra os cachorros de estimação. Alguns tipos podem apresentar um perigo para o ser humano é necessário ficar um pouco distante para a sua própria proteção.',
			imagem:
				'http://4.bp.blogspot.com/-JW33BOQRVpE/UwxXYVpmXFI/AAAAAAAAA9M/aF_a4vKcf3U/s1600/Feneco+II.jpg',
			especie: classeAnimais[5].nome,
		},
	]);

	function createCardAnimal({ id, favorito, nome, desc, imagem, especie }) {
		setAnimais([...animais, { id, favorito, nome, desc, imagem, especie }]);
	}

	function removerAnimal(id) {
		setAnimais(animais.filter(animal => animal.id !== id));
	}

	return (
		<div>
			<Banner />
			{/* O array de objetos animais é mapeado para retornar um array com apenas os
			nomes dos animais que é uma prop a ser utilizada na função Formulario, que
			posteriormente será utilizada em ListaSuspensa --> Hierarquia props */}
			<Formulario
				aoCadastrarAnimal={createCardAnimal}
				classeAnimais={classeAnimais.map(classeAnimal => {
					return classeAnimal.nome;
				})}
				aoCadastrarEspecie={createEspecie}
			/>

			<section className="especie-section">
				{classeAnimais.map(classe => (
					<Section
						nome={classe.nome}
						cor={classe.cor}
						key={classe.id}
						animais={animais.filter(animal => {
							return animal.especie === classe.nome;
						})}
						aoDeletar={removerAnimal}
					/>
				))}
			</section>
			<Footer />
		</div>
	);
}

export default App;
