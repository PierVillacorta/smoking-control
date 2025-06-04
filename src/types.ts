export type User = {
  date: number;
  name: string;
  age: number;
  day: Notes["day"];
  gender: string;
  image: FileList;
  quote: string;
  notes: Notes[]
  accomplished: boolean;
};

export type Notes = {
  content: string;
  day: number;
  achieved: string;
};
