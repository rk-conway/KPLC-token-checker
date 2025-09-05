// const metreNo = document.getElementById('metreNo');
// const tokenNo = document.getElementById('tokenNo');
const checkBtn = document.getElementById('checkBtn');
const resultDiv = document.getElementById('result');

const auth = 'Bearer 49d49df53e21cfc7e0d0b18d65904cda';
const metreNo = '37187062379';


var APP = APP || {};
APP.ux.security || (APP.ux.security = {});

var publicKey = APP.ux.security.UxDoor.open(APP.view.utils.UxAppConfig.getProp().get('pubKeyUserPrivate'))
// , privateKey = APP.ux.security.UxDoor.open(APP.view.utils.UxAppConfig.getProp().get('privKeyUserPrivate'))
// , privateScope = APP.view.utils.UxAppConfig.getProp().get('privateScope');

console.log("this is the pub key",publicKey);
// console.log(privateKey);
// console.log(privateScope);
console.log("this is some bullshit")

async function checkToken() {
    console.log('Checking token...');
    fetch(`https://selfservice.kplc.co.ke/api/publicData/4/newContractList?serialNumberMeter=${metreNo}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 225fd6a42f578207612abcf0c30bdc07'
        }
    })
    .then(response => response.json())
    .then(data => {console.log(data)})
    .catch(error => {
        console.error('Error fetching data:', error);
        resultDiv.innerHTML = `<p class="error">An error occurred while checking the token. Please try again later.</p>`;
    }
);
// Clear previous results
resultDiv.innerHTML = '';
}


checkBtn.addEventListener('click', checkToken);


