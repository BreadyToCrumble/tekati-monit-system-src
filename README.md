# tekati-monit-system-src

This is a microservice I wrote to monitor the HTTP status code of a website, and if it's not a passing status code, to send a email through AWS SES alerting of a outage.
I intended for it to be used to automate updating a statuspage.io site, but I'm sure others can find a use for it as well. 

# Setup
Node and NPM is needed, as is your AWS shared credentials file. Assuming you have these setup and in the right place, you can run npm install inside the root of the code, configure
your emails in both the UP.js and DOWN.js files in the extras folder, and either run it with node, or build the docker container and deploy it to whatever. Not too hard, but be sure
your AWS account is out of the SES sandbox, or if you're in the sandbox, who you're sending the email (and sending it from) is verified in the web panel.
