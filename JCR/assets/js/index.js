//counter
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://bvr4gvb3qbttgnl7fanvbxggkm0tbhmr.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

updateCounter();
