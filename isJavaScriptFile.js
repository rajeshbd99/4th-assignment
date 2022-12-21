function isJavaScriptFile(file) {
    if (typeof file !== 'string') {
        return 'false';
    }
    else {
        return file.toLowerCase().endsWith('.js');
    }
}

const fileName = 'app.js';
const file = isJavaScriptFile(fileName);
console.log(file);