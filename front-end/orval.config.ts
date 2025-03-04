import dotenv from "dotenv";
dotenv.config();

module.exports = {
  "django-file": {
    input: "./api-docs.json",
    output: {
      workspace: "src/",
      target: "./services/api",
      fileExtension: ".ts",
      mode: "tags-split",
      baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    },
  },
};
