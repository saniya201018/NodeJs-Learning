import {
  userCreateService,
  userByIdService,
  getUsersService,
  userDeleteByIdService,
  userDeleteAllService,
  userUpdateById,
  userSignUpService,
  userSignInService,
} from "../services/user.service.js";

import bcrypt from "bcrypt";

const users = async (req, res) => {
  const users = await getUsersService();
  res.json({
    users,
  });
};
const userById = async (req, res) => {
  const user = await userByIdService(req.params.id);
  res.status(200).json({
    user,
  });
};

// const createUser = (req, res) => {
//     const { name, email } = req.body;
//     res.json(
//         {
//             message: "user created",
//             user: {
//                 name: name,
//                 email: email
//             }
//         }
//     );
// }

// const createUser = async (req, res) => {
//     const { name,  email } = req.body;
//     const user = await userCreateService(name, email);

//     res.status(201).json({
//         message: "User Created...",
//         user
//     });

// }

const createUser = async (req, res, next) => {
  try {
    //   throw new Error("Server Error");
    const { name, email, age } = req.body;
    const user = await userCreateService(name, email, age);

    res.status(201).json({
      message: "User Created...",
      user,
    });
  } catch (error) {
    next(error);
  }
};

const userDeleteById = async (req, res) => {
  const id = req.params.id;
  const user = await userDeleteByIdService(id);
  res.json({
    message: "User deleted...",
    user,
  });
};
const allUserDelete = async (req, res) => {
  const id = req.params.id;
  const user = await userDeleteAllService();
  res.json({
    message: "All User deleted...",
    user,
  });
};

const updateUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await userUpdateById(id, req.body);
    res.json({
      user,
    });
  } catch (error) {
    next(error);
  }
};

const signUpController = async (req, res, next) => {
  try {
    //   throw new Error("Server Error");
    const { name, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);

    const user = await userSignUpService(name, email, hashed);

    // if (email) {
    //   res.status(409).json({
    //     message: "account already exist",
    //   });
    //   return;
    // }

    res.status(201).json({
      message: "User Created...",
      user,
    });
  } catch (error) {
    next(error);
  }
};
const signInController = async (req, res, next) => {
  try {
    //   throw new Error("Server Error");
    const { email, password } = req.body;
    const user = await userSignInService(email, password);
    console.log("user.password", user.password);
    console.log("password:", password);
    if (!email || !password) {
      res.status(409).json({
        message: "all fields are required",
      });
    }

    // const compare = await bcrypt.compare(password, user.password);



    // console.log("compare", compare);
    
    
    if (email === user.email && password === user.password) {
      res.status(201).json({
        message: "User logged in...",
        user,
      });
    }
  } catch (error) {
    console.log("err", error.message);
    
    next(error);
  }
};
export {
  users,
  userById,
  createUser,
  userDeleteById,
  allUserDelete,
  updateUser,
  signUpController,
  signInController,
};
