const emailForm = document.getElementById("emailForm");

const notyf = new Notyf({
    duration: 4000,
    position: {
        x: 'right',
        y: 'top',
    }
});

const sendFeedback = (templateId, variables) => {
    window.emailjs
        .send("service_mwi9v0e", templateId, variables)
        .then((res) => {
            notyf.success("Votre mail est envoyé, je vous recontacte rapidement, Merci ;-)")
        })
        .catch((err) => notyf.error("Un problème est survenue lors de l'envoi, veuillez ré-essayer et si le problème persiste je vous invite à copier mon adresse mail et d'utiliser votre service mail habituel. Merci ;-)"))
};

emailForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (name.value === '' || name.value == null) {
        notyf.error("Veuillez remplir votre nom svp");
        return false;
    };
    if (email.value === '' || email.value == null) {
        notyf.error("Veuillez remplir votre email afin que je vous recontacte rapidement. Merci");
        return false;
    };
    if (!email.value.match(mailformat)) {
        notyf.error("Veuillez saisir une adresse mail valide afin que je vous recontacte rapidement. Merci");
        return false;
    }
    if (message.value === '' || message.value == null) {
        notyf.error("Veuillez remplir votre message afin que je vous reponde rapidement. Merci");
        return false;
    };
    if (message.value.length <= 3) {
        notyf.error("Votre message est un peu court ;-)");
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