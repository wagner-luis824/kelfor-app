FROM node:18-alpine
WORKDIR /app
COPY vendai/package*.json ./
RUN npm install --production
COPY vendai/. ./
EXPOSE 3000
CMD ["node", "server.js"]
