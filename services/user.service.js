import { appError } from "../utils/appError.js";
import {
  userCreate,
  getUsers,
  getUserById,
  userDeleteById,
  userDeleteAll,
  userUpdateAllDetails,
  signUp,
  signIn,
} from "../repositories/user.repository.js";
export const userCreateService = async (name, email, age) => {
  // if(!name) {
  //     throw new Error("Name is required");
  //     return;
  // }
  // const emailExists = false;
  // if (emailExists) {
  //     throw new appError("Email already exist.", 409);
  // }
  // const user = {
  //     id: 1,
  //     name,
  //     email
  // }

  const user = await userCreate({
    name,
    email,
    age,
  });

  return user;
};

export const getUsersService = async () => {
  const users = await getUsers();
  return users;
};

export const userByIdService = async (id) => {
  const user = await getUserById(id);

  if (!user) {
    throw new appError("User not found", 404);
  }
  return user;
};

export const userDeleteByIdService = async (id) => {
  const user = await userDeleteById(id);

  return user;
};
export const userDeleteAllService = async () => {
  const user = await userDeleteAll();

  return user;
};

export const userUpdateById = async (id, data) => {
  const user = await userUpdateAllDetails(id, data);
  return user;
};

export const userSignUpService = async (name, email, password) => {
  const user = await signUp({
    name,
    email,
    password,
  });

  return user;
};
export const userSignInService = async (email, password) => {
  const user = await signIn({
    email,
    password,
  });

  console.log("service user", user);
  

  return user;
};




import bcrypt from 'bcrypt';

let password = "Ameen@123";
let saltRound = 10; 
let hashedPassword = await bcrypt.hash(password, saltRound);
let hashedPassword1 = await bcrypt.hash(password, saltRound);

console.log("Pass1: ", hashedPassword);
console.log("pass2:", hashedPassword1);

let userPassword = "Ameen@123";

let match = await bcrypt.compare(userPassword, hashedPassword);

console.log(match);

