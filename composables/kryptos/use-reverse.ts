export const useReverse = (cipher) => {
  const result = ref('');

  const decode = (cipher) => (
    cipher.split('').reverse().join('')
  );

  const update = () => {
    result.value = decode(toValue(cipher));
  };

  watchEffect(update);

  return { result };
};
