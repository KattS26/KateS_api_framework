api-positive_tests.spec.ts

Test case name: GET /users - Should retrieve all 10 users successfully
Description:
- Validates that the API successfully returns a list of all users, ensuring correct HTTP status, content type, and the structure and count of the user data.
Precondition: 
- The https://jsonplaceholder.typicode.com/users endpoint must be accessible and functional.
Steps:
- Send a GET request to /users.
- Varify HTTP status code is 200.
- Varify Content-Type header contains application/json.
- Parse the response body as JSON.
- Varify the parsed body is an array.
- Varify the array contains exactly 10 elements.
- Varify the first element has an id property.
- Varify the first element has a name property with value 'Leanne Graham'.
Expected result:
-  HTTP status 200 OK, Content-Type: application/json, and a JSON array of 10 user objects, with the first user having id and name: 'Leanne Graham'.


Test case name: GET /posts/1 - Should retrieve a single post by ID successfully
Description: 
- Verifies that the API can successfully fetch a single post by its ID, validating the HTTP status, content type, and the presence and value of key properties in the retrieved post object.
Precondition: 
- The https://jsonplaceholder.typicode.com/posts/1 endpoint must be accessible and a post with ID 1 must exist.
Steps:
- Send a GET request to /posts/1.
- Varify HTTP status code is 200.
- Varify Content-Type header contains application/json.
- Parse the response body as JSON (note: response.json() is called twice in the provided code, but only one call is necessary).
- Varify the parsed post object has an id property with value 1.
- Varify the post object has a title property.
- Varify the post object has a body property.
Expected result: HTTP status 200 OK, Content-Type: application/json, and a JSON object representing the post with id: 1, containing title and body properties.


Test case name: POST /posts - Should create a new post successfully
Description: Confirms the API's ability to create a new post. It validates the successful creation status, content type, and that the returned created post matches the sent payload, including a correctly assigned ID.
Precondition: The https://jsonplaceholder.typicode.com/posts endpoint must be accessible and accept POST requests.
Steps:
- Define a JSON object newPost containing the data for the post to be created.
- Send a POST request to /posts, providing newPost as the request body.
- Varify HTTP status code is 201 (Created).
- Varify Content-Type header contains application/json.
- Parse the response body as JSON to get the createdPost object.
- Varify that createdPost's properties match those of the original newPost payload.
- Varify that createdPost has an id property with value 101 (specific to jsonplaceholder.typicode.com).
Expected result: HTTP status 201 Created, Content-Type: application/json, and a JSON object representing the newly created post, matching the sent title, body, and userId, and having id: 101.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

api_negative_tests.spec.ts

Test case name: GET /posts/9999 - Should return 404 for non-existent post ID
Description: 
- This test checks how the API responds when a request is made for a resource (post) that does not exist. It expects the API to return an appropriate "Not Found" status.
Precondition: 
- The https://jsonplaceholder.typicode.com/ base URL must be accessible and the /posts/{id} endpoint should be functional.
Steps:
- Send an HTTP GET request to the /posts/9999 endpoint, where 9999 is an ID that is guaranteed not to exist.
- Varify HTTP status code is 404 (Not Found).
- Varify Content-Type header contains application/json.
- Parse the response body as JSON.
- Varify that the parsed response body is an empty object ({}).
Expected result: 
- HTTP status 404 Not Found, Content-Type: application/json, and an empty JSON object as the response body.


Test case name: POST /posts - Should return 400 for missing required fields
Description: 
- This test verifies the API's behavior when a POST request to create a new resource (post) is sent with some required fields missing.
Precondition: 
- The https://jsonplaceholder.typicode.com/ base URL must be accessible and the /posts endpoint should accept POST requests.
Steps:
- Define a JSON object invalidPost that intentionally omits the title field (or other assumed mandatory fields).
- Send an HTTP POST request to /posts, providing invalidPost as the request body.
- Varify HTTP status code is 201 (Created). Note: In a real API, 400 Bad Request or 422 Unprocessable Entity would typically be expected.
- Parse the response body as JSON to get the createdPost object.
- Varify that createdPost does not have the title property.
Expected result:
- HTTP status 201 Created, and a created post object that does not contain the title property.


Test case name: POST /posts - Should handle incorrect Content-Type
Description: 
- This test verifies the API's behavior when a POST request, intended to send JSON data, is sent with an incorrect Content-Type header.
Precondition: 
- The https://jsonplaceholder.typicode.com/ base URL must be accessible and the /posts endpoint should accept POST requests.
Steps:
- Define a JSON object newPost containing valid data for a new post.
- Send an HTTP POST request to /posts, providing newPost as the request data.
- Set the Content-Type header to text/css (an incorrect type for JSON data).
- Varify HTTP status code is 201 (Created). Note: In a real API, 400 Bad Request or 415 Unsupported Media Type would typically be expected.
Expected result: 
- HTTP status 201 Created.
