import { PrismaClient } from "../../prisma/generated/prisma";

/* eslint-disable @typescript-eslint/no-explicit-any */

/*******************************************************************************************
 * Computed‑pattern type helpers (universal executor approach)                             *
 * Alphabetical slots (A → Z) are reserved so future additions stay in order.              *
 *******************************************************************************************/

/*───────────────────────────────────────────────────────────────
  A
────────────────────────────────────────────────────────────────*/
// TActionName – every callable property name on a given model delegate
export type TActionName<K extends keyof PrismaClient> = {
    [Method in keyof PrismaClient[K]]: PrismaClient[K][Method] extends (
        ...args: any[]
    ) => any
        ? Method
        : never;
}[keyof PrismaClient[K]] &
    string;

/*───────────────────────────────────────────────────────────────
  B
────────────────────────────────────────────────────────────────*/
export type TBPlaceholder = never;

/*───────────────────────────────────────────────────────────────
  C
────────────────────────────────────────────────────────────────*/
export type TCPlaceholder = never;

/*───────────────────────────────────────────────────────────────
  D
────────────────────────────────────────────────────────────────*/
// TDelegateType – the concrete delegate object for a given model key
export type TDelegateType<K extends keyof PrismaClient> = PrismaClient[K];

/*───────────────────────────────────────────────────────────────
  E
────────────────────────────────────────────────────────────────*/
export type TEPlaceholder = never;

/*───────────────────────────────────────────────────────────────
  F
────────────────────────────────────────────────────────────────*/
export type TFPlaceholder = never;

/*───────────────────────────────────────────────────────────────
  G
────────────────────────────────────────────────────────────────*/
/** One middleware (gate) signature */
// types/index.ts  (or wherever your alphabet types live)

/** Gate – a middleware unit for one model & one action union */
export type TGate<K extends TModelKey, A extends TActionName<K>> = (ctx: {
    model: K;
    action: A;
    args: TArgs<K, A>;
    next: () => Promise<TResult<K, A>>;
}) => Promise<TResult<K, A>>;

/*───────────────────────────────────────────────────────────────
  H
────────────────────────────────────────────────────────────────*/
export type THPlaceholder = never;

/*───────────────────────────────────────────────────────────────
  I
────────────────────────────────────────────────────────────────*/
export type TIPlaceholder = never;

/*───────────────────────────────────────────────────────────────
  J
────────────────────────────────────────────────────────────────*/
export type TJPlaceholder = never;

/*───────────────────────────────────────────────────────────────
  K
────────────────────────────────────────────────────────────────*/
export type TKPlaceholder = never;

/*───────────────────────────────────────────────────────────────
  L
────────────────────────────────────────────────────────────────*/
export type TLPlaceholder = never;

/*───────────────────────────────────────────────────────────────
  M
────────────────────────────────────────────────────────────────*/
// TModelKey – any key on `prisma` whose value has at least one callable member
export type TModelKey = {
    [Key in keyof PrismaClient]: {
        [M in keyof PrismaClient[Key]]: PrismaClient[Key][M] extends (
            ...args: any[]
        ) => any
            ? true
            : never;
    }[keyof PrismaClient[Key]] extends true
        ? Key
        : never;
}[keyof PrismaClient];

/*───────────────────────────────────────────────────────────────
  N
────────────────────────────────────────────────────────────────*/
export type TNPlaceholder = never;

/*───────────────────────────────────────────────────────────────
  O
────────────────────────────────────────────────────────────────*/
export type TOPlaceholder = never;

/*───────────────────────────────────────────────────────────────
  P
────────────────────────────────────────────────────────────────*/
export type TPPlaceholder = never;

/*───────────────────────────────────────────────────────────────
  Q
────────────────────────────────────────────────────────────────*/
export type TQPlaceholder = never;

/*───────────────────────────────────────────────────────────────
  R
────────────────────────────────────────────────────────────────*/
// TResult – awaited return type of a particular delegate method
export type TResult<
    K extends TModelKey,
    A extends TActionName<K>,
> = PrismaClient[K][A] extends (...args: any[]) => infer R ? Awaited<R> : never;

/*───────────────────────────────────────────────────────────────
  S
────────────────────────────────────────────────────────────────*/
// TArgs – parameter object (first argument) expected by a delegate method
export type TArgs<
    K extends TModelKey,
    A extends TActionName<K>,
> = PrismaClient[K][A] extends (arg: infer P, ...rest: any[]) => any
    ? P
    : never;

/*───────────────────────────────────────────────────────────────
  T
────────────────────────────────────────────────────────────────*/
export type TPlaceholderT = never;

/*───────────────────────────────────────────────────────────────
  U
────────────────────────────────────────────────────────────────*/
export type TUPlaceholder = never;

/*───────────────────────────────────────────────────────────────
  V
────────────────────────────────────────────────────────────────*/
export type TVPlaceholder = never;

/*───────────────────────────────────────────────────────────────
  W
────────────────────────────────────────────────────────────────*/
export type TWPlaceholder = never;

/*───────────────────────────────────────────────────────────────
  X
────────────────────────────────────────────────────────────────*/
export type TXPlaceholder = never;

/*───────────────────────────────────────────────────────────────
  Y
────────────────────────────────────────────────────────────────*/
export type TYPlaceholder = never;

/*───────────────────────────────────────────────────────────────
  Z
────────────────────────────────────────────────────────────────*/
export type TZPlaceholder = never;
