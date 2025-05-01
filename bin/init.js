#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { promisify } from "util";

// Get the current directory path for the ES module
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const questions = [
  {
    type: "input",
    name: "appName",
    message: "What is the name of your Express app?",
    default: "my-express-app",
  },
  {
    type: "confirm",
    name: "useZod",
    message: "Do you want to use Zod for validation?",
    default: true,
  },
];

const copyFile = promisify(fs.copyFile);
const mkdir = promisify(fs.mkdir);

inquirer.prompt(questions).then((answers) => {
  const appName = answers.appName;
  const useZod = answers.useZod;
  const appDir = path.join(process.cwd(), appName);

  // Create the main app directory if it doesn't exist
  if (!fs.existsSync(appDir)) {
    mkdir(appDir, { recursive: true })
      .then(() => {
        createStructure(appDir, useZod, appName);
      })
      .catch((err) => {
        console.error("Error creating app directory:", err);
      });
  } else {
    createStructure(appDir, useZod, appName);
  }

  console.log(`Your Express app has been created in ${appDir}`);
  console.log("Don't forget to run 'npm install' to install the dependencies.");
});

async function createStructure(appDir, useZod, appName) {
  const folders = [
    "public",
    "controllers",
    "routes",
    "db",
    "middleware",
    "views",
    "validations",
  ];

  // Create folders recursively
  for (const folder of folders) {
    try {
      const folderPath = path.join(appDir, folder);
      await mkdir(folderPath, { recursive: true });
      console.log(`Created folder: ${folderPath}`);
    } catch (err) {
      console.error(`Error creating folder ${folder}:`, err);
    }
  }

  // Write app.js
  try {
    fs.writeFileSync(path.join(appDir, "app.js"), getAppJsTemplate());
    console.log("Created app.js");
  } catch (err) {
    console.error("Error creating app.js:", err);
  }

  // Write package.json with app name replaced
  try {
    const packageJsonPath = path.join(__dirname, "../template/package.json");
    console.log("Reading package.json from:", packageJsonPath);

    const packageJsonTemplate = fs.readFileSync(packageJsonPath, "utf8");
    const packageJsonContent = packageJsonTemplate.replace(
      "{{appName}}",
      appName
    );

    fs.writeFileSync(path.join(appDir, "package.json"), packageJsonContent);
    console.log("Created package.json");
  } catch (err) {
    console.error("Error reading or writing package.json:", err);
  }

  // Optionally write Zod validation files
  if (useZod) {
    try {
      fs.writeFileSync(
        path.join(appDir, "validations/schema.js"),
        getZodTemplate()
      );
      console.log("Created validations/schema.js");
    } catch (err) {
      console.error("Error creating Zod validation schema:", err);
    }
  }
}

function getAppJsTemplate() {
  return `
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

// Example route setup
// const userRoutes = require('./routes/userRoutes');
// app.use('/users', userRoutes);

app.listen(port, () => {
   console.log(\`Server running at http://localhost:\${port}\`);
});
  `;
}

function getZodTemplate() {
  return `
import { z } from 'zod';

// Example Zod schema for user validation
const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
});

export { userSchema };
  `;
}
