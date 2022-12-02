FROM node:16 as builder
WORKDIR /app
COPY package.json .
RUN npm install --only=production
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/build/ /usr/share/nginx/html
