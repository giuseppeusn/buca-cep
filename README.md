# BUSCA CEP

Projeto de um buscador de CEP utilizando Next.js para o frontend, Node.js para o backend e uma API terceira para buscar as informações.

## Desenvolvido utilizando
> TypeScript, Node.js, Next.js, Express.js, Tailwind CSS

## Rodando o projeto
> 1 - Clone o <a href="https://github.com/giuseppeusn/busca-cep.git">projeto</a> <br>
> 2 - Entre no diretório `/busca-cep`, execute o terminal, digite o comando `npm run setup` e aguarde finalizar a instalação das dependências <br>
> 3 - No mesmo diretório e terminal, digite o comando `npm run start` e aguarde as aplicações iniciarem <br>
> 4 - Acesse `http://localhost:3000` no navegador <br>

*Caso queira acessar diretamente o backend* 
> Execute as chamadas para a API no `http://localhost:3333`

## API

- Buscar um CEP
  
```
Método: GET
Endpoint: /getAddress/:cep
Exemplo: http://localhost:3333/getAddress/00000-000
```
