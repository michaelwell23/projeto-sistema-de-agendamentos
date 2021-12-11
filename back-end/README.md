<h1 align="center">
  Service Scheduling
</h1>

<p align="center">
  Back-end da aplicação
</p>

---
Antes de clonar o projeto é bom ter em mente que algumas configurações são necessárias:

* Você precisa configurar os bancos de dados utilizados na aplicação, você pode escolher o de sua preferecia desde que esteja configurado no arquivo `.env.exemple`

* É necessário a configuração do nodemailer, ele que faz a configuração de envio de email.

* Para ambiente de desenvolvimento é necessário configurar o Sentry.

Após a configuração, você pode renomear o arquivo para somente `.env`.


## Instalação

```
 - Clone o repositório ou faça o download.

 - Depois que o projeto estiver em seu computador, abre o terminal na pasta do projeto e de o comando npm install ou

 - Depois rode o comando npx sequelize db:migrate.

- E por fim npm run dev para iniciar o projeto. E em outro terminal rode o comando npm run queue.

```




