import transport from "../services/mailer.service.js";
import hbs from "nodemailer-express-handlebars";
import path from "path";

const sendEmail = async (req, res) => {
  /*
  Vamos criar um objeto chamado handlebarOptions para 
  apontar para a pasta de templates
  */
  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.resolve("./templates/"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./templates/"),
  };

  // Use um arquivo de template com Nodemailer
  transport.use("compile", hbs(handlebarOptions));
  const mailOptions = {
    from: "sender@mail.com", // Remetente
    to: "receiver@mail.com", // Destinatário
    subject: "Testando Node Mailer Com Template", // Assunto
    template: "email", // O nome do arquivo do template
    context: {
      name: "Felipe Silveira", // Substitui {{name}} por Aluno
      company: "Kenzie Academy", // Substitui {{company}} por Kenzie Academy
    },
  };
  transport.sendMail(mailOptions, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Email sent!");
    }
  });
};

export default sendEmail;
