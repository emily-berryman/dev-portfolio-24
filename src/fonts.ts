import { Tektur, IBM_Plex_Mono } from "next/font/google";

export const ibmPlexMono = IBM_Plex_Mono({
	weight: ["300", "400", "600", "700"], // load only needed weights
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

// Tektur font with selected weight
export const tektur = Tektur({
	weight: ["600"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
});
