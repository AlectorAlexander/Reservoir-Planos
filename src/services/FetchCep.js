import axios from 'axios';

const instance = (cep) => axios.create({
  baseURL: `https://viacep.com.br/ws/${cep}/json`,
});

export default async function getCep(cep) {
  try {
    const response = await instance(cep).get();
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
