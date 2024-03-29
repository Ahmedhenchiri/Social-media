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
  className?:string| undefined;
  onClick?: () => void | Promise<void>;
};

export type LocaleStorageContextType = {
  myData:string
  setMyData: React.Dispatch<React.SetStateAction<string>>;
  logout: () => void;
};

export type handleSubmitType = {
  event: React.FormEvent<HTMLFormElement>;
};
export type Post = {
  _id: number;
  title: string;
  content: string;
  image: string;
  createdAt:Date
  user:{
    _id:number,
    image:string,
    name:string
  },
};
export type Users ={
  _id :number,
  name:string
}

export type PostContextType = {
  posts: Post[];
  userPosts:Post[];
  onePost:any;
  users : Users[]
  getAllPosts: () => Promise<void>;
  getOne:(postId: number)=>Promise<void>;
  deletePost: (postId: number) => Promise<void>;
  updatePost: (postId: number, postData: postDataType) => Promise<void>; 
  upladImage:(file: File) =>Promise<void>;
  addPost:(form:formType)=>Promise<void>;
  getAllPostOfUser: (userID: number) => Promise<void>;
  getAllUsers: () => Promise<void>;
 
};
export type ChildrenType = {
  children: React.ReactNode;
};
export type CostomModalType ={
  name:string,
  Name?:string,
  postId?: number,
  onClick?: () => void | Promise<void>;

};
export type postDataType ={
  title:string,
  content:string
}
export type formType ={
  image?:File | undefined,
  user?:any,
  title?:string,
  content?:string

}
export   type ModalTwoType ={
  name?:string,
  Name?:string,
  Title?:string,
  image?:string,
  Content?:string,
  postId?:any,
  modalContent?:string,
  buttonSubmit?:string,
  buttonDanger?:string,
  icon?:string,
  buttonColor?:string
}
