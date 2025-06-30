import {test, request, expect} from "@playwright/test";
    
  test('GET /posts/101 - Should return 404', async ({ request }) => {
    const response = await request.get('/posts/101');
    expect(response.status()).toBe(404);
  });

  test('GET /posts/-1 - Should return 404 or empty', async ({ request }) => {
    const response = await request.get('/posts/-1');
    expect(response.status()).toBe(404);
    const body = await response.text();
    expect(body).toBe('{}');
  });

  test('POST /posts - Should handle very large payload', async ({ request }) => {
    const largeBody = 'a'.repeat(5000); 
    const largePost = {
      title: 'Large Payload Test',
      body: largeBody,
      userId: 1,
    };
    const response = await request.post('/posts', { data: largePost });
    expect(response.status()).toBe(201);
    const createdPost = await response.json();
    expect(createdPost.body).toBe(largeBody);
  });
