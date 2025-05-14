/**
 * @openapi
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       properties:
 *         Id:
 *           type: integer
 *           description: Автоматически сгенерированный ID комментария
 *         Post_id:
 *           type: integer
 *           description: ID поста, к которому относится комментарий
 *         Author_id:
 *           type: integer
 *           description: ID автора комментария
 *         Text:
 *           type: string
 *           description: Текст комментария
 *       example:
 *         Id: 1
 *         Post_id: 1
 *         Author_id: 1
 *         Text: "Это пример комментария"
 * 
 * /comments/create:
 *   post:
 *     tags:
 *       - Комментарии
 *     summary: Создать новый комментарий
 *     description: Создает новый комментарий к посту (требуется аутентификация)
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
 *       201:
 *         description: Комментарий успешно создан
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
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
 *       404:
 *         description: Пост не найден
 * 
 * /comments/getByPostId:
 *   post:
 *     tags:
 *       - Комментарии
 *     summary: Получить комментарии к посту
 *     description: Возвращает список всех комментариев к указанному посту (требуется аутентификация)
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
 *       201:
 *         description: Список комментариев
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comment'
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
 *       404:
 *         description: Пост не найден
 */

export {};  // This export is necessary to make the file a module 