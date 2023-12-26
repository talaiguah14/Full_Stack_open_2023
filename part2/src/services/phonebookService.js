import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL;

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createPerson = (newObjectPerson) => {
  const result = axios
    .post(baseUrl, newObjectPerson)
    .then((response) => response)
    .catch(function (error) {
      if (error.response) {
        return error.response;
      } else if (error.request) {
        return error.request;
      } else {
        return error.message;
      }
    });
  return result;
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const updatePerson = (id, newObjectPerson) => {
  const result = axios
    .put(`${baseUrl}/${id}`, newObjectPerson)
    .then((response) => response)
    .catch((error) => {
      if (error.response) {
        return error.response;
      } else if (error.request) {
        return error.request;
      } else {
        return error.message;
      }
    });
  return result;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createPerson, deletePerson, updatePerson };
