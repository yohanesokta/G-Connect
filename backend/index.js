const express = require('express')
metaToken = "EAAYJoBCPMlUBOw6GV0fNQd0RM8X6NqldfZC5grxddS44ksfCpGTDnvXvUKS81aJPsVXCIhgqAfFOU4ZC4VZAtaFRZBW16oo7x4zCyWjZBwFgzPPyZBGzyzJOUYry0gu2BZAoRuZAohGwtZCEBIZAuVFNSQ7ZCrmdWZBLOiqGwt0zojSgow2dx1KqWXXi0PV0U1ZCZASvMTn5QWZBQZCjhxqiStdIwY36lXjRogsZD"
app = express()

app.get('/', (_, __) => {
    __.send('test')
})
app.post('/auth/login', async (req, res) => {
    genNum = () => Math.floor(Math.random(1) * 10)
    token = `${genNum()} ${genNum()} ${genNum()} ${genNum()} ${genNum()} ${genNum()}`
    number = req.header('number')
    type = "text"
    url = `https://graph.facebook.com/v20.0/434413856426057/messages`
    await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${metaToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            type: "template",
            template: {
                name: "app",
                language: { code: "en" },
                components: [{
                    type: "body",
                    parameters: [
                        {
                            type: "text",
                            text: "pesan 1"
                        },
                    ]
                }]
            },
        })
    }).then(e => e.json()).then(e => { console.log(e) })
    res.send(String(token))
})
app.listen(300, () => {
    console.log('listened')
})