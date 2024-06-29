const COLORS = [
  { r: 245, g: 66, b: 66 },
  { r: 5, g: 168, b: 38 },
  { r: 4, g: 21, b: 112 },
  { r: 101, g: 7, b: 130 },
  { r: 105, g: 1, b: 68 },
  { r: 82, g: 2, b: 2 },
];

export function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b };
}

export function generateShade(batchIndex, shadeIndex) {
  const factor = shadeIndex / 5;
  const color = COLORS[batchIndex % 6]
  return colorToHex({
    r: Math.floor(color.r * factor),
    g: Math.floor(color.g * factor),
    b: Math.floor(color.b * factor),
  });
}

export function colorToHex(color) {
  const r = color.r.toString(16).padStart(2, "0");
  const g = color.g.toString(16).padStart(2, "0");
  const b = color.b.toString(16).padStart(2, "0");
  return `#${r}${g}${b}`;
}
