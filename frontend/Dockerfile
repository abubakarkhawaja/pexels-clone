FROM node:16-alpine
WORKDIR /frontend
ENV PATH="./node_modules/.bin:$PATH"
COPY . /frontend/
RUN npm run build
CMD ["npm", "start"]