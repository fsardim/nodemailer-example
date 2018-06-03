const nodemailer = require('nodemailer');
const emailData = require('./system_files/email');

let transporter = nodemailer.createTransport({
    pool: true,
    host: emailData.host,
    port: 465,
    secure: true,
    auth: {
        user: emailData.from,
        pass: emailData.pass
    }
});

let data = {
    from: emailData.from,
    to: ['felipesardim@gmail.com', 'contato@rideo.com.br'],
    subject: 'Seja bem-vindo à RideO!',
    text: 'Plaintext version of the message',
    html: '<p>HTML version of the message</p>'
};

transporter.sendMail(data, (erro, info) => {
    if(erro) console.log('Erro: '+JSON.stringify(erro));
    if(info) console.log('Info: '+JSON.stringify(info));
});