exports.find = (req,res)=>{
    if(req.query.link)
    {
        let url = req.query.link;
        console.log(url);
        const fetch = require('node-fetch');

        const fs = require('fs');
        const https = require('https');
        https.get(url, (res) => {
        console.log(res.headers.location);
        });
/***
        const response =  fetch(url);
        if (response.status === 200) {
            const params = {
            apikey: '8863a72ba5cea83f5cd785b8ae3d9634b3357882e4ba6a92e49b8e4667cb37b6',
            resource: url,
            };
            const virusTotalResponse = fetch(
                'https://www.virustotal.com/vtapi/v2/url/report',
                {
                method: 'GET',
                qs: params,
                }
            );
            if (virusTotalResponse.status === 200) {
                const virusTotalData = virusTotalResponse.json();
                const detectionRate = virusTotalData.positives / virusTotalData.total;
                console.log('Detection rate: ', detectionRate);
            }
            }
*/
        ///YOUR CODE
    }
}