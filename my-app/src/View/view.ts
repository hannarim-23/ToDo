export type taskType = {
  id: number;
  title: string;
  isDone: boolean;
  comment: string;
  date: Date;
};

export type taskType2 = {
  user: string;
  tasks: taskType[];
};

export const taskItems1: taskType[] = [
  {
    id: 0,
    title: "aa0000000000000",
    comment: "some text",
    date: new Date("2024-11-07"),
    isDone: false,
  },
  {
    id: 1,
    title: "1111111111",
    comment: "some text",
    date: new Date("2024-10-12"),
    isDone: true,
  },

  {
    id: 2,
    title: "322222222222222",
    comment: "some text",
    date: new Date("2024-1-31"),
    isDone: false,
  },

  {
    id: 3,
    title: "a333333333333333",
    comment: "some text",
    date: new Date("2024-5-27"),
    isDone: true,
  },
];



export const taskItems2: taskType2[] = [
  {
    user: "Ivan",
    tasks: [
      { id: 0, title: "---aa0000000000000", comment: "some text", date: new Date("2024-11-07"), isDone: false },
      { id: 1, title: "1111111111", comment: "some text", date: new Date("2024-10-12"), isDone: true },
      { id: 2, title: "322222222222222", comment: "some text", date: new Date("2024-1-31"), isDone: false },
      { id: 3, title: "a333333333333333", comment: "some text", date: new Date("2024-5-27"), isDone: true },
    ],
  },
  {
    user: "Yana",
    tasks: [
      { id: 0, title: "task 1", isDone: false, comment: "some text", date: new Date("2024-1-11") },
      { id: 1, title: "2 task", isDone: true, comment: "some text", date: new Date("2023-7-6") },
      { id: 2, title: "task 3", isDone: false, comment: "some text", date: new Date("2024-4-1") },
      { id: 3, title: "4 task", isDone: true, comment: "some text", date: new Date("2022-3-31") },
    ],
  },
  {
    user: "Sergey",
    tasks: [
      { id: 0, title: "000000", isDone: false, comment: "some text", date: new Date("2021-1-31") },
      { id: 1, title: "1111111111", isDone: true, comment: "some text", date: new Date("2024-2-31") },
      { id: 2, title: "22222222222222", isDone: true, comment: "some text", date: new Date("2023-1-5") },
      { id: 3, title: "333333333", isDone: true, comment: "some text", date: new Date("2024-5-31") },
    ],
  },
  {
    user: "Olya",
    tasks: [{ id: 0, title: "8888888888888888", isDone: false, comment: "some text", date: new Date("2020-1-31") }],
  },

];
