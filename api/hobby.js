// Это как будто-бы данные на сервере.
const moreMyHobbies = [
  { id: 100, text: "Слушать музыку" },
  {
    id: 101,
    text: "Ездить на машине",
  },
  {
    id: 102,
    text: "Делать тестовые по красоте :)",
  },
];
const moreStrangeHobbies = [
  { id: 103, text: "Детейлинг" },
  {
    id: 104,
    text: "Кодить на жс",
  },
  {
    id: 105,
    text: "Собирать мозаики",
  },
];

export const fetchMoreMyHobbies = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: moreMyHobbies }), 1000);
  });
};

export const fetchMoreStrangeHobbies = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: moreStrangeHobbies }), 1000);
  });
};
