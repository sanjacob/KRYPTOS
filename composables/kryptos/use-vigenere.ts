export const useVigenere = (cipher, key) => {
  const alphabet = ref('');
  const index = ref('');

  const update = () => {
    alphabet.value = toValue(key) + "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').filter(
      (e) => (toValue(key).indexOf(e) == -1)
    ).join('');

    index.value = Object.fromEntries(alphabet.value.split('').map((c, i) => [c, i]));
  };

  const decode = (passphrase) => {
    const abcLen = alphabet.value.length;

    return toValue(cipher).split('').map((c, i) => { 
      const k = passphrase[i % passphrase.length];
      const d = index.value[c] - index.value[k];
      return alphabet.value[((d < 0) ? abcLen + d : d) % abcLen];
    }).join('');
  };

  watchEffect(update);

  return { alphabet, decode };
};
