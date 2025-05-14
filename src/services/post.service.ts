import { IPost } from "../types/post";
// http://localhost:3000/api/post/getAll

export const getAllPosts = async () => {
  const arr: IPost[] = [
    {
      Id: 1,
      Author_id: 1,
      Author_name: "Andrey",
      Text: "<span>Test 1</span>",
      LikeCounter: 0,
    },
    {
      Id: 2,
      Author_id: 2,
      Author_name: "Ssssss",
      Text: "<span>Test 2</span>",
      LikeCounter: 0,
    },
    {
      Id: 3,
      Author_id: 3,
      Author_name: "Ddddddd",
      Text: "<span>Test 3</span>",
      LikeCounter: 0,
    },
  ];
  return arr;
};
