/**
 *
 * @author Serempre
 * @name useAlgorithms
 * @type {Function}
 * @description Custom hook to manage custom algorithms
 * @param {} -
 *
 * @return {Function} luhnAlgorithmValidation: Function to validate a number with the lunh algorithm
 */
const useAlgorithms = () => {
  const luhnAlgorithmValidation = (luhnValue) => {
    // Accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(luhnValue)) return false;

    // Luhn Algorithm
    let nCheck = 0,
      bEven = false;
    luhnValue = luhnValue.replace(/\D/g, '');

    for (var n = luhnValue.length - 1; n >= 0; n--) {
      var cDigit = luhnValue.charAt(n),
        nDigit = parseInt(cDigit, 10);

      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

      nCheck += nDigit;
      bEven = !bEven;
    }

    return nCheck % 10 == 0;
  };

  return {
    luhnAlgorithmValidation,
  };
};

export default useAlgorithms;
