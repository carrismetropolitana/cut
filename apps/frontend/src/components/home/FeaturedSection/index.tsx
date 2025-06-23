/* * */

import FeaturedSectionCard from '@/components/home/FeaturedSectionCard';
import { Grid } from '@/components/layout/Grid';
import { Section } from '@/components/layout/Section';
import { Surface } from '@/components/layout/Surface';

/* * */

export function FeaturedSection() {
	return (
		<Surface>
			<Section heading="Destaques" withPadding>
				<Grid columns="abc" withGap>
					<FeaturedSectionCard coverImageSrc="/assets/home/drivers.png" href="https://backoffice.carrismetropolitana.pt/motoristas/" title="Recrutamento" />
					<FeaturedSectionCard coverImageSrc="/assets/home/loures.png" href="https://carrismetropolitana.pt/news/19913" title="Estudo de Caso" />
					<FeaturedSectionCard coverImageSrc="/assets/home/participe.png" href="https://backoffice.carrismetropolitana.pt/participe" title="Participe" />
				</Grid>
			</Section>
		</Surface>
	);
}
