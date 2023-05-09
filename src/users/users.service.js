import { faker } from "@faker-js/faker";
import User from "../models/users.schema";

const users = [
  {
    id: faker.random.numeric(4),
    name: "Phanida",
  },
  {
    id: faker.random.numeric(4),
    name: "สมหงิ งวย",
  },
  {
    id: faker.random.numeric(4),
    name: "ทนงทวย คงควรคอย",
  },
  {
    id: faker.random.numeric(4),
    name: faker.name.fullName(),
  },
  {
    id: faker.random.numeric(4),
    name: faker.name.fullName(),
  },
  {
    id: faker.random.numeric(4),
    name: faker.name.fullName(),
  },
];

export async function getUsers() {
  return users;
}

export function createUser(user) {
  // const user = {
  //   id: faker.random.numeric(4),
  //   name: name,
  // };
  // users.push(user);
  const userModel = new User(user);
  return userModel.save();
}

export async function getUserById(id) {
  const user = users.find((user) => user.id === id);

  return user;
}
