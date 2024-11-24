import model from "./model.js";

export const createUser = (user) => {
  delete user.id;
  return model.create(user);
} 

export const findAllUsers = () => model.find();  //相当于 select* from users

export const findUserById = (userId) => model.findById(userId);

export const findUserByUsername = (username) => model.findOne({ username: username }); //相当于 model. findOne({username})

export const findUserByCredentials = (username, password) => model.findOne({ username, password });

export const updateUser = (userId, user) => model.updateOne({ _id: userId }, { $set: user });

export const deleteUser = (userId) => model.deleteOne({ _id: userId });
