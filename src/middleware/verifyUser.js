import serviceAccount from "../../service-account.json";
import admin from "firebase-admin";

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default async function verifyUser(req, res, next) {
  const rawToken = req.headers.authorization;

  if (!rawToken) {
    return res.status(401).send("Require Token!!");
  }

  const token = rawToken.split(" ").pop();
  try {
    const decodedToken = await app.auth().verifyIdToken(token);
    req.user = {
      id: decodedToken.uid,
    };

    next();
  } catch (error) {
    return res.status(401).send(`Invelid Token: ${error.code}`);
  }
}
