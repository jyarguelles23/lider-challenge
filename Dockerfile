FROM node:12.18.3 as frontend-build
WORKDIR /lider-challenge

COPY package.json ./
RUN npm config set package-lock false
RUN npm install

COPY . ./
RUN npm run build

FROM nginx:1.14-alpine
COPY --from=frontend-build /lider-challenge/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]