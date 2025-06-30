import {test, request, expect} from "@playwright/test";

// This test contains all basic checks options for API testing
// such as status code, headers, response body, etc.

test.describe('JSONPlaceholder API Tests', () => {
  
  test('GET /users - List of examples of main check options', async ({ request }) => {
    const response = await  request.get("/users");
    console.log(await response.json());
       
      // Basic response checks (Before receiving the body)

      // Check the 'Content-Type' header to make sure the API returned JSON.
      expect(response.headers()['content-type']).toContain('application/json');

      // Check the HTTP status of the response. '200 OK' usually means successful.
      expect(response.status()).toBe(200);

      // Check the response text status. Not always necessary, but can be useful.
      expect(response.statusText()).toBe('OK');

      // Check that the response URL contains the expected path.
      expect(response.url()).toContain('/users');

     
      // Response body checks (After parsing the JSON)

      const responseBody = await response.json();

      // Check that the response body is not an empty object.
      expect(responseBody).not.toEqual({});

      // Check if the response body is an array (e.g. for a list of users).
      expect(responseBody).toBeInstanceOf(Array);

      // Check for the exact number of elements in the array.
      expect(responseBody).toHaveLength(10);

      // Check that the array is not empty.
      expect(responseBody.length).toBeGreaterThan(0);

      // Check that the first object in the array has a property 'id'.
      expect(responseBody[1]).toHaveProperty('name');

      // Check that the first object has a property 'name' with the value 'Leanne Graham'.
      expect(responseBody[0]).toHaveProperty('name', 'Leanne Graham');

      // Check email format using a regular expression.
      expect(responseBody[0].email).toMatch(/@.+/);

      // Check that the object partially matches the expected structure (not all fields, only selected ones).
      expect(responseBody[0]).toMatchObject({ id: 1, username: 'Bret' });

      // Check the data type of nested objects.
      expect(typeof responseBody[0].address.city).toBe('string');
      expect(responseBody[0].address.city).not.toBeNull(); // Checking that it is not null

      // Checking 'toEqual' to compare values
      expect(responseBody[0].company.name).toEqual('Romaguera-Crona');
  });

  test('GET / users/1 - Example of checking if response body structure matches with expected one', async ({ request }) => {
      const response = await  request.get("/users/1"); 
      expect(await response.json()).toMatchObject({
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                address: {
                    street: 'Kulas Light',
                    suite: 'Apt. 556',
                    city: 'Gwenborough',
                    zipcode: '92998-3874',
                    geo: { lat: '-37.3159', lng: '81.1496' }
                },
                phone: '1-770-736-8031 x56442',
                website: 'hildegard.org',
                company: {
                    name: 'Romaguera-Crona',
                    catchPhrase: 'Multi-layered client-server neural-net',
                    bs: 'harness real-time e-markets'
                }
      })
        expect((await response.json()).address.city).toEqual('Gwenborough');
  });
});