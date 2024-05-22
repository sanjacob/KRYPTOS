export const useJump = (cipher, jump, shift) => {
  const result = ref('');

  const decode = (cipher, jump, shift) => {
    const text = cipher.split('');
    const result = [];
    let x = shift - 1;

    for (let i = 0; i < text.length; i++) {
      x = (x + jump) % text.length;
      result.push(text[x]);
    }

    return result.join('');
  };

  const update = () => {
    result.value = decode(toValue(cipher), toValue(jump), toValue(shift));
  };

  watchEffect(update);

  return { result };
};
