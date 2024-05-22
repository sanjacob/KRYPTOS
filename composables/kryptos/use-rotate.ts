export const useRotate = (cipher, col, angle) => {
  const result = ref('');

  const decode = (cipher, col, angle) => {
    const row = Math.ceil(cipher.length / col);
    const grid = cipher.padEnd(row * col, '_').split('');
    const c = (x, y) => grid[(col * y) + x];

    const turns = angle / 180;
    const w = (angle % 180) == 0;

    const imax = w ? row : col;
    const jmax = w ? col : row;

    const plaintext = [];

    for (let i = 0; i < imax; i++) {
      for (let j = 0; j < jmax; j++) {
        const x0 = w ? j : i;
        const y0 = w ? i : j;

        const x = !(angle == 90 || angle == 270) ? x0 : col - x0 - 1;
        const y = !(angle == 180 || angle == 270) ? y0 : row - y0 - 1;

        plaintext.push(c(x, y));
      }
    }

    return plaintext.join('');
  };

  const update = () => {
    result.value = decode(toValue(cipher), toValue(col), toValue(angle));
  };

  watchEffect(update);

  return { result };
};
