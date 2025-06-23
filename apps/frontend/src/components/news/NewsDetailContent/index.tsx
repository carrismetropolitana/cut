'use client';

/* * */

import { useEffect } from 'react';

import styles from './styles.module.css';

/* * */

export function NewsDetailContent({ content }: { content: string }) {
	//

	//
	// A. Transform data

	useEffect(() => {
		// Remove unecessary Wordpress HTML
		document.querySelectorAll('#news-content-wrapper .wp-block-spacer').forEach(el => el.remove());
		// Select all img elements that are descendants of the specified class
		document.querySelectorAll(`#news-content-wrapper img`).forEach((el) => {
			el.removeAttribute('style');
			el.removeAttribute('width');
			el.removeAttribute('height');
			el.removeAttribute('sizes');
		});
		// Select all marks with yellow background
		document.querySelectorAll(`#news-content-wrapper mark`).forEach((el) => {
			const currentBackgroundColor = getComputedStyle(el).backgroundColor;
			if (currentBackgroundColor === '#ffdd00' || currentBackgroundColor === 'rgb(255, 221, 0)') {
				el.classList.add('override-mark-highlight');
			}
		});
	});

	//
	// B. Render components

	return (
		<div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} id="news-content-wrapper" />
	);

	//
}
