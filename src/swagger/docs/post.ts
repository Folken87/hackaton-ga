/**
 * @openapi
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       properties:
 *         Id:
 *           type: integer
 *           description: Автоматически сгенерированный ID поста
 *         Author_id:
 *           type: integer
 *           description: ID автора поста
 *         Author_name:
 *           type: string
 *           description: Имя (логин) автора поста
 *         Text:
 *           type: string
 *           description: Текст поста
 *         LikeCounter:
 *           type: integer
 *           description: Счетчик лайков для поста
 *       example:
 *         Id: 1
 *         Author_id: 1
 *         Author_name: "Andrey"
 *         Text: "<span>Test 1</span>"
 *         LikeCounter: 0
 * 
 * /post/getAll:
 *   get:
 *     tags:
 *       - Посты
 *     summary: Получить все посты
 *     description: Получает список всех постов
 *     responses:
 *       200:
 *         description: Список постов
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 *       400:
 *         description: Ошибка запроса
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 * 
 * /post/create:
 *   post:
 *     tags:
 *       - Посты
 *     summary: Создать новый пост
 *     description: Создает новый пост (требуется аутентификация)
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - text
 *             properties:
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Пост успешно создан
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       400:
 *         description: Ошибка запроса
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       401:
 *         description: Не авторизован
 *       403:
 *         description: Доступ запрещен - требуются права пользователя или администратора
 *
 * /post/delete:
 *   post:
 *     tags:
 *       - Посты
 *     summary: Удалить пост
 *     description: Удаляет пост (требуется авторизация и либо владение постом, либо права администратора)
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - post_id
 *             properties:
 *               post_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Пост успешно удален
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: {}
 *       400:
 *         description: Ошибка запроса
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       401:
 *         description: Не авторизован
 *       403:
 *         description: Доступ запрещен - у вас нет прав для удаления этого поста
 *
 * /post/update:
 *   post:
 *     tags:
 *       - Посты
 *     summary: Обновить пост
 *     description: Обновляет содержимое поста (требуется авторизация и либо владение постом, либо права администратора)
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - post_id
 *               - text
 *             properties:
 *               post_id:
 *                 type: integer
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Пост успешно обновлен
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: {}
 *       400:
 *         description: Ошибка запроса
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       401:
 *         description: Не авторизован
 *       403:
 *         description: Доступ запрещен - у вас нет прав для обновления этого поста
 */

export {};  // This export is necessary to make the file a module 