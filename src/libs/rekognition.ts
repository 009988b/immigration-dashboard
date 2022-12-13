import { RekognitionClient, CompareFacesMatch } from "@aws-sdk/client-rekognition";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";

// AWS Region.
const REGION = "us-west-1"; //e.g. "us-east-1"

// Create an Amazon Transcribe service client object.
const rekognitionClient = new RekognitionClient({
    region: REGION,
    credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({ region: REGION }),
        identityPoolId: "us-west-1:14324cc3-34fb-419f-95c5-3e9a11d6d58",
    }),
});

const toDataUrl = (url:string, callback: any) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}

const compare = (imagepath1: string, imagepath2: string) => {
    var img1base64: ArrayBuffer | null = null;
    var img2base64: ArrayBuffer | null = null;
    toDataUrl(imagepath1, (base64: ArrayBuffer) => {
        img1base64 = base64;
    })
    toDataUrl(imagepath2, (base64: ArrayBuffer) => {
        img2base64 = base64;
    })
    if (img1base64 && img2base64) {

    }
}
