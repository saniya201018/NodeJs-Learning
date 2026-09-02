  import { userCreateService, userByIdService, getUsersService, userDeleteByIdService, userDeleteAllService } from "../services/user.service.js";

const users = async (req, res) => {
  const users = await getUsersService();
  res.json({
    users
  });
};
const userById = async (req, res) => {
  const user = await userByIdService(req.params.id);
  res.status(200).json({
    user
  })
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
    const { name, email } = req.body;
    const user = await userCreateService(name, email);

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
    user
  });
}
const allUserDelete = async (req, res) => {
 const id = req.params.id;
 const user = await userDeleteAllService();
  res.json({
    message: "All User deleted...",
    user
  });
}
export { users, userById, createUser, userDeleteById, allUserDelete };
