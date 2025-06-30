import {test, request, expect} from "@playwright/test";

  test('GET /users - Should retrieve all 10 users successfully', async ({ request }) => {
    const response = await request.get('/users');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const responseBody = await response.json();
    expect(responseBody).toBeInstanceOf(Array);
    expect(responseBody).toHaveLength(10);
    expect(responseBody[0]).toHaveProperty('id');
    expect(responseBody[0]).toHaveProperty('name', 'Leanne Graham');
  });

  test('GET /posts/1 - Should retrieve a single post by ID successfully', async ({ request }) => {
    const response = await request.get('/posts/1');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const responseBody = await response.json();
    const post = await response.json();
    expect(post).toHaveProperty('id', 1);
    expect(post).toHaveProperty('title');
    expect(post).toHaveProperty('body');
  });

  test('POST /posts - Should create a new post successfully', async ({ request }) => {
    const newPost = {
      title: 'Playwright Test Post',
      body: 'This is a post created via Playwright API test.',
      userId: 1,
    };
    const response = await request.post('/posts', { data: newPost });
    expect(response.status()).toBe(201); 
    expect(response.headers()['content-type']).toContain('application/json');
    const createdPost = await response.json();
    expect(createdPost).toMatchObject(newPost); 
    expect(createdPost).toHaveProperty('id', 101);
  });

  























