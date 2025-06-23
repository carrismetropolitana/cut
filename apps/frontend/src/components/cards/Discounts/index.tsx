/* * */

import { Surface } from '@/components/layout/Surface';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import styles from './styles.module.css';

/* * */

export function Discounts() {
	//

	//
	// A. Setup variables

	const t = useTranslations('cards.Discounts');

	//
	// B. Render components

	// <div className={styles.pricing}>
	// 	<div className={styles.pricingItem}>
	// 		{discount.price_metropolitano === 0 && <h3 className={styles.priceValue}>{t('price_labels.free')}</h3>}
	// 		{discount.price_metropolitano > 0 && <h3 className={styles.priceValue}>{t('price_labels.price', { value: discount.price_metropolitano })}</h3>}
	// 		<p className={styles.priceLabel}>{t('pass_types.metropolitano')}</p>
	// 		{discount._id === 'family' && <p className={styles.priceLabel}>{t('pass_types.family')}</p>}
	// 	</div>
	// 	<div className={styles.pricingItem}>
	// 		{discount.price_municipal === undefined && <h3 className={`${styles.priceValue} ${styles.none}`}>{t('price_labels.none')}</h3>}
	// 		{discount.price_municipal !== undefined && discount.price_municipal === 0 && <h3 className={styles.priceValue}>{t('price_labels.free')}</h3>}
	// 		{discount.price_municipal !== undefined && discount.price_municipal > 0 && <h3 className={styles.priceValue}>{t('price_labels.price', { value: discount.price_municipal })}</h3>}
	// 		<p className={`${styles.priceLabel} ${discount.price_municipal === undefined && styles.none}`}>{t('pass_types.municipal')}</p>
	// 		{discount._id === 'family' && <p className={styles.priceLabel}>{t('pass_types.family')}</p>}
	// 	</div>
	// </div>

	return (
		<>

			<Surface variant="persistent">
				<div className={styles.container}>
					<div className={styles.info}>
						<h3 className={styles.title}>{t('products.normal.title')}</h3>
						<p className={styles.description}>{t('products.normal.description')}</p>
					</div>
					<div className={styles.pricing}>
						<div className={styles.pricingItem}>
							<h3 className={styles.priceValue}>{t('price_labels.price', { value: 40 })}</h3>
							<p className={styles.priceLabel}>{t('pass_types.metropolitano')}</p>
						</div>
						<div className={styles.pricingItem}>
							<h3 className={styles.priceValue}>{t('price_labels.price', { value: 30 })}</h3>
							<p className={styles.priceLabel}>{t('pass_types.municipal')}</p>
						</div>
					</div>
				</div>
			</Surface>

			<Surface variant="persistent">
				<div className={styles.container}>
					<div className={styles.info}>
						<h3 className={styles.title}>{t('products.sub23.title')}</h3>
						<p className={styles.description}>{t('products.sub23.description')}</p>
						<Link className={styles.href} href="https://www.navegante.pt/viajar/descontos#:~:text=consumo%20de%20energia.-,Gratuitidade%20para%20jovens%20estudantes,-Os%20jovens%20estudantes" target="_blank">{t('products.sub23.href_label')}</Link>
					</div>
					<div className={styles.pricing}>
						<div className={styles.pricingItem}>
							<h3 className={styles.priceValue}>{t('price_labels.free')}</h3>
							<p className={styles.priceLabel}>{t('pass_types.metropolitano')}</p>
						</div>
						<div className={styles.pricingItem}>
							<h3 className={`${styles.priceValue} ${styles.none}`}>{t('price_labels.none')}</h3>
							<p className={styles.none}>{t('pass_types.municipal')}</p>
						</div>
					</div>
				</div>
			</Surface>

			<Surface variant="persistent">
				<div className={styles.container}>
					<div className={styles.info}>
						<h3 className={styles.title}>{t('products.circula-pt-a.title')}</h3>
						<p className={styles.description}>{t('products.circula-pt-a.description')}</p>
						<Link className={styles.href} href="https://www.navegante.pt/viajar/descontos#:~:text=navegante%C2%AE%20fam%C3%ADlia-,Circula%20PT%20(anterior%20Social%20%2B),-O%20Circula%20PT" target="_blank">{t('products.circula-pt-a.href_label')}</Link>
					</div>
					<div className={styles.pricing}>
						<div className={styles.pricingItem}>
							<h3 className={styles.priceValue}>{t('price_labels.price', { value: 20 })}</h3>
							<p className={styles.priceLabel}>{t('pass_types.metropolitano')}</p>
						</div>
						<div className={styles.pricingItem}>
							<h3 className={styles.priceValue}>{t('price_labels.price', { value: 15 })}</h3>
							<p className={styles.priceLabel}>{t('pass_types.municipal')}</p>
						</div>
					</div>
				</div>
			</Surface>

			<Surface variant="persistent">
				<div className={styles.container}>
					<div className={styles.info}>
						<h3 className={styles.title}>{t('products.circula-pt-b.title')}</h3>
						<p className={styles.description}>{t('products.circula-pt-b.description')}</p>
						<Link className={styles.href} href="https://www.navegante.pt/viajar/descontos#:~:text=navegante%C2%AE%20fam%C3%ADlia-,Circula%20PT%20(anterior%20Social%20%2B),-O%20Circula%20PT" target="_blank">{t('products.circula-pt-b.href_label')}</Link>
					</div>
					<div className={styles.pricing}>
						<div className={styles.pricingItem}>
							<h3 className={styles.priceValue}>{t('price_labels.price', { value: 30 })}</h3>
							<p className={styles.priceLabel}>{t('pass_types.metropolitano')}</p>
						</div>
						<div className={styles.pricingItem}>
							<h3 className={styles.priceValue}>{t('price_labels.price', { value: 22.5 })}</h3>
							<p className={styles.priceLabel}>{t('pass_types.municipal')}</p>
						</div>
					</div>
				</div>
			</Surface>

			<Surface variant="persistent">
				<div className={styles.container}>
					<div className={styles.info}>
						<h3 className={styles.title}>{t('products.plus-65.title')}</h3>
						<p className={styles.description}>{t('products.plus-65.description')}</p>
						<Link className={styles.href} href="https://www.navegante.pt/viajar/descontos#:~:text=operadores%20de%20transporte.-,%2B65%20anos%20e%20RP,-Se%20tem%20mais" target="_blank">{t('products.plus-65.href_label')}</Link>
					</div>
					<div className={styles.pricing}>
						<div className={styles.pricingItem}>
							<h3 className={styles.priceValue}>{t('price_labels.price', { value: 20 })}</h3>
							<p className={styles.priceLabel}>{t('pass_types.metropolitano')}</p>
						</div>
						<div className={styles.pricingItem}>
							<h3 className={`${styles.priceValue} ${styles.none}`}>{t('price_labels.none')}</h3>
							<p className={styles.none}>{t('pass_types.municipal')}</p>
						</div>
					</div>
				</div>
			</Surface>

			<Surface variant="persistent">
				<div className={styles.container}>
					<div className={styles.info}>
						<h3 className={styles.title}>{t('products.circula-pt-plus-65-a.title')}</h3>
						<p className={styles.description}>{t('products.circula-pt-plus-65-a.description')}</p>
						<Link className={styles.href} href="https://www.navegante.pt/viajar/descontos#:~:text=operadores%20de%20transporte.-,%2B65%20anos%20e%20RP,-Se%20tem%20mais" target="_blank">{t('products.circula-pt-plus-65-a.href_label')}</Link>
					</div>
					<div className={styles.pricing}>
						<div className={styles.pricingItem}>
							<h3 className={styles.priceValue}>{t('price_labels.price', { value: 10 })}</h3>
							<p className={styles.priceLabel}>{t('pass_types.metropolitano')}</p>
						</div>
						<div className={styles.pricingItem}>
							<h3 className={`${styles.priceValue} ${styles.none}`}>{t('price_labels.none')}</h3>
							<p className={styles.none}>{t('pass_types.municipal')}</p>
						</div>
					</div>
				</div>
			</Surface>

			<Surface variant="persistent">
				<div className={styles.container}>
					<div className={styles.info}>
						<h3 className={styles.title}>{t('products.circula-pt-plus-65-b.title')}</h3>
						<p className={styles.description}>{t('products.circula-pt-plus-65-b.description')}</p>
						<Link className={styles.href} href="https://www.navegante.pt/viajar/descontos#:~:text=operadores%20de%20transporte.-,%2B65%20anos%20e%20RP,-Se%20tem%20mais" target="_blank">{t('products.circula-pt-plus-65-b.href_label')}</Link>
					</div>
					<div className={styles.pricing}>
						<div className={styles.pricingItem}>
							<h3 className={styles.priceValue}>{t('price_labels.price', { value: 15 })}</h3>
							<p className={styles.priceLabel}>{t('pass_types.metropolitano')}</p>
						</div>
						<div className={styles.pricingItem}>
							<h3 className={`${styles.priceValue} ${styles.none}`}>{t('price_labels.none')}</h3>
							<p className={styles.none}>{t('pass_types.municipal')}</p>
						</div>
					</div>
				</div>
			</Surface>

			<Surface variant="persistent">
				<div className={styles.container}>
					<div className={styles.info}>
						<h3 className={styles.title}>{t('products.combatente-plus-65.title')}</h3>
						<p className={styles.description}>{t('products.combatente-plus-65.description')}</p>
						<Link className={styles.href} href="https://www.navegante.pt/viajar/descontos#:~:text=operadores%20de%20transporte.-,%2B65%20anos%20e%20RP,-Se%20tem%20mais" target="_blank">{t('products.combatente-plus-65.href_label')}</Link>
					</div>
					<div className={styles.pricing}>
						<div className={styles.pricingItem}>
							<h3 className={styles.priceValue}>{t('price_labels.free')}</h3>
							<p className={styles.priceLabel}>{t('pass_types.metropolitano')}</p>
						</div>
						<div className={styles.pricingItem}>
							<h3 className={`${styles.priceValue} ${styles.none}`}>{t('price_labels.none')}</h3>
							<p className={styles.none}>{t('pass_types.municipal')}</p>
						</div>
					</div>
				</div>
			</Surface>

			<Surface variant="persistent">
				<div className={styles.container}>
					<div className={styles.info}>
						<h3 className={styles.title}>{t('products.combatente-minus-65.title')}</h3>
						<p className={styles.description}>{t('products.combatente-minus-65.description')}</p>
						<Link className={styles.href} href="https://www.navegante.pt/viajar/descontos#:~:text=operadores%20de%20transporte.-,%2B65%20anos%20e%20RP,-Se%20tem%20mais" target="_blank">{t('products.combatente-minus-65.href_label')}</Link>
					</div>
					<div className={styles.pricing}>
						<div className={styles.pricingItem}>
							<h3 className={styles.priceValue}>{t('price_labels.price', { value: 10 })}</h3>
							<p className={styles.priceLabel}>{t('pass_types.metropolitano')}</p>
						</div>
						<div className={styles.pricingItem}>
							<h3 className={styles.priceValue}>{t('price_labels.free')}</h3>
							<p className={styles.priceLabel}>{t('pass_types.municipal')}</p>
						</div>
					</div>
				</div>
			</Surface>

			<Surface variant="persistent">
				<div className={styles.container}>
					<div className={styles.info}>
						<h3 className={styles.title}>{t('products.family.title')}</h3>
						<p className={styles.description}>{t('products.family.description')}</p>
						<Link className={styles.href} href="https://www.navegante.pt/viajar/descontos#:~:text=operadores%20de%20transporte.-,%2B65%20anos%20e%20RP,-Se%20tem%20mais" target="_blank">{t('products.family.href_label')}</Link>
					</div>
					<div className={styles.pricing}>
						<div className={styles.pricingItem}>
							<h3 className={styles.priceValue}>{t('price_labels.price', { value: 80 })}</h3>
							<p className={styles.priceLabel}>{t('pass_types.metropolitano')}</p>
							<p className={styles.priceLabel}>{t('pass_types.family')}</p>
						</div>
						<div className={styles.pricingItem}>
							<h3 className={styles.priceValue}>{t('price_labels.price', { value: 60 })}</h3>
							<p className={styles.priceLabel}>{t('pass_types.municipal')}</p>
							<p className={styles.priceLabel}>{t('pass_types.family')}</p>
						</div>
					</div>
				</div>
			</Surface>

			<Surface variant="persistent">
				<div className={styles.container}>
					<div className={styles.info}>
						<h3 className={styles.title}>{t('products.complement.title')}</h3>
						<p className={styles.description}>{t('products.complement.description')}</p>
					</div>
					<div className={styles.pricing}>
						<div className={styles.pricingItem}>
							<h3 className={styles.priceValue}>{t('price_labels.price', { value: 20 })}</h3>
						</div>
					</div>
				</div>
			</Surface>

		</>
	);

	//
}
