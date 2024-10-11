import cardapio from 'data/cardapio.json';
import styles from './inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/Imagens para o vídeo Terminando a tela Início/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

export default function Inicio() {
	let pratosRecomendados = [...cardapio];
	pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);

	const navigate = useNavigate();

	function redirecionarParaDetalhes(prato: Prato) {
		navigate('/prato/${prato.id}', { state: { prato }, replace: true });
	}

	return (
		<section>
			<h3 className={styles.titulo}>
				Recomendações da cozinha
			</h3>
			<div className={styles.recomendados}>
				{pratosRecomendados.map(item => (
					<div key={item.id} className={styles.recomendado}>
						<div className={styles.recomendado__imagem}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button className={styles.recomendado__botao}
							onClick={() => redirecionarParaDetalhes(item)}>
							Ver mais
						</button>
					</div>
				))}
			</div>
			<h3 className={stylesTema.titulo}>Nossa casa</h3>
			<div className={styles.nossaCasa}>
				<img src={nossaCasa} alt="Casa do aluroni" />
				<div className={styles.nossaCasa__endereco}>
					Rua Vergueiro, 3185 <br /> <br /> Vila Marina - SP
				</div>
			</div>
		</section>
	);
}