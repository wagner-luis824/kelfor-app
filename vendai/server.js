
const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
let afiliados = [
  { nome: "Joao - Centro", vendas: 12, cidade: "Caxias do Sul" },
  { nome: "Maria - Desvio Rizzo", vendas: 9, cidade: "Caxias do Sul" },
  { nome: "Carlos - Ana Rech", vendas: 7, cidade: "Caxias do Sul" }
];
app.get('/api/ranking', (req,res)=>{ res.json(afiliados.sort((a,b)=>b.vendas-a.vendas)); });
app.get('/api/status', (req,res)=>{ res.json({ status: 'online', sistema: 'VendAI Serra', leads: 139000, afiliados: 400, servidor: 'note win7 32bits disco D' }); });
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log('VendAI rodando em http://localhost:5678 - Disco D:'));
