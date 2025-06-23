/* * */

import styles from './styles.module.css';

/* * */

export default function Component() {
	return (
		<iframe
			className={styles.iframe}
			src="https://backoffice.carrismetropolitana.pt/formulario-embed/"
			title="Formulário de contacto"
		/>
	);
}
