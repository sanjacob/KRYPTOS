export const usePad = (cipher, pad, side) => {
  const result = ref('');

  const decode = (cipher, pad, side) => (
    (side === 0) ? pad + cipher : cipher + pad
  );

  const update = () => {
    result.value = decode(
      toValue(cipher),
      toValue(pad),
      toValue(side)
    );
  };

  watchEffect(update);

  return { result };
};
