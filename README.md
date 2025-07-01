#### **1. Introduction**<br/>

This repository contains an automated API testing framework built with Node.js and Playwright. Its primary goal is to ensure the reliability and correctness of our backend API services through robust and efficient test automation.<br/>



**2. Technologies Used**<br/>

**Node.js** – Enables you to run JavaScript code outside the browser, and is required to use Playwright and manage dependencies with npm.<br/>
**Visual Studio Code** – A lightweight and powerful code editor with support for JavaScript, Node.js, and useful extensions for testing and debugging.<br/>
**Playwright module** – The core library that allows you to write and execute automated API (and UI) tests in JavaScript.<br/>
**Playwright Test Runner extension** – Adds integration with VS Code to easily run and debug Playwright tests directly from the editor.<br/>
**Git** – A version control system that helps track changes in your code, collaborate with others, and push your work to platforms like GitHub.<br/>
**Bitbucket** –  Code hosting service where the repository is maintained.<br/>



**3. Getting Started**<br/>

This section will guide you through setting up the project and getting the tests running on your local machine.

3.1 Node.js<br/>
Follow the link https://nodejs.org/en/download , download latest version by. You will find it under a block with code for PowerShall, green button “Windows Installer(.msi)”,  click on it.
Once File  node-*version_number*-x64.msi  is downloaded, find it in the download folder(or any place it was saved in) and click on it.
Node.js Setup window should be opened, click next -> agree with conditions -> select a place it to be saved in (There is no difference on which disk) -> next -> Check “Automatically install necessary tools” and click next -> click install -> once installation is done, click finish.
In order to check if it`s installed, open the terminal and write ```“npm -v” ```or ```“node -v”```, as a result you should see the version number as a result.

3.2 Visual studio<br/>
Install VS by the link https://code.visualstudio.com/Download . Once it`s downloaded, start the installation file.  
In installation window accept the agreement -> choose location (no matter if Node.js is on the same disk or not)-> next -> install
After the program is installed, open it. On the top bar, find Terminal option, click “New Terminal”. On the bottom of a screen command-result window is opened. Type ```“node -v”``` command in order to check if VS has no trouble seeing Node.js
If command directory starts with disk C: but VS is on disk D:. , type command ```cd…``` to go up till its only “C:”, type “D:”, it will switch to the right disk

Keep the program running 


3.4  Playwright runner<br/>
On the left vertical menu, open Extensions. Find and download Playwright Test for VSCode. Install the extention

3.5 Git<br/>
Follow the link to get installation file https://git-scm.com/downloads. Choose you OS. Follow the installation process. Once it`s install, you can check common command by typing ```“git”``` in terminal


**4. Download the project**<br/>

Open terminal (Linux/macOS) or Git Bash / PowerShell / Command Prompt (Windows).<br/>
Go to the folder you want the project to be downloaded in <br/>
```cd folder_name/Project_folder```

Clone the repository:
first:
```git clone https://github.com/KattS26/KateS_api_framework.git```
then:
```cd KateS_api_framework```

Since the project already contains all necessary files and dependencies for Playwright, the only thing you need to do is to run next commands:<br/>
```npm install ```<br/> 
After, run:<br/>
```npx playwright install --with-deps```<br/>


**5. Run the Tests**<br/>

The framework uses Playwright for test execution.<br/>
There are several ways of running tests. The easiest one is to navigate to “tests” on the left vertical menu. Once you are there, dive into  ```src/tests/api``` folder. <br/>

Run a folder: Hovering on the ```api/``` folder, will show you a play button. Once its clicked the test in  will be running <br/>
Run a test file: Hovering on a ```test_name.spec.ts``` file, will show you a play button. Once its clicked the test will be running <br/>
Run 1 test inside test file: on the left side of the file name, there is a button which opens list of tests inside the file, so you can run separate test <br/>



**6. Test Data Structure**<br/>

Location: Test data files are located in the ```src/tests/api/test_data``` directory.<br/>
Format: Test data is structured in JSON files. Each JSON file represents a specific request payload.<br/>
Adding New Test Data: To add new test data, create a new JSON file within the ```test_data/``` directory, ensuring it follows the existing schema and naming conventions for clarity and consistency.<br/>



**7. API tests example file**<br/>

The project contains api_tests_basics.spec.ts file, which includes list of main checks of response<br/>

**8. Bitbucket pipeline and HTML reports** <br/>

This project is integrated with Bitbucket Pipelines to ensure continuous validation of API endpoints. Integration, configured via bitbucket-pipelines.yml, ensures continuous quality assurance of the JSONPlaceholder API endpoints.<br/>
Here is the link to the pipeline:<br/>
https://bitbucket.org/js_kimkate/kate_s_api_framework/pipelines<br/>
In order to see HMTL reports, follow the link, download and unpack ```playwright-report artifacts```<br/>
https://bitbucket.org/js_kimkate/kate_s_api_framework/pipelines/results/1/steps/%7B25c54e1e-f62c-4efd-9530-463362b0643b%7D/artifacts<br/>

Here is an example of HTML reposts
![image](https://github.com/user-attachments/assets/e8ebbedc-13f3-4817-94d8-cee99867e53e)


**9. Assumptions and Notes** <br/>

API Availability: The target API (```https://jsonplaceholder.typicode.com/```) should berunning and accessible from the environment where the tests are executed.<br/>
Network Connectivity: Stable internet connection is required for fetching dependencies and interacting with external API endpoints.<br/>



**10. Limitations**<br/>

Current Limitations:
This framework currently focuses solely on API testing and does not include UI or performance testing capabilities.



**11. Troubleshooting**<br/>

11.1 VS Code
If the command returns error, try next steps:<br/>
Open VS Code via terminal commands:<br/>
Go to the root folder of project<br/>
```cd C:\Users\UserName\ProjectName```<br/>
Once you are in a folder, next command will open the project<br/>
```code .```<br/>

11.2 Playwright 
There could be a problem running tests due to lack of permission. In order to fix it, run VS Code as administrator.  <br/>

