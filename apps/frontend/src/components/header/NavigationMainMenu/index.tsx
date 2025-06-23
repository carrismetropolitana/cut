'use client';

/* * */

import { NavigationMainMenuItem } from '@/components/header/NavigationMainMenuItem';
import { NavigationGroup } from '@/types/navigation.types';
import { Menu, UnstyledButton } from '@mantine/core';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import styles from './styles.module.css';

/* * */

interface Props {
	navigationGroup: NavigationGroup
}

/* * */

export function NavigationMainMenu({ navigationGroup }: Props) {
	//

	//
	// A. Setup variables

	const t = useTranslations('settings.navigation');

	const [isOpen, setIsOpen] = useState(false);

	//
	// B. Render components

	return (
		<Menu
			classNames={{ dropdown: styles.menuDropdown }}
			loop={false}
			menuItemTabIndex={0}
			offset={0}
			onChange={setIsOpen}
			opened={isOpen}
			position="bottom-start"
			trigger="click-hover"
			withinPortal={false}
		>
			<Menu.Target>
				<UnstyledButton classNames={{ root: `${styles.menuItemTarget} ${isOpen && styles.isOpen}` }}>{t(`${navigationGroup._id}.label`)}</UnstyledButton>
			</Menu.Target>
			<Menu.Dropdown>
				{navigationGroup.links.map(link => (
					<NavigationMainMenuItem
						key={link._id}
						href={link.href}
						icon={link.icon}
						label={t(`${navigationGroup._id}.links.${link._id}`)}
						target={link.target}
					/>
				))}
			</Menu.Dropdown>
		</Menu>
	);

	//
}
