/**
 * @openapi
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the post
 *         title:
 *           type: string
 *           description: The title of the post
 *         content:
 *           type: string
 *           description: The content of the post
 *         author_id:
 *           type: integer
 *           description: The ID of the post author
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The date and time when the post was created
 *       example:
 *         id: 1
 *         title: "Sample Post"
 *         content: "This is a sample post content"
 *         author_id: 1
 *         created_at: "2023-05-15T14:30:00Z"
 * 
 * /post/getAll:
 *   get:
 *     tags:
 *       - Posts
 *     summary: Get all posts
 *     description: Retrieves a list of all posts
 *     responses:
 *       200:
 *         description: A list of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 *       400:
 *         description: Bad request
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
 *       - Posts
 *     summary: Create a new post
 *     description: Creates a new post (Admin role required)
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden - Admin role required
 */

export {};  // This export is necessary to make the file a module 