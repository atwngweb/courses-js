export const battle = function (char1, char2) {
  let round = 1;
  while (char1.isAlive() && char2.isAlive()) {
    console.log(`Round ${round}:`);
    if (char1.speed > char2.speed) {
      char1.attack(char2);
      if (char2.isAlive()) {
        char2.attack(char1);
      }
    } else if (char2.speed > char1.speed) {
      char2.attack(char1);
      if (char1.isAlive()) {
        char1.attack(char2);
      }
    } else {
      if (round % 2 == 0) {
        char1.attack(char2);
      } else char2.attack(char1);
    }
    round++;
  }
  const winner = char1.isAlive() ? char1 : char2;
  console.log(`${winner.name} win!`);
  return winner;
};
