// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-2';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-east-2:d95ee91b-478b-4f3d-a542-8ba985f7f5a9"
});

const Name = document.getElementById("Name");
const Email = document.getElementById("Email");
const CustomerType = document.getElementById("CustomerType");
const Message = document.getElementById("Message");
const Submit = document.getElementById("Submit");
const successfullyMessage = document.getElementById("successfullyMessage");
const failedMessage = document.getElementById("failedMessage");

Submit.addEventListener('click',function snsTopic() {
    // Create publish parameters
    const params = {
        TopicArn: "arn:aws:sns:us-east-2:237600839617:KTWebsite",
        Subject: "From KT Website",
        Message:
            "Name: " + Name.value +
            "\nEmail: " + Email.value +
            "\nCustomer Type: " + CustomerType.value +
            "\nMessage:\n" + Message.value
    };

    // Publish the message to topic
    const publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'});
    if(Name.value === "" || Email.value  === "" || CustomerType.value  === "" || Message.value  === "") {
        successfullyMessage.style.display = "none";
        failedMessage.style.display = "flex";
        return console.log("Error:empty")
    } else {
        publishTextPromise.publish(params).promise()
        .then(() =>{
            Name.value ="";
            Email.value ="";
            CustomerType.value ="";
            Message.value ="";

            successfullyMessage.style.display = "flex";
            failedMessage.style.display = "none";
        })
    }
});