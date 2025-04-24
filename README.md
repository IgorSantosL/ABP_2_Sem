# ABP_2_Sem

# Mapa de Queimadas 🌎🔥

🌎 Site de Monitoramento de Queimadas

Este projeto é um sistema completo de visualização de queimadas no Brasil, que utiliza mapas interativos e dados filtráveis por estado e data. Ele é dividido entre frontend em React + TypeScript e backend em Node.js + Express + PostgreSQL + PostGIS.

🧩 Funcionalidades
Exibe queimadas em um mapa interativo com Leaflet.

Filtro por estado e intervalo de datas.

Backend com API REST em Node.js (Express).

Integração com banco PostgreSQL usando PostGIS.

Estrutura em TypeScript (frontend e backend).

⚙️ Tecnologias
Frontend:

React

TypeScript

Vite

Leaflet / React-Leaflet

Backend:

Node.js

Express

PostgreSQL

PostGIS

pg (PostgreSQL client)

dotenv

cors

🗂️ Estrutura de Pastas
csharp
Copiar
Editar
site-queimadas/
├── backend/           # API em Node.js
├── public/            # HTML base
├── src/               # Código React/TS
├── .gitignore
├── vite.config.ts
├── tsconfig.json
└── README.md
🚀 Como Rodar Localmente
📥 1. Clone o Repositório
bash
Copiar
Editar
git clone https://github.com/seu-usuario/site-queimadas.git
cd site-queimadas
🧱 2. Configure o Banco de Dados PostgreSQL + PostGIS
Crie um banco chamado queimadas.

Ative a extensão PostGIS:

sql
Copiar
Editar
CREATE EXTENSION postgis;
Crie a tabela queimadas com estrutura semelhante a:

sql
Copiar
Editar
CREATE TABLE queimadas (
  id SERIAL PRIMARY KEY,
  "DataHora" TIMESTAMP,
  "Estado" VARCHAR,
  "Municipio" VARCHAR,
  "Latitude" DOUBLE PRECISION,
  "Longitude" DOUBLE PRECISION,
  geom GEOMETRY(Point, 4326)
);
Insira os dados (ex: importando CSV do INPE).

🔧 3. Backend – Instalação e Execução
bash
Copiar
Editar
cd backend
npm init -y
npm install express cors pg dotenv
npm install -D typescript ts-node @types/express @types/node
npx tsc --init
🔐 Arquivo .env
Crie o arquivo backend/.env:

env
Copiar
Editar
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=123
DB_NAME=queimadas
PORT=3000
▶️ Execute o Backend
bash
Copiar
Editar
npx ts-node index.ts
🌐 4. Frontend – Instalação e Execução
bash
Copiar
Editar
cd ..
npm create vite@latest
# Escolha um nome (ex: site-queimadas) e selecione React + TypeScript
cd site-queimadas
npm install
npm install leaflet react-leaflet
npm install --save-dev @types/leaflet
▶️ Execute o Frontend
bash
Copiar
Editar
npm run dev
Abra no navegador: http://localhost:5173

✅ Testando
O backend deve estar rodando em http://localhost:3000.

O frontend deve abrir em http://localhost:5173.

A página carregará os estados disponíveis do banco e permitirá aplicar filtros.

Os pontos serão exibidos no mapa conforme os filtros.
