import { env } from "@/config/env/client";
import { TApiVersionPrefix } from "./types";

export const SITE_URL = env.NEXT_PUBLIC_SITE_URL! ?? "http://localhost:3000";

export const API_V1: TApiVersionPrefix = "/api/v1";

const API_ENDPOINTS = {};

export default API_ENDPOINTS;
