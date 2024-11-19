import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  const updatedUsers = response.data.map((each) => {
    return {
      ...each,
      firstName: each.name,
      lastName: each.username,
      email: each.email,
      department: each.company.catchPhrase,
    };
  });

  return updatedUsers;
};

export const addUser = async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};

export const editUser = async (id, user) => {
  const response = await axios.put(`${API_URL}/${id}`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
