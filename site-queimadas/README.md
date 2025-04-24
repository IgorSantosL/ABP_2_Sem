# Mapa de Queimadas 🌎🔥

Este é um site interativo que exibe dados de queimadas em um mapa, permitindo filtrar por estado e período.

## 🧭 Funcionalidades

* Visualização interativa de queimadas em um mapa (Leaflet).
* Filtro por estado.
* Filtro por intervalo de datas.
* Backend em Node.js com Express e PostgreSQL.
* Frontend em React com TypeScript.

## 🛠 Tecnologias

**Frontend**:
- React + TypeScript
- Vite
- React-Leaflet (Mapas)
- Tailwind CSS (estilos)

**Backend**:
- Node.js + Express
- PostgreSQL
- TypeScript

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

* **Node.js** (versão LTS recomendada): Você pode baixá-lo em [https://nodejs.org/](https://nodejs.org/)
* **npm** (geralmente instalado com o Node.js)
* **Git** (para clonar o repositório): Você pode baixá-lo em [https://git-scm.com/](https://git-scm.com/)
* **PostgreSQL**: Você precisará de um servidor PostgreSQL rodando localmente ou de acesso a um servidor remoto. Você pode baixá-lo em [https://www.postgresql.org/download/](https://www.postgresql.org/download/)

## 🚀 Configuração

Siga estas etapas para configurar e rodar o site:

1.  **Clonar o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd site-queimadas
    ```

2.  **Configurar o Frontend:**
   
    a.  Navegue até a pasta raiz do projeto (caso não esteja nela):
    
        ```bash
        cd site-queimadas
        ```
    b.  Instale as dependências do frontend:
    
        ```bash
        npm install
        npm install leaflet react-leaflet
        npm install --save-dev @types/leaflet
        ```

3.  **Configurar o Backend:**
   
    a.  Navegue até a pasta `backend`:
    
        ```bash
        cd backend
        ```
    b.  Inicialize um projeto Node.js (se ainda não houver um `package.json`):
    
        ```bash
        npm init -y
        ```
    c.  Instale as dependências do backend:
    
        ```bash
        npm install express cors pg dotenv
        npm install -D typescript ts-node @types/express @types/node
        ```
    d.  Inicialize a configuração do TypeScript (se ainda não houver um `tsconfig.json`):
    
        ```bash
        npx tsc --init
        ```
    e.  Crie um banco de dados chamado `queimadas` no seu servidor PostgreSQL.
    
    f.  Configure as variáveis de ambiente: Crie um arquivo `.env` na pasta `backend` e preencha com as informações do seu banco de dados (se você não tiver um arquivo `.env` já criado):
        ```
    
        DB_HOST=localhost
        DB_PORT=5432
        DB_USER=postgres
        DB_PASSWORD=123
        DB_NAME=queimadas
        PORT=3000
        ```
    
        **Observação:** Adapte `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD` e `DB_NAME` conforme a sua configuração do PostgreSQL. Se você alterou a porta padrão (5432) ou usa um usuário/senha diferente, atualize o arquivo `.env` adequadamente.

4.  **Executar o Backend:**
  
    a.  Certifique-se de estar na pasta `backend`:
    
        ```bash
        cd backend
        ```
    b.  Execute o servidor backend:
    
        ```bash
        npx ts-node index.ts
        ```
    
        O servidor backend estará rodando em `http://localhost:3000`.

5.  **Executar o Frontend:**
  
    a.  Navegue de volta para a pasta raiz do projeto:
    
        ```bash
        cd ..
        ```
    
    b.  Execute o servidor de desenvolvimento do Vite:
    
        ```bash
        npm run dev
        ```
    
        Isso iniciará o servidor de desenvolvimento do Vite. O frontend geralmente estará disponível em `http://localhost:5173/` (a porta pode variar).

## 🔥 Acesso ao Site

Após executar o backend e o frontend, você poderá acessar o site no endereço fornecido pelo comando `npm run dev` (geralmente `http://localhost:5173/`). Você verá um mapa e opções para filtrar os dados de queimadas por estado e período.

## Importante

* Certifique-se de que o seu servidor PostgreSQL esteja rodando e acessível.
* Verifique se as configurações de banco de dados no arquivo `.env` do backend estão corretas.
* O backend precisa estar rodando para que o frontend possa buscar os dados das queimadas e os estados disponíveis.
