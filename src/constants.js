const BREAKPOINTS = {
	laptopMax: 1500, // 93.75rem
	tabletMax: 1120, // 70rem
	mobileMax: 608, // 38rem
	smallMobileMax: 420, // 26.25rem
};

export const QUERIES = {
	laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
	tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
	mobileAndDown: `(max-width: ${BREAKPOINTS.mobileMax / 16}rem)`,
	smallMobileAndDown: `(max-width: ${BREAKPOINTS.smallMobileMax / 16}rem)`,
};
