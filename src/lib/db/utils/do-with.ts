"use server";

import { TActionName, TArgs, TModelKey, TResult } from "@/types/prisma";

import { prisma } from "..";

/**
 * Universal executor for any Prisma delegate method.
 *
 * @param model   e.g. "post", "user"
 * @param action  e.g. "findMany", "update", "deleteMany"
 * @param args    first parameter object for that method
 */
const doWith = async <K extends TModelKey, A extends TActionName<K>>(
    model: K,
    action: A,
    args: TArgs<K, A>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<TResult<K, A>> => (prisma[model] as any)[action](args);

export default doWith;
