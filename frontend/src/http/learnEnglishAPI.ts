import $host from "./index";

export const fetchWords = async () => {
  const { data } = await $host.get("/");
  return data;
};

export const knowWord = async (word: string) => {
  const { data } = await $host.put("/", { word });
  return data;
};

export const addWord = async (word: object) => {
  const { data } = await $host.post("/addword", word);
  return data;
};
