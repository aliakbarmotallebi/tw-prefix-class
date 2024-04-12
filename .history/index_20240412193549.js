const fs = require('fs');
const posthtml = require('posthtml');
const prefixClass = require('posthtml-prefix-class');

const inputDirectory = './input'; 
const outputDirectory = './output'; 
const prefix = 'tw-'; 

fs.readdir(inputDirectory, (err, files) => {
    if (err) {
        console.error('Error reading input directory:', err);
        return;
    }

    files.forEach(file => {
        if (file.endsWith('.html')) {
            const inputFile = `${inputDirectory}/${file}`;
            const outputFile = `${outputDirectory}/${file}`;
            
            fs.readFile(inputFile, 'utf8', (err, html) => {
                if (err) {
                    console.error(`Error reading file ${inputFile}:`, err);
                    return;
                }
                
                posthtml()
                    .use(prefixClass({ prefix }))
                    .process(html)
                    .then(result => {
                        // نوشتن فایل HTML جدید با تغییرات
                        fs.writeFile(outputFile, result.html, 'utf8', err => {
                            if (err) {
                                console.error(`Error writing file ${outputFile}:`, err);
                                return;
                            }
                            console.log(`Classes prefixed successfully for file ${file}`);
                        });
                    });
            });
        }
    });
});
