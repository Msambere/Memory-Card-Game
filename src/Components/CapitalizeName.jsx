function CapitalizeName({ pokemanName }) {
  let firstLetter = pokemanName.charAt(0);
  let remainingLetters = pokemanName.substring(1);
  let firstLetterCap = firstLetter.toUpperCase();
  let capitalizedName = firstLetterCap + remainingLetters;

  return (
    <>
      <h3>{capitalizedName}</h3>
    </>
  );
}

export default CapitalizeName;
