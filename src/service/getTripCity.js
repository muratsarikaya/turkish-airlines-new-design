import axios from "axios";

const config = {
    headers: {
        'X-RapidAPI-Key': 'efd1c10962msh3938d14ee4cc2f8p1195f0jsn69defe58af88',
        'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
      }
  };

const getTripCity = async(key) => {
  return axios
    .get(`https://www.flypgs.com/tr/s/d/f/${key}`)
    .then(response =>  response.data)
    .catch((err) => {
      return err;
    });
};

export default getTripCity;