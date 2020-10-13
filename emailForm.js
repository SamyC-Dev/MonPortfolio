const emailForm = document.getElementById("emailForm");

const sendFeedback = (templateId, variables) => {
    window.emailjs
        .send("service_mwi9v0e", templateId, variables)
        .then((res) => {
            console.log('success !');
        })
        .catch(
            (err) =>
                console.log(err)
            // document.getElementById("erreur").innerHTML = "Probleme lors de l'envoi !!!")
        )
};

emailForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (name.value === '' || name.value == null) {
        console.log("Veuillez remplir votre nom svp");
        return false;
    };
    if (email.value === '' || email.value == null) {
        console.log("Veuillez remplir votre email pour que je vous re-contact rapidement. Merci");
        return false;
    };
    if (!email.value.match(mailformat)) {
        alert("Veuillez saisir une adresse mail valide afin que je vous re-contact rapidement. Merci");
        return false;
    }
    if (message.value === '' || message.value == null) {
        console.log("Veuillez remplir votre message afin que je vous reponde rapidement. Merci");
        return false;
    };
    if (message.value.length <= 3) {
        console.log("Votre message est un peu court ;-)");
        return false;
    };


    sendFeedback("template_2oy92rn", {
        name: name.value,
        email: email.value,
        message: message.value,
    });

    name.value = "";
    email.value = "";
    message.value = "";

});