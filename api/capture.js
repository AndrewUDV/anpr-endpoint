export default async function handler(req, res) {
  const auth = req.headers.authorization || "";
  const expectedAuth = "Basic " + Buffer.from("test:andrei123").toString("base64");

  if (auth !== expectedAuth) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  let body = {};
  try {
    body = req.body;
  } catch (err) {
    console.error("Error parsing body:", err);
  }

  console.log("Received POST from camera:");
  console.log("Headers:", req.headers);
  console.log("Body:", body);

  res.status(200).json({ message: "Data received successfully", data: body });
}
