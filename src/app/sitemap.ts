import { env } from "@/config/env/server";
import ROUTES from "@/constants/routes";
import { MetadataRoute } from "next";

const SITE_URL = env.SITE_URL;

const sitemap = (): MetadataRoute.Sitemap => {
    return [
        {
            url: `${SITE_URL}${ROUTES.LOGIN}`,
            lastModified: new Date(),
        },
        {
            url: `${SITE_URL}${ROUTES.SIGNUP}`,
            lastModified: new Date(),
        },
        {
            url: `${SITE_URL}${ROUTES.HOME}`,
            lastModified: new Date(),
        },
    ];
};

export default sitemap;
