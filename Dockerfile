# Вказуємо базовий образ
FROM cypress/base:10

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо package.json і package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо всі файли проекту
COPY . .

# Запускаємо тести
CMD ["npx", "cypress", "run"]
