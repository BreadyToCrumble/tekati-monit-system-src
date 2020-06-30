module.exports = {
    Destination: { /* required */
      CcAddresses: [
      ],
      ToAddresses: [
        process.env.receiveemail,
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
    Source: process.env.senderemail, /* required */
    ReplyToAddresses: [
    ],
  };