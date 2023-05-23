//รับค่าserviceAccountเพื่อเข้าใช้งานadmin
// import serviceAccount from "../../service-account.json";
import admin from "firebase-admin";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT);

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

//เช็คสถานะuser
export default async function verifyUser(req, res, next) {
  //รับheadersส่วนauthมาเก็บ
  const rawToken = req.headers.authorization;

  if (!rawToken) {
    return res.status(401).send("Require Token!!");
  }
  // แตกค่าtokenออกมา
  const token = rawToken.split(" ").pop();
  try {
    //decodedTokenใส่ในkey id
    const decodedToken = await app.auth().verifyIdToken(token);
    req.user = {
      id: decodedToken.uid,
    };
    //สั่งให้รันfunctionต่อไป
    next();
  } catch (error) {
    return res.status(401).send(`Invelid Token: ${error.code}`);
  }
}
