const fs = require("fs");
const yaml = require("js-yaml");

// Function to recursively convert "code" keys to uppercase
function transformCodes(obj) {
  if (Array.isArray(obj)) {
    return obj.map(transformCodes);
  } else if (typeof obj === "object" && obj !== null) {
    for (const key in obj) {
      if (key === "code" && typeof obj[key] === "string") {
        obj[key] = obj[key].toUpperCase();
      } else {
        obj[key] = transformCodes(obj[key]);
      }
    }
  }
  return obj;
}

// Main function to update the YAML file
function updateYamlFile(inputFile) {
  try {
    // Read the YAML file
    const fileContents = fs.readFileSync(inputFile, "utf8");
    const yamlData = yaml.load(fileContents);

    // Transform codes
    const updatedYamlData = transformCodes(yamlData);

    // Write back to the same file
    fs.writeFileSync(inputFile, yaml.dump(updatedYamlData, { lineWidth: -1 }), "utf8");
    console.log(`Updated YAML file: ${inputFile}`);
  } catch (error) {
    console.error("Error processing YAML file:", error);
  }
}

// Read file path from command-line arguments
const [, , inputFile] = process.argv;
if (!inputFile) {
  console.error("Usage: node updateYaml.js <input.yaml>");
  process.exit(1);
}

// Run the function
updateYamlFile(inputFile);