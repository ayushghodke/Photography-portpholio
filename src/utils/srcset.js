const WIDTHS = [400, 800, 1200];

export function srcSetFor(filename) {
    const dot = filename.lastIndexOf('.');
    if (dot === -1) return '';
    const base = filename.slice(0, dot);
    const ext = filename.slice(dot);
    return WIDTHS.map((w) => `/images/${base}-${w}w${ext} ${w}w`).join(', ');
}
