import { shuffleArray } from "./utils";

export default function getQuizController(cards) {
  const shuffled = shuffleArray(cards);
  let nextIndex = 0;

  return {
    getInfo() {
      const total = shuffled.length;
      const curr = Math.min(nextIndex, total);
      
      return `${curr}/${total}`;
    },
    
    getNextCard() {
      const card = shuffled[nextIndex];
      nextIndex++;

      return card;
    },

    isOver() {
      return nextIndex >= shuffled.length;
    }
  };
}
