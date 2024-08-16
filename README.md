# Desafio Parcelex
Este é um desafio para a empresa Parcelex, que utiliza as seguintes tecnologias:

- Vue 3
- Vite
- TypeScript
- Tailwind CSS
- Docker
- Docker Compose
- Vitest
- Cypress

## Como rodar o projeto

Para rodar o projeto, siga as instruções abaixo:

1. Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.

2. Abra o terminal na pasta raiz do projeto.

3. Execute o comando `npm install` para instalar as dependências do projeto.

4. Execute o comando `docker-compose up --build` para iniciar os containers.

5. Aguarde até que todos os serviços estejam prontos. O projeto estará rodando em `http://localhost:5173`.

6. Certifique-se de que o projeto está rodando corretamente acessando `http://localhost:5173` em seu navegador.

7. Para executar os testes unitários, utilize o comando `npm run test`.

8. Após confirmar que o projeto está funcionando, execute o comando `npm run cy:open` para abrir o Cypress e executar os testes e2e.