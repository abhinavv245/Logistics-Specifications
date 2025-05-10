const fs = require("fs-extra");
const path = require("path");
const yaml = require("yaml");
const axios = require("axios");

const inputDir = "../examples/logistics copy";  // Root directory containing YAML files
const apiEndpoint = "http://localhost:3000/transform";  // Your API endpoint

// Function to find all YAML files recursively
async function getYamlFiles(dir) {
    let yamlFiles = [];
    const files = await fs.readdir(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stats = await fs.stat(filePath);

        if (stats.isDirectory()) {
            // Recursively search in subdirectories
            yamlFiles = yamlFiles.concat(await getYamlFiles(filePath));
        } else if (file.endsWith(".yaml") || file.endsWith(".yml")) {
            yamlFiles.push(filePath);
        }
    }
    return yamlFiles;
}

// Function to process each YAML file
async function processYamlFile(filePath) {
    try {
        const yamlContent = await fs.readFile(filePath, "utf8");

        // Parse YAML
        let yamlObject = yaml.parse(yamlContent);

        // Ensure "value" exists
        if (!yamlObject.value) {
            console.warn(`⚠️ Skipping ${filePath}: No 'value' field found.`);
            return;
        }

        // Send only "value" field to the API
        const response = await axios.post(apiEndpoint, yamlObject.value);
        console.log(`✅ Transformed JSON received for: ${filePath}`);

        // Update "value" with transformed data
        yamlObject.value = response.data;

        // Convert back to YAML and write to file
        const newYamlContent = yaml.stringify(yamlObject);
        await fs.writeFile(filePath, newYamlContent, "utf8");

        console.log(`✅ Updated YAML file written: ${filePath}`);

    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
    }
}

// Main function to process all YAML files
async function processAllYamlFiles() {
    try {
        const yamlFiles = await getYamlFiles(inputDir);

        if (yamlFiles.length === 0) {
            console.log("❌ No YAML files found.");
            return;
        }

        console.log(`📂 Found ${yamlFiles.length} YAML files. Processing...`);

        for (const file of yamlFiles) {
            await processYamlFile(file);
        }

        console.log("🚀 All YAML files processed successfully.");
    } catch (error) {
        console.error("❌ Error processing files:", error.message);
    }
}

// Run the script
processAllYamlFiles();