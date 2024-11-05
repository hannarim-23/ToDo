import { taskType } from "../Molecules/Task";



export let taskItems1: taskType[] = [
  {
    id: 0,
    text: "0000000000000",
    isDone: false,
  },
  {
    id: 1,
    text: "1111111111",
    isDone: true,
  },

  {
    id: 2,
    text: "22222222222222",
    isDone: false,
  },

  {
    id: 3,
    text: "333333333333333",
    isDone: true,
  },
];

/* let obj1 = "ivan";
let obj2 = "yana";

export let taskItemsArray = [
  [obj1],
  [
    { id: 0, text: "0000000000000", isDone: false },
    { id: 1, text: "1111111111", isDone: true },
    { id: 2, text: "22222222222222", isDone: false },
    { id: 3, text: "333333333333333", isDone: true },
  ],
  [obj2],
  [
    { id: 0, text: "0000000000000", isDone: false },
    { id: 1, text: "1111111111", isDone: true },
    { id: 2, text: "22222222222222", isDone: false },
    { id: 3, text: "333333333333333", isDone: true },
  ],
]; */

export let taskItems2: taskType[] = [
  {
    id: 4,
    text: "444444444444444444",
    isDone: false,
  },
  {
    id: 5,
    text: "555555555555",
    isDone: true,
  },

  {
    id: 6,
    text: "666666666666",
    isDone: false,
  },

  {
    id: 7,
    text: "777777777777777",
    isDone: true,
  },
];

export let taskItems3: taskType = {
  id: 8,
  text: "8888888888888888",
  isDone: false,
};


export let allUsers = [taskItems1,taskItems2,taskItems3];