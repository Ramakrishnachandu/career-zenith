export const extractNameLetters = (str: string | undefined) => {
    const matches = str?.match(/\b[A-Z]/g);
    return matches ? matches.slice(0, 2).join('') : '';
  };