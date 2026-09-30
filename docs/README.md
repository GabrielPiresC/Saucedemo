# 🧪 SauceDemo - Testes Automatizados com Cypress

Projeto de automação de testes E2E desenvolvido com **Cypress** utilizando a aplicação SauceDemo como ambiente de testes.

## 🎯 Objetivo do projeto

Automatizar os principais fluxos da aplicação SauceDemo, validando comportamentos essenciais do sistema e praticando conceitos utilizados no dia a dia de QA.

Além da automação, o projeto contempla a documentação dos casos de teste, definição de prioridade e criticidade e integração dos testes com uma pipeline de CI.

## 🧪 Cenários testados

Atualmente o projeto possui testes para:

- Login com credenciais válidas
- Login com credenciais inválidas
- Fluxo de compra
- Logout do sistema

Os casos de teste detalhados estão disponíveis em:

`docs/casos-de-teste.md`

## 🛠️ Tecnologias utilizadas

- JavaScript
- Cypress
- Node.js
- npm
- Git
- GitHub
- GitHub Actions
- Cypress Cloud

## 🚀 Como executar o projeto

### 1. Clone o repositório

    git clone <URL-DO-REPOSITORIO>

### 2. Acesse a pasta

    cd Saucedemo

### 3. Instale as dependências

    npm install

### 4. Abra o Cypress

    npm run cy:open

Ou execute os testes diretamente pelo terminal:

    npm test

## ⚙️ Integração Contínua

O projeto utiliza **GitHub Actions** para executar automaticamente os testes Cypress a cada `push` realizado no repositório.

As execuções também podem ser registradas no **Cypress Cloud**.

A chave utilizada para comunicação com o Cypress Cloud é armazenada utilizando **GitHub Secrets**, evitando a exposição de informações sensíveis no código-fonte.

## 👨‍💻 Autor

Desenvolvido por Gabriel Pires como projeto de estudo e prática de **Quality Assurance e automação de testes**.