const fs = require('fs');
const yaml = require('js-yaml');

function addAdditionalProperties(filePath) {
  try {
    // Load the YAML file
    const openapiDoc = yaml.load(fs.readFileSync(filePath, 'utf8'));

    function traverse(obj) {
      if (typeof obj !== 'object' || obj === null) return;

      if (obj.properties && !obj.hasOwnProperty('additionalProperties')) {
        obj.additionalProperties = false;
      }

      for (const key in obj) {
        traverse(obj[key]);
      }
    }

    traverse(openapiDoc);

    // Convert back to YAML with proper formatting
    const updatedYaml = yaml.dump(openapiDoc, { lineWidth: -1, noRefs: true });

    // Write the updated YAML back to the file
    fs.writeFileSync(filePath, updatedYaml, 'utf8');

    console.log('Successfully added additionalProperties: false where needed.');
  } catch (error) {
    console.error('Error processing YAML file:', error);
  }
}

// Run function on the OpenAPI file
addAdditionalProperties('../logistics copy.yaml');