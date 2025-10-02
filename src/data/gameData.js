export const gameData = {
  1: {
    title: "Chapter 1",
    story: "Rumi faces a demon trying to steal fans' energy.",
    hero: "Rumi",
    villain: "Energy Demon",
    heroImage: "/assets/images/rumi.png",
    villainImage: "/assets/images/demon.png",
    unlocked: true
  },
  2: {
    title: "Chapter 2",
    story: "Mira confronts a Saja Boys blocking the stage.",
    hero: "Mira",
    villain: "Saja Boys",
    heroImage: "/assets/images/mira.png",
    villainImage: "/assets/images/saja.png",
    unlocked: false
  },
  3: {
    title: "Chapter 3",
    story: "Zoey battles a sneaky demon hiding in the concert lights.",
    hero: "Zoey",
    villain: "Light Demon",
    heroImage: "/assets/images/zoe.png",
    villainImage: "/assets/images/demon.png",
    unlocked: false
  },
  4: {
    title: "Chapter 4",
    story: "Suzie the Tiger leaps at a demon that jumped into the crowd.",
    hero: "Suzie the Tiger",
    villain: "Crowd Demon",
    heroImage: "/assets/images/tiger.png",
    villainImage: "/assets/images/demon.png",
    unlocked: false
  },
  5: {
    title: "Chapter 5",
    story: "Rumi challenges the Saja Boys attempting to disrupt rehearsal.",
    hero: "Rumi",
    villain: "Saja Boys",
    heroImage: "/assets/images/rumi.png",
    villainImage: "/assets/images/saja.png",
    unlocked: false
  },
  6: {
    title: "Chapter 6",
    story: "Mira protects the fans from a charging demon in the streets.",
    hero: "Mira",
    villain: "Street Demon",
    heroImage: "/assets/images/mira.png",
    villainImage: "/assets/images/demon.png",
    unlocked: false
  },
  7: {
    title: "Chapter 7",
    story: "Zoey faces the final Saja Boys boss, blocking the stadium exit.",
    hero: "Zoey",
    villain: "Saja Boys Boss",
    heroImage: "/assets/images/zoe.png",
    villainImage: "/assets/images/saja.png",
    unlocked: false
  }
};

export const multiplicationTables = [1, 2, 3, 4, 5, 10, 11];

export const generateQuestion = () => {
  const table = multiplicationTables[Math.floor(Math.random() * multiplicationTables.length)];
  
  // All tables only go up to 10 (no 11x11, 11x12, or any x11, x12)
  const multiplier = Math.floor(Math.random() * 10) + 1;
  
  return {
    question: `${table} × ${multiplier}`,
    answer: table * multiplier,
    table,
    multiplier
  };
};

export const generateQuestions = (count = 50) => {
  const questions = [];
  for (let i = 0; i < count; i++) {
    questions.push(generateQuestion());
  }
  return questions;
};