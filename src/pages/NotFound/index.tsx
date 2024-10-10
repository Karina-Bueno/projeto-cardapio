import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/Imagens para o vídeo Criando o NotFound/not_found.svg';
import className from 'classnames';
import stylesTema from 'styles/Tema.module.scss';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<div className={className({
			[styles.container]: true,
			[stylesTema.container]: true
		})}
		>
			<div className={styles.voltar}>
				<button onClick={() => navigate (-1)}> {/* efeito de voltar uma página*/}
					{'< Voltar'}
				</button>
			</div>
			<NotFoundImage />
		</div>
	);
}