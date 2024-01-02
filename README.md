# EcoAdministração

## Sobre o projeto:
EcoAdministração é um sistema de gerenciamento de resíduos sólidos para prefeituras e empresas. A idéia para criar o sofware começou quando estive envolvido na construção do plano de saneamento de básico da cidade de Santa Vitória do Palmar, há alguns anos atrás, e notei que a prefeitura não possuia nenhum sistema para fazer o gerencimanto de dados dos resíduos sólidos gerados no município. Então, entrei em contato com a prefeitura e mostrei o meu sistema para resolver o problema. As funcionalidades do sistema foram projetadas para atender às exigências dos órgãos reguladores no gerenciamento de resíduos, tais como: estatísticas dos resíduos gerados, números por categoria de resíduo, quantificação por bairro e rotas. Esse projeto foi de extensão da minha faculdade, Uninter. O Link abaixo é para ver uma demonstração do projeto, segue o link: https://gerenciamento-residuos-solidos.onrender.com/

## Funcionalidades:
- Quantificação de todos os resíduos coletados, mostrando a média por coleta:
![project7-1](https://github.com/devmarcoskc/Gerenciamento-residuos-MERN-stack/assets/118542843/a2ae8b5d-2869-4dab-8c1a-6b1eab77ed92)
- Histórico das coletas feitas, mostrando a quantidade de resíduos coletados, qual rota foi feita, e o bairro localizado:
![project7-2](https://github.com/devmarcoskc/Gerenciamento-residuos-MERN-stack/assets/118542843/b91c682f-fc2c-4d4b-8659-84f1792c55a1)
- Obter dados dos resíduos coletados e médias gerais por bairro:
![filtros-residuos](https://github.com/devmarcoskc/Gerenciamento-residuos-MERN-stack/assets/118542843/c9a8fe8d-24f6-4caf-baf1-b3147e90fcab)
- Colocar anotações para seus colegas lerem:
![project7-3](https://github.com/devmarcoskc/Gerenciamento-residuos-MERN-stack/assets/118542843/1761727f-815e-4b2a-99b6-891ecf0d0ff4)

## Instalação:
Para executar o projeto siga os passos:  
1. Clone este repositório:

   `https://github.com/devmarcoskc/Gerenciamento-residuos-MERN-stack`
2. Instale as dependências no client e server:
   
     `npm install`
3. Crie um banco de dados com atlas mongodb:
   
    `https://www.mongodb.com/atlas/database`
4. Na pasta server crie um arquivo de ambiente ".env" e adicione as seguintes variáveis:

     `JWT_SECRET = 'adicione uma senha forte aqui'`
   
     `MONGO_URL = 'adicione aqui a URL do seu banco de dados criado'`
   
     `PORT = 'escolha uma porta para rodar o seu server'.`
   
6. Na pasta client crie um arquivo de ambiente ".env" e adicione a seguinte variável:
   
    `VITE_BASE_URL = 'http://localhost:SUA PORTA ESCOLHIDA AQUI'`
7. Para rodar o Back End use o seguinte comando:

   `npm run start`
8. Para rodar no Front End use o seguinte comando:

   `npm run dev`
