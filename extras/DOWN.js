module.exports = {
    Destination: { /* required */
      CcAddresses: [
      ],
      ToAddresses: [
        'component+ea9c86f1-ecfc-4eac-97d9-fca2c3a46762@notifications.statuspage.io',
      ]
    },
    Message: { /* required */
      Body: { /* required */
        Html: {
         Charset: "UTF-8",
         Data: "SERVICE [x] IS DOWN"
        },
        Text: {
         Charset: "UTF-8",
         Data: "SERVICE [x] IS DOWN"
        }
       },
       Subject: {
        Charset: 'UTF-8',
        Data: 'DOWN'
       }
      },
    Source: 'monit@tekati.cloud', /* required */
    ReplyToAddresses: [
    ],
  };