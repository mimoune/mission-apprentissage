FROM node:16 as builder
WORKDIR /app
COPY package.json .
RUN npm install --only=production
COPY scripts /app
RUN node xlsx2json.js /app/input/services.xlsx

FROM node:16 
WORKDIR /app
COPY ./package.json .
RUN npm install --only=production
COPY . .
COPY --from=builder /app/output /app/output/
EXPOSE 4000
CMD ["node","/app/src/middleware.js"]
# CMD ["sh",'-c','sleep',"infinity"]