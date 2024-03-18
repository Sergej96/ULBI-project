type Mods = Record<string, boolean | string>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
            .filter(([_, value]) => Boolean(value))
            .map(([cls]) => cls),
    ].join(' ');
}
