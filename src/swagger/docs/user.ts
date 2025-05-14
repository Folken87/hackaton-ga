/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
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
 *           description: ID роли пользователя (1 - пользователь, 2 - администратор)
 *         Is_banned:
 *           type: boolean
 *           description: Флаг, указывающий, заблокирован ли пользователь
 *       example:
 *         Id: 1
 *         Login: "admin"
 *         Password: "(хешированный)"
 *         Role_id: 2
 *         Is_banned: false
 * 
 * /user/ban:
 *   post:
 *     tags:
 *       - Пользователи
 *     summary: Заблокировать пользователя
 *     description: Блокирует указанного пользователя (требуется аутентификация и права администратора)
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user_id
 *             properties:
 *               user_id:
 *                 type: integer
 *                 description: ID пользователя, которого нужно заблокировать
 *     responses:
 *       201:
 *         description: Пользователь успешно заблокирован
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
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
 *         description: Доступ запрещен - требуются права администратора
 *       404:
 *         description: Пользователь не найден
 */

export {};  // This export is necessary to make the file a module 