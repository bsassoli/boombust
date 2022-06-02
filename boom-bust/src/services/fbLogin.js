import axios from "axios";

/**
 *
 * @param {*} accesstoken This is the accesstoken of the user obtained from FaceBook
 */
const fbLogin = async (accesstoken) => {
  let res = await axios.post("http://127.0.01:8000/auth/token/", {
    access_token: accesstoken,
  });
  console.log(res);
  console.log("Logging in");
  return await res.status;
};

export default fbLogin;
