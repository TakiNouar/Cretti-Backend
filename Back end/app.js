require("dotenv").config();

// extra security packages
const helmet = require("helmet");
const cors = require("cors");
const rateLimiter = require("express-rate-limit");
const morgan = require("morgan");

const express = require("express");
const app = express();

//routers
const contactRoutes = require("./routes/contactRoutes");

//error handler
const notFoundMiddleWare = require("./middleWare/notFound");
const errorHandlerMiddleware = require("./middleWare/errorHandler");

app.use(helmet());
app.use(express.json({ limit: "25kb" }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") ?? "*",
  })
);
app.use(morgan("tiny"));

// Basic global rate limit (tighten as needed)
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
//middleware
app.use(express.urlencoded({ extended: true }));

// Health - intentionally public for monitoring
//Health check endpoints are typically meant to be publicly accessible for monitoring systems, load balancers, and deployment tools to verify the service is running.

app.get("/health", (_req, res) => res.json({ ok: true }));

//routes
app.use("/api/contact", contactRoutes);

// error handling last
app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

const port = Number(process.env.PORT) || 5000;
const start = async () => {
  try {
    app.listen(port, console.log(`server listening to ${port}...`));
  } catch (error) {
    console.error("start error at app.js:", error);
  }
};
start();

// Safety: surface unhandled rejections
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});
