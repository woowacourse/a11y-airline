export type ObjectValueToUnion<T extends Record<string, unknown>> = T[keyof T];
