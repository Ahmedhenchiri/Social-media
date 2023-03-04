export type ErrorsType = {
  name: string;
  email: string;
  password: string;
  confirm: string;
};

export type errorType = {
  email: string;
  password: string;
};

export type InputsType = {
  name: string;
  label: string;
  type: string;
  icon: string;
  className?: string;
  classts?: any;
  errors: any;
  onChange: (event: any) => void;
};

export type buttonType = {
  type?: "button" | "submit" | "reset" | undefined;
  name: string;
};

export type LocaleStorageContextType = {
  myData: string;
  setMyData: React.Dispatch<React.SetStateAction<string>>;
  logout: () => void;
};

export type handleSubmitType = {
  event: React.FormEvent<HTMLFormElement>;
};
export type Post = {
  id: number;
  title: string;
  content: string;
  image: string;
};

export type PostContextType = {
  posts: Post[];
  getAllPosts: () => Promise<void>;
};
export type ChildrenType = {
  children: React.ReactNode;
};
