# Кеширование статический файлов
## Pattern 1: Immutable content + long max-age
#### Устанавливаем макс эйдж в 1 год, если уверенны, что файлы не будут меняться.
## Pattern 2: Mutable content, always server-revalidated
#### Устанавливаем no-cache, тогда файлы будут кешироваться в браузере, но в браузер всега будет отправляться предзапрос на актуальность данных.

ссылка на статью: https://jakearchibald.com/2016/caching-best-practices/
