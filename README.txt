# kelfor-app - PRONTO PRA RAILWAY

Este ZIP já está 100% pronto. É só subir no GitHub.

O QUE JÁ TEM DENTRO:
- Seu server.js ORIGINAL (com afiliados de Caxias do Sul)
- public/index.html básico
- Dockerfile
- package.json
- docker-compose.yml
- n8n e evolution configurados

COMO SUBIR:
1. No GitHub em wagner-luis824/kelfor-app clique em "uploading an existing file"
2. Arraste TUDO que está dentro deste ZIP (docker-compose.yml, pasta vendai, etc)
3. Commit
4. Vá na Railway > New Project > Deploy from GitHub > kelfor-app
5. Railway vai gerar um domínio, copie e cole nas Variables:
   N8N_HOST=seu-dominio.up.railway.app
   WEBHOOK_URL=https://seu-dominio.up.railway.app
   EVOLUTION_URL=https://seu-dominio.up.railway.app
