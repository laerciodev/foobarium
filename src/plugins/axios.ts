import axios from 'axios';

const TOKEN = '0b8d4c47d78dbdcfcc1b84d457da0bc61e958e39dac4a182e5c230a57f9ce227';

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: 'application/json',
  'Content-type': 'application/json'
};

export default axios.create({
  baseURL: 'https://gorest.co.in/public/v2',
  headers
})

