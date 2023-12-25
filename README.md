# Тестовое задание
---
## В рамках данного задания было реализовано:
1. Адаптивная верстка по макету (мобильная, планшетная и мобильная версии)
2. Интеграция с поисковым API
3. Получение и отображение данных о пользователях
4. Пагинация
5. Сортировка по количеству токенов
6. Получение и отображение данных конкретного пользователя в дровере 
7. Уведомление пользователя об ошибке
8. Уведомление пользователя об отсутствии данных
9. Разработана ui-kit система для комфортной работы (медиазапросы, цвета, шрифты и отступы вынесены в переменные, цвета разнесены по темам)
---
## Стек
* Архитектура FSD
* React
* RTK Query
* styled-components
* Для реализации скролла была использована библиотека *react-paginate*
* Для работы с датами была использована библиотека *moment*
---
## Что можно было бы улучшить?
1. Показывать loader при загрузке данных, но тк запросы отрабатывают быстро я решила это не реализовывать
2. Поддержку светлой и темной тем (для этого нужен макет со светлой темой, тк сейчас не всё корректно отображается)
3. debounce при поиске, но запросы отрабатывают быстро, поэтому это не требуется
4. При поиске подсвечивать части, которые совпали
---
## [Deploy](https://test-bit-seven.vercel.app/).
---
## Разворот проекта локально
0. Окружение: Node.jsn 18.16.1/npm 9.5.1/yarn 1.22.19
1. git clone <u>*https://github.com/sokolovskaya-evelina/test-bit.git*</u>
2. cd test-bit
3. yarn / npm i
4. yarn start / npm run start
