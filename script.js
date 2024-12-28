function message() {
    let name = document.getElementById("name").value;
    let flavor = document.getElementById("flavor").value;
    let egg = document.getElementById("egg").value;

    const webhook = "https://discord.com/api/webhooks/1322415895699783761/43Ecjna1dKYVsTHEP7a38MhWB9ZSQV4Gx6j24TT7xOY-CV6wxcpYH9Ir_e5Fes4VMNbT";
    const contents = `Name: ${name}\nFlavor: ${flavor}\nEgg: ${egg}`;
    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        content: contents
    }
    request.send(JSON.stringify(params));
}