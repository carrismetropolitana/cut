/* * */

import { balloonsAssets } from '@/components/festive/Balloons/balloons-assets';

/* * */

const easings = [
	// easeOutQuint
	'cubic-bezier(0.22, 1, 0.36, 1)',
	// easeOutCubic
	'cubic-bezier(0.33, 1, 0.68, 1)',
];

export const balloonDefaultSize = {
	height: 750,
	width: 300,
};

/* * */

export const createBallonElement = () => {
	if (typeof window === 'undefined') return;
	const balloon = window.document.createElement('balloon');
	// Choose a random balloon asset
	balloon.innerHTML = balloonsAssets[Math.floor(Math.random() * balloonsAssets.length)] || balloonsAssets[0];
	Object.assign(balloon.style, {
		backfaceVisibility: 'hidden',
		contain: 'style, layout, paint',
		display: 'inline-block',
		isolation: 'isolate',
		left: '0',
		opacity: '0.001',
		overflow: 'hidden',
		position: 'absolute',
		top: '0',
		transform: 'translate(calc(-100% + 1px), calc(-100% + 1px))',
		transformOrigin: `${balloonDefaultSize.width / 2}px ${balloonDefaultSize.height / 2}px`,
		transformStyle: 'preserve-3d',
		willChange: 'transform', // Improves rendering performance in Safari
	});
	return balloon;
};

/* * */

function createBalloonAnimation({ balloon, targetX, targetY, targetZ, x, y, z, zIndex }: { balloon: HTMLElement, targetX: number, targetY: number, targetZ: number, x: number, y: number, z: number, zIndex: number }) {
	balloon.style.zIndex = zIndex.toString();
	// Add blur to the closes ballons for bokeh effect
	balloon.style.filter = `blur(${zIndex > 7 ? 8 : 0}px)`;
	const getAnimation = () => {
		const tiltAngle = Math.random() * (15 - 8) + 8; // Random tilt angle between 8 and 15 degrees
		const tiltDirection = Math.random() < 0.5 ? 1 : -1; // Random tilt direction
		return balloon.animate(
			[
				{
					opacity: 1,
					transform: `translate(-50%, 0%) translate3d(${x}px, ${y}px, ${z}px) rotate3d(0, 0, 1, ${
						tiltDirection * -tiltAngle
					}deg)`,
				},
				{
					offset: 0.5,
					opacity: 1,
					transform: `translate(-50%, 0%) translate3d(${
						x + (targetX - x) / 2
					}px, ${y + (y + targetY * 5 - y) / 2}px, ${
						z + (targetZ - z) / 2
					}px) rotate3d(0, 0, 1, ${tiltDirection * tiltAngle}deg)`,
				},
				{
					opacity: 1,
					transform: `translate(-50%, 0%) translate3d(${targetX}px, ${
						y + targetY * 5
					}px, ${targetZ}px) rotate3d(0, 0, 1, ${
						tiltDirection * -tiltAngle
					}deg)`,
				},
			],
			{
				delay: zIndex * 200,
				duration: (Math.random() * 1000 + 5000) * 5,
				easing: easings[Math.floor(Math.random() * easings.length)],
			},
		);
	};
	return { balloon, getAnimation };
}

/* * */

export function balloons(): Promise<void> {
	return new Promise((resolve) => {
		if (typeof window === 'undefined') return;
		const balloonsContainer = window.document.createElement('balloons');
		Object.assign(balloonsContainer.style, {
			contain: 'style, layout, paint',
			display: 'inline-block',
			inset: '0',
			overflow: 'hidden',
			perspective: '1500px',
			perspectiveOrigin: '50vw 100vh',
			pointerEvents: 'none',
			position: 'fixed',
			zIndex: '999',
		});

		window.document.documentElement.appendChild(balloonsContainer);

		const sceneSize = { height: window.innerHeight, width: window.innerWidth };
		// make balloon height relative to screen size for this nice bokeh/perspective effect
		const balloonHeight = Math.floor(
			Math.min(sceneSize.width, sceneSize.height) * 1,
		);

		const balloonWidth
      = (balloonDefaultSize.width / balloonDefaultSize.height) * balloonHeight;
		const amount = Math.max(
			7,
			Math.round(window.innerWidth / (balloonWidth / 2)),
		);
		// make max dist depend on number of balloons and their size for realistic effect
		// we dont want them to be too separated or too squeezed together
		const maxDist = Math.max(
			(amount * balloonWidth) / 2,
			(balloonWidth / 2) * 10,
		);

		interface BallonPosition {
			targetX: number
			targetY: number
			targetZ: number
			x: number
			y: number
			z: number
		}

		let balloonPositions: BallonPosition[] = [];

		for (let i = 0; i < amount; i++) {
			const x = Math.round(sceneSize.width * Math.random());
			// make sure balloons first render below the bottom of the screen
			const y = window.innerHeight;
			const z = Math.round(-1 * (Math.random() * maxDist));

			const targetX = Math.round(
				x + Math.random() * balloonWidth * 6 * (Math.random() > 0.5 ? 1 : -1),
			);
			const targetY = -window.innerHeight;
			// balloons don't move in the Z direction
			const targetZ = z;
			balloonPositions.push({
				targetX,
				targetY,
				targetZ,
				x,
				y,
				z,
			});
		}

		balloonPositions = balloonPositions.sort((a, b) => a.z - b.z);
		const closestBallonPosition = balloonPositions[balloonPositions.length - 1];
		balloonPositions = balloonPositions.map(pos => ({
			...pos,
			targetZ: pos.z - closestBallonPosition.z,
			z: pos.z - closestBallonPosition.z,
		}));

		const filtersElement = window.document.createElement('div');
		// filtersElement.innerHTML = svgFiltersHtml;
		balloonsContainer.appendChild(filtersElement);

		let currentZIndex = 1;

		const animations = balloonPositions.map((pos) => {
			const balloon = createBallonElement();
			balloonsContainer.appendChild(balloon);
			return createBalloonAnimation({
				balloon,
				...pos,
				zIndex: currentZIndex++,
			});
		});

		// Wait a bit for the balloon prerender
		requestAnimationFrame(() => {
			const animationPromises = animations.map(({ balloon, getAnimation }) => {
				const a = getAnimation();
				return a.finished.then(() => {
					balloon.remove();
				});
			});

			Promise.all(animationPromises).then(() => {
				balloonsContainer.remove();
				resolve();
			});
		});
	});
}
