import model from "./model.js";

export const createUser = (user) => {
  delete user.id;
  return model.create(user);
};

export const findAllUsers = () => model.find(); //相当于 select* from users

export const findUserById = (userId) => model.findById(userId);

export const findUserByUsername = (username) =>
  model.findOne({ username: username }); //相当于 model. findOne({username})

export const findUserByCredentials = (username, password) =>
  model.findOne({ username, password });

export const updateUser = (userId, user) =>
  model.updateOne({ _id: userId }, { $set: user });

export const deleteUser = (userId) => model.deleteOne({ _id: userId });

export const findUsersByRole = (role) => model.find({ role: role }); // or just model.find({ role })

export const findUsersByPartialName = (partialName) => {
  // partialName 是用户输入的字符串，用于动态生成正则表达式。
  //'i' makes it case-insensitive， 这个正则表达式会匹配任何包含 partialName 的字符串（大小写不敏感）。
  const regex = new RegExp(partialName, "i"); 
  return model.find({
    // $or 是 MongoDB 的逻辑运算符，表示"或者"。firstName 字段与正则表达式 regex 匹配。或者 lastName 字段与正则表达式 regex 匹配。
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};

export const findUsersByFilters = (role, partialName) => {
  const filters = {};

  if (role) {
    filters.role = role;
  }

  if (partialName) {
    const regex = new RegExp(partialName, "i"); 
    filters.$or = [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }];
  }
  return model.find(filters); 
};
