// Contact Email Form
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const submit = document.getElementById('submit');

submit.addEventListener('click', function(e){
    e.preventDefault()
    name.value;
    email.value;
    subject.value;
    message.value;
    let body = "name: " + name + "<br/> email: " + email + "<br/> subject: " + subject + "<br/> message: " + message;

    Email.send({
        SecureToken : "28d6d4b3-d61c-4d26-9767-8f8bb4338de4",
        To : 'kkaseykkrzan@gmail.com',
        From : 'kkaseykkrzan@gmail.com',
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );
})