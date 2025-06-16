"use server";

import { TActionName, TArgs, TGate, TModelKey, TResult } from "@/types/prisma";

import doWith from "./do-with";

/**
 * withGate(model)(gate1, gate2, …)(action, args)
 *
 * The gates run in the order provided; each must call `next()` exactly once
 * (or throw/return early to abort the chain).
 */
const withGated =
    <K extends TModelKey>(model: K) =>
    <AUnion extends TActionName<K> = TActionName<K>>( // optional: narrow later
        ...gates: TGate<K, AUnion>[]
    ) =>
    <A extends AUnion>(
        action: A,
        args: TArgs<K, A>
    ): Promise<TResult<K, A>> => {
        const handler = () => doWith(model, action, args);

        type Next = () => Promise<TResult<K, A>>;

        const composed = gates.reduceRight<Next>(
            (next, gate) => () => gate({ model, action, args, next }),
            handler
        );

        return composed();
    };

export default withGated;
