import axios from "axios";
const BASE_URL = "https://viacep.com.br/ws";

export const getAdressInfo = async (cep: string): Promise<string> => {
  try {
    const res = await axios.get(`${BASE_URL}/${cep}/json`);

    console.log(res.data);
    const { logradouro, bairro, localidade, uf } = res.data;
    const address = `${logradouro}, ${bairro}, ${localidade},/${uf}`;
    console.log(address);
    return address;
  } catch (error) {}
  throw new Error();
};
