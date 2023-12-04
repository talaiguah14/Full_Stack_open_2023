import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createPerson = (newObjectPerson) => {
  const request = axios.post(baseUrl, newObjectPerson);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
};

const updatePerson = (id,newObjectPerson) => {
  const request = axios.put(`${baseUrl}/${id}`,newObjectPerson)
  return request.then(response => response.data);
};

export default { getAll,createPerson,deletePerson,updatePerson };
