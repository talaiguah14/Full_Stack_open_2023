import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  console.log("getAll",request.then(response => response.result))
  return request.then((response) => response.data);
};

const createPerson = (newObjectPerson) => {
  const request = axios.post(baseUrl, newObjectPerson);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
console.log("deletePersonService",request.then(response => response.result))
  return request.then(response => response.data)
};

export default { getAll,createPerson,deletePerson };
