#### **1. Introduction**
This repository contains an automated API testing framework built with Node.js and Playwright. Its primary goal is to ensure the reliability and correctness of our backend API services through robust and efficient test automation.



**2. Technologies Used**
```**Node.js** – Enables you to run JavaScript code outside the browser, and is required to use Playwright and manage dependencies with npm.```
```**Visual Studio Code** – A lightweight and powerful code editor with support for JavaScript, Node.js, and useful extensions for testing and debugging.```
```**Playwright module** – The core library that allows you to write and execute automated API (and UI) tests in JavaScript.```
```**Playwright Test Runner extension** – Adds integration with VS Code to easily run and debug Playwright tests directly from the editor.```
```**Git** – A version control system that helps track changes in your code, collaborate with others, and push your work to platforms like GitHub.```
```**Bitbucket** –  Code hosting service where the repository is maintained.```



**3. Getting Started**
This section will guide you through setting up the project and getting the tests running on your local machine.

3.1 Node.js
Follow the link https://nodejs.org/en/download , download latest version by. You will find it under a block with code for PowerShall, green button “Windows Installer(.msi)”,  click on it.
Once File  node-*version_number*-x64.msi  is downloaded, find it in the download folder(or any place it was saved in) and click on it.
Node.js Setup window should be opened, click next -> agree with conditions -> select a place it to be saved in (There is no difference on which disk) -> next -> Check “Automatically install necessary tools” and click next -> click install -> once installation is done, click finish.
In order to check if it`s installed, open the terminal and write ```“npm -v” ```or ```“node -v”```, as a result you should see the version number as a result.

3.2 Visual studio
Install VS by the link https://code.visualstudio.com/Download . Once it`s downloaded, start the installation file.  
In installation window accept the agreement -> choose location (no matter if Node.js is on the same disk or not)-> next -> install
After the program is installed, open it. On the top bar, find Terminal option, click “New Terminal”. On the bottom of a screen command-result window is opened. Type ```“node -v”``` command in order to check if VS has no trouble seeing Node.js
If command directory starts with disk C: but VS is on disk D:. , type command “cd…” to go up till its only “C:”, type “D:”, it will switch to the right disk

Keep the program running 

3.3 Playwright module
Follow the link https://playwright.dev/docs/intro . Under “Installing Playwright” section, you`ll see NPM command, copy it. Go back to VS Code, open Terminal and insert copied command and execute it
To the following question reply next:
1) TypeScript
2) tests
3) false
4) true

3.4  Playwright runner
On the left vertical menu, open Extensions. Find and download Playwright Test for VSCode. Install the extention

3.5 Git
Follow the link to get installation file https://git-scm.com/downloads. Choose you OS. Follow the installation process. Once it`s install, you can check common command by typing ```“git”``` in terminal



**4. Download the project**
Clone the repository:
first:
```git clone https://github.com/KattS26/KateS_api_framework.git```
then:
```cd KateS_api_framework```



**5. Run the Tests**
The framework uses Playwright for test execution.
There are several ways of running tests. The easiest one is to navigate to “tests” on the left vertical menu. Once you are there, dive into  src/tests/api folder. 

Run a folder: Hovering on the api/ folder, will show you a play button. Once its clicked the test in  will be running 
Run a test file: Hovering on a test_name.spec.ts file, will show you a play button. Once its clicked the test will be running 
Run 1 test inside test file: on the left side of the file name, there is a button which opens list of tests inside the file, so you can run separate test 



**6. Test Data Structure**
Location: Test data files are located in the src/tests/api/test_data directory.
Format: Test data is structured in JSON files. Each JSON file represents a specific request payload.
Adding New Test Data: To add new test data, create a new JSON file within the test_data/ directory, ensuring it follows the existing schema and naming conventions for clarity and consistency.



**7. API tests example file**
The project contains api_tests_basics.spec.ts file, which includes list of main checks of response



**8. Assumptions and Notes** 
API Availability: It is assumed that the target API (the one being tested) is running and accessible from the environment where the tests are executed.
Network Connectivity: Stable internet connection is required for fetching dependencies and interacting with external API endpoints.
Idempotency: Where possible, tests are designed to be idempotent, meaning they can be run multiple times without causing unintended side effects on the API or its data.
VS Code Extensions: For enhanced development experience, consider installing Playwright extension for VS Code.




**9. Limitations**
Current Limitations:
This framework currently focuses solely on API testing and does not include UI or performance testing capabilities.



**10. Troubleshooting**
10.1 VS Code
If the command returns error, try next steps:
Open VS Code via terminal commands:
Go to the root folder of project
```cd C:\Users\UserName\ProjectName```
Once u r in a folder, next command will open the project
code .



10.2 Playwright 
If there are troubles with installation, try next:
Press Win + S combination,  find PowerShell, open it as administrator, by clicking right-button on the mouse 
Execute this command 
Set-ExecutionPolicy RemoteSigned
Once you see a question, type Y 
Close and re-open as administrator VS code 
In VS Code open terminal and execute the command 
```npm init playwright@latest```
Once it`s installed open powerShell again and execute next
Set-ExecutionPolicy Restricted
There could be a problem running tests due to lack of permission. In order to fix it, run VS Code as administrator.  

