##01
Расскажите, чем на ваш взгляд, отличается хорошее клиентское приложение от плохого с
точки зрения
• пользователя;
• менеджера проекта;
• дизайнера;
• верстальщика;
• северного программиста.

Для пользователя:
 - Либо интуитивный интерфейс, либо интереактивное обучение
 - скорость загрузки сайта
 - скорость запросов

Для менеджера проекта:
 - знать что происходит
 - статус задач
 - распределение для нового функционала

Для дизайнера:
 - когда понятна цель
 - возможность аб тестирования

Для верстальщика:
 - использование последних нововведений
 - адаптивная верстка

Для северного программиста:
 - хорошая архитектура проекта
 - расширяемость проекта
 - весь код покрыт тестами

##02
Опишите основные особенности разработки крупных многостраничных сайтов,
функциональность которых может меняться в процессе реализации и поддержки.
Расскажите о своем опыте работы над подобными сайтами: какие подходы, инструменты
и технологии вы применяли на практике, с каким проблемами сталкивались и как их
решали.

- без документации и коментариев сложно разбираться (confluence)

##03
При разработке интерфейсов с использованием компонентной архитектуры часто
используются термины Presentational Components и Container Components. Что
означают данные термины? Зачем нужно такое разделение, какие у него есть плюсы и
минусы?

 Presentational - для отображения данных
 Container - для обработки данных 

 Используются для разделения получения данных  и отображения, с таким подходом возможно переиспользование.

##04
Как устроено наследование в JS? Расскажите о своем опыте реализации JS-наследования
без использования фреймворков.

 использование ключевое слово extends при работе babel или ts.
 Либо через прототипирование когда переопределяется class.prototype

##05
Какие библиотеки можно использовать для написания тестов end-to-end во фронтенде?
Расскажите о своем опыте тестирования веб-приложений.

 e2e - Не использовал, знаю лишь что тесты медлительны т.к. используют веб-драйвер

##06
 Вам нужно реализовать форму для отправки данных на сервер, состоящую из нескольких
шагов. В вашем распоряжении дизайн формы и статичная верстка, в которой не показано,
как форма должна работать в динамике. Подробного описания, как должны вести себя
различные поля в зависимости от действий пользования, в требованиях к проекту нет.
Ваши действия?

  в зависимости от внутреннего распорядка компании:
 - создать таск
 - связаться с отвественным за это 
 - сделать самому по обычным стандартам

##07
Расскажите, какие инструменты помогают вам экономить время в процессе написания,
проверки и отладки кода.

 IDE, eslint, npm

##08
какие ресурсы вы используете для развития в профессиональной сфере? Приведите
несколько конкретных примеров (сайты, блоги и так далее).
Какие еще области знаний, кроме тех, что непосредственно относятся к работе, вам
интересны?
 habr, codewars

##09
Расскажите нам немного о себе и предоставьте несколько ссылок на последние работы,
выполненные вами.

Страсть к развитию и изучения нового, как хобби занимаюсь gamedev.

Запуск:
- git clone https://github.com/sailofheaven/task_test.git
- cd task_test
- npm install

 1) npm run
 2) npm run serve и переходим по адресу http://127.0.0.1:3000
