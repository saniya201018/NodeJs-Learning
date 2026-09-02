import { User } from "../models/user.model.js";

export const userCreate = async (data) => {
    const user = await User.create(data);

    return user;
}

export const getUsers = async () => {
    const users = await User.find();

    return users;
}

export const getUserById = async (id) => {
    const user = await User.findById(id)

    return user;
}


export const userDeleteById = async (id) => {
    const user = await User.findByIdAndDelete(id);

    return user;
}
export const userDeleteAll = async () => {
    const user = await User.deleteMany();

    return user.deletedCount;
}