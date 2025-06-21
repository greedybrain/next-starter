//TODO: Update this file
import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
    return {
        name: "dotpdf.ai",
        short_name: "DotPDF",
        description:
            "Hack your PDFs using our pdf processing tools! Whether you want to split, merge, or compress your PDFs, dotpdf.ai has you covered.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#65CFF1",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
};

export default manifest;
