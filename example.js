const axios = require("axios");

const API_URL = "http://localhost:3040/v1/chat/completions";

const prompt = "qual modelo gpt está em uso ?";

const data = {
  model: "gpt-4-turbo",
  messages: [{ role: "user", content: prompt }],
  temperature: 0.7,
};

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

axios
  .post(API_URL, data, config)
  .then((response) => {
    console.log(response.data.choices[0].message.content);
  })
  .catch((error) => {
    console.error(error);
  });
