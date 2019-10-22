'use strict';

const app = require('express')()
const yaml = require('js-yaml')
const fs = require('fs')

let config = yaml.safeLoad(fs.readFileSync('build.yml', 'utf8')).application

app.get('/', (req, res) => {
    res.send('Hello World')
})

// status page
app.get('/status', (req, res) => {

    try {
        let output = {
            [config.name]: [{
                "version": config.version,
                "description": config.description,
                "lastcommitssha": process.env.BUILD_HASH
            }]
        }
        res.status(200).send(output)
    } catch (err) {
        res.status(400).send(err)
    }
})

const server = app.listen(config.port, () => {
    console.log(`Listening on port: ${config.port}`);
});

module.exports = server
