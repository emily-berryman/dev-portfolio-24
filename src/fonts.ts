import { Tektur, IBM_Plex_Mono } from "next/font/google";

export const ibmPlexMono = IBM_Plex_Mono({
	weight: ["300", "400", "600", "700"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
});

export const tektur = Tektur({
	weight: ["600"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
});
