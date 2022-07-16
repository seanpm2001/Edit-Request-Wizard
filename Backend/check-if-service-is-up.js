const fetch = require('node-fetch');
const { exec } = require('child_process')

fetch('https://edit-wizard.toolforge.org/ping').then(function(response){
    const statusCode = res.statusCode;
    const statusText = res.statusText;
    console.log(statusCode);
    if(!response.ok){
        exec(`echo "Edit Request Wizard service is not running. You are requested to look into it as soon as possible.\n Status Code : ${statusCode} \n Status Text : ${statusText}" | /usr/bin/mail -s "Edit-Wizard server not running" tools.edit-wizard@toolforge.org`, (err, output) => {})
    }
})