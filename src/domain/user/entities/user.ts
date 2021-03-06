export const UserModel = {
  id: String,
  username: String,
  email: String,
  salt: String,
  profile: String,
  password: String,
  createAt: String,
  updatedAt: String,
};

export type UserType = {
  id: string;
  username: string;
  email: string;
  salt: string;
  profile: string;
  password: string;
  createAt: string;
  updatedAt: string;
};

export interface UserInterface {
  id: string;
  username: string;
  email: string;
  salt: string;
  profile: string;
  password: string;
  createAt: string;
  updatedAt: string;
}
