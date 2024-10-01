import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZWUzMDMwNjI2ODg3MGY1ZjM1ZWQ0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyNzI4MTYzOCwiZXhwIjoxNzI3NTQwODM4fQ.tPh4PLPLaDXFxAGhMlKgL0xOtXOaY5SmlRFXARccj-A";

export const publicRequest = axios.create({ baseURL: BASE_URL });
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
