# Bet Acadêmica

## Integrantes

* Silvia Debussi de Paiva
* João Victor Henriques Machado

---

## Descrição do Sistema

A Bet Acadêmica é uma aplicação web desenvolvida em React que simula uma plataforma de apostas esportivas fictícias para fins exclusivamente acadêmicos.

O sistema possui dois perfis de acesso:

* Administrador: responsável por cadastrar eventos esportivos, encerrar apostas e informar resultados.
* Usuário/Jogador: responsável por visualizar eventos, realizar apostas fictícias, acompanhar saldo e consultar histórico.

Todos os valores e movimentações são simulados e não possuem qualquer relação com apostas reais.

---

## Funcionalidade Extra

### Ranking de Jogadores

Foi implementado um sistema de ranking que exibe os usuários ordenados pelo saldo fictício acumulado.

O ranking é atualizado automaticamente conforme os resultados das apostas são processados.

---

## Regras de Negócio

* Apenas administradores podem cadastrar eventos.
* Apenas administradores podem encerrar eventos.
* Usuários podem apostar apenas em eventos abertos.
* O valor apostado é descontado do saldo do usuário.
* Quando um evento é encerrado, as apostas são processadas automaticamente.
* Usuários que acertam o resultado recebem o dobro do valor apostado.
* Usuários que erram perdem o valor apostado.
* O histórico registra todas as apostas realizadas.

---

## Tecnologias Utilizadas

* React
* React Router DOM
* Context API
* React Hooks
* JSON Server
* Bootstrap
* Axios
* GitHub

---

## Como Executar o Projeto

### Instalar dependências

```bash
npm install
```

### Executar o React

```bash
npm run dev
```

### Executar o JSON Server

```bash
npm run server
```

---

## Usuários de Teste

### Administrador

Email: [admin@bet.com](mailto:admin@bet.com)

Senha: 123

### Usuário

Email: [joao@bet.com](mailto:joao@bet.com)

Senha: 123

---

## Principais Rotas

| Rota          | Descrição                  |
| ------------- | -------------------------- |
| /             | Login                      |
| /admin        | Dashboard do Administrador |
| /eventos      | Gerenciamento de Eventos   |
| /criar-evento | Cadastro de Eventos        |
| /usuario      | Dashboard do Usuário       |
| /apostar      | Realização de Apostas      |
| /historico    | Histórico de Apostas       |
| /ranking      | Ranking de Jogadores       |

---

## Divisão de Tarefas

### Integrante 1

* Estrutura inicial do React
* Implementação do Login
* Rotas protegidas
* Context API
* Integração com JSON Server*
* Cadastro de eventos*
  
### Integrante 2

* Sistema de apostas
* Histórico
* Ranking


---

## Principais Telas

* Tela de Login
* Dashboard do Administrador
* Cadastro de Eventos
* Listagem de Eventos
* Dashboard do Usuário
* Tela de Apostas
* Histórico de Apostas
* Ranking de Jogadores


## Melhorias Futuras

* Sistema de odds (cotações).
* Mais modalidades esportivas.
* Estatísticas avançadas para administradores.
* Perfil detalhado dos jogadores.
* Sistema de notificações.
* Deploy online da aplicação.

---

## Repositório

Projeto desenvolvido para fins acadêmicos na disciplina de Desenvolvimento Web utilizando React.
