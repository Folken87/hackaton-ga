/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - login
 *         - password
 *       properties:
 *         Id:
 *           type: integer
 *           description: Автоматически сгенерированный ID пользователя
 *         Login:
 *           type: string
 *           description: Логин пользователя (имя пользователя)
 *         Password:
 *           type: string
 *           description: Пароль пользователя (хранится в хешированном виде)
 *         Role_id:
 *           type: integer
 *           description: ID роли пользователя
 *       example:
 *         Id: 1
 *         Login: admin
 *         Password: (хешированный)
 *         Role_id: 1
 *     LoginResponse:
 *       type: object
 *       properties:
 *         user:
 *           $ref: '#/components/schemas/User'
 *         token:
 *           type: string
 *           description: JWT токен
 * 
 * /auth/register:
 *   post:
 *     tags:
 *       - Аутентификация
 *     summary: Регистрация нового пользователя
 *     description: Создает новую учетную запись пользователя с предоставленными учетными данными
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - login
 *               - password
 *               - role_id
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *               role_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Пользователь успешно зарегистрирован
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Некорректный запрос (недопустимые входные данные или пользователь уже существует)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 * 
 * /auth/login:
 *   post:
 *     tags:
 *       - Аутентификация
 *     summary: Вход пользователя
 *     description: Аутентифицирует пользователя и возвращает JWT токен
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - login
 *               - password
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Вход успешен
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       400:
 *         description: Неверные учетные данные
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 * 
 * /auth/logout:
 *   post:
 *     tags:
 *       - Аутентификация
 *     summary: Выход пользователя
 *     description: Очищает токен аутентификации
 *     responses:
 *       200:
 *         description: Выход успешен
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: {}
 *       401:
 *         description: Не авторизован
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

export {};  // This export is necessary to make the file a module 