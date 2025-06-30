import {test, request, expect} from "@playwright/test";
import testPost from "./test_data/post.json";
import updatePost from "./test_data/post_update.json";

  test('POST /posts - Should create multiple posts using data from external file', async ({ request }) => {
    const response = await request.post('/posts', {
      data: testPost,
      headers: {
      'Content-Type': 'application/json'
    },
    });
    expect(response.status()).toBe(201);
    expect(response.headers()['content-type']).toContain('application/json');
    const createdPost = await response.json();
    expect(createdPost).toHaveProperty('id', 101);
  });

  test('PUT /posts - Should update a specific post using data from external file', async ({ request }) => {
    const postId = 1; 
    const response = await request.put(`/posts/${postId}`, {
      data: updatePost,
      headers: {
        'Content-Type': 'application/json'
      },
    });
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const updateResult = await response.json();
    expect(updateResult).toHaveProperty('id', postId);
  });

