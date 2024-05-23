export const useVigenere = (cipher, key, passphrase) => {
  const alphabet = ref('');
  const index = ref('');
  const result = ref('');

  const decode = (passphrase) => {
    if (passphrase == '') {
      return toValue(cipher);
    }

    const abcLen = alphabet.value.length;

    return toValue(cipher).split('').map((c, i) => {
      const k = passphrase[i % passphrase.length];
      const d = index.value[c] - index.value[k];
      return alphabet.value[((d < 0) ? abcLen + d : d) % abcLen];
    }).join('');
  };

  const update = () => {
    alphabet.value = toValue(key) + "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').filter(
      (e) => (toValue(key).indexOf(e) == -1)
    ).join('');

    index.value = Object.fromEntries(alphabet.value.split('').map((c, i) => [c, i]));

    result.value = decode(toValue(passphrase).toUpperCase());
  };

  watchEffect(update);

  return { alphabet, result };
};
