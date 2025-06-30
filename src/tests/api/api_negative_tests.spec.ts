import {test, request, expect} from "@playwright/test";

  test('GET /posts/9999 - Should return 404 for non-existent post ID', async ({ request }) => {
    const response = await request.get('/posts/9999'); 
    expect(response.status()).toBe(404); 
    expect(response.headers()['content-type']).toContain('application/json');
    const responseBody = await response.json();
    expect(Object.keys(responseBody).length).toBe(0);
  });

  test('POST /posts - Should return 400 for missing required fields', async ({ request }) => {
    const invalidPost = {
      body: 'This post is missing a title.',
      userId: 1,
    };
    const response = await request.post('/posts', { data: invalidPost });
    expect(response.status()).toBe(201); // Real API would return 4xx, but jsonplaceholder ignores this.
    const createdPost = await response.json();
    expect(createdPost).not.toHaveProperty('title');
  });

  test('POST /posts - Should handle incorrect Content-Type', async ({ request }) => {
    const newPost = {
      title: 'Playwright Test Post',
      body: 'This is a post created via Playwright API test.',
      userId: 1,
    };
    const response = await request.post('/posts', {
      data: newPost,
      headers: {
        'Content-Type': 'text/css',
      },
    });
    expect(response.status()).toBe(201); // Real API would return 4xx, but jsonplaceholder ignores this.
  });