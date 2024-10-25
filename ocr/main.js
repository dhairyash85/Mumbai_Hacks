const { exec } = require('child_process');

function callPythonScript(filePath) {
    const pythonScriptPath = 'main.py';  
    exec(`python3 ${pythonScriptPath} "${filePath}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing script: ${error.message}`);
        }
        if (stderr) {
            console.error(`Script stderr: ${stderr}`);
        }
        console.log(`Script output: ${stdout}`);
    });
}

const documentPath = process.argv[2];  
if (!documentPath) {
    console.error("Please provide a file path as an argument.");
    process.exit(1);
}

callPythonScript(documentPath);
