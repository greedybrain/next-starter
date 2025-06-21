import { env } from "@/config/env/server";
import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
    return {
        rules: [
            {
                userAgent: "*",
                allow: ["/"],
                disallow: ["/privacy", "/terms"],
            },
        ],
        sitemap: `${env.SITE_URL!}/sitemap.xml`,
    };
};

export default robots;
