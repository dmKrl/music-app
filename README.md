# Музыкальный веб-сервис для прослушивання музыки
Данное приложение позволяет пользователям получить доступ к онлайн-сервису для прослушивания песен имеющихся в базе данных, Api предоставил Skypro.

## Описание работы проекта

Главная страница содержит список всех доступных треков. Получение треков осуществляется из базы данных и их перечень сохраняется в redux. 
Пользователь имеет возможность добавлять/удалять треки из категории "Мои треки". Также, в приложении есть функционал фильтрации по дате, исполнителю и альбому, и поиск треков в списке.
Есть категории треков, с возможностью перехода к каждой. 

Пользователь может авторизоваться/зарегистрироваться в приложении.

В приложении настроен авторефреш access_token, чтобы пользователя не редиректило на страницу авторизации. При прослушивании трека, пользователь может воспользоваться зацикливанием трека,
или использовать функцию перемешивания списка треков. При окончании трека, включается следующий. По завершении списка треков, последний трек останавливается. 
В плеер баре пользователь может добавлять и удалять трек из избранного.


## Технический стек:
React
Redux
RTK Query
Styled components
React Router

## Установка и запуск проекта:
Необходимо кланировать репозиторий: git repo clone dm_krl/music-app;  
Установить заисимости: npm install;  
Запустить приложение: npm run start;  
Откройте http://localhost:3000, чтобы просмотреть приложение.  


