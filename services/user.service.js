import { appError } from "../utils/appError.js";
import { userCreate, getUsers, getUserById, userDeleteById, userDeleteAll } from "../repositories/user.repository.js";
export const userCreateService = async (name, email) => {
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
        email
    });

    return user;
}


export const getUsersService = async () => {
    const users = await getUsers();
    return users;
}

export const userByIdService = async (id) => {
    const user = await getUserById(id);

    if(!user) {
        throw new appError("User not found", 404);
    }
    return user;

}


export const userDeleteByIdService = async (id) => {
    const user = await userDeleteById(id);

    return user
}
export const userDeleteAllService = async () => {
    const user = await userDeleteAll()
    ;

    return user
}