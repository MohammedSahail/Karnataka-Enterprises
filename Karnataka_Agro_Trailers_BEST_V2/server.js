const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.get("/api/health", (req,res) => res.json({ok:true, service:"Karnataka Agro Trailers"}));

app.listen(PORT, () => {
  console.log(`Karnataka Agro Trailers running at http://localhost:${PORT}`);
});
