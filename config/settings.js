const config = {
  apiUrl: 'https://api.example.com',
  token: process.env.API_TOKEN,
};

export function assertConfig(env = process.env) {
  if (!env.API_TOKEN) {
    throw new Error('Falta la variable de entorno API_TOKEN. Configúrala como secreto antes de ejecutar.');
  }
  return true;
}

export default config;
