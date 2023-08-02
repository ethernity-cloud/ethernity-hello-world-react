<p align="center">
  <a href="https://ethernity.cloud" title="Ethernity Cloud">
    <img src="https://ethernity.cloud/images/dark_gradient_logo.svg" alt="Ethernity Cloud logo" width="244" />
  </a>
</p>

<h3 align="center">Ethernity CLOUD example</h3>


## 1. Developer Guide for Ethernity CLOUD

Welcome to the Developer Guide section, where we provide you with essential steps and preparations to create an optimal working environment for unlocking the full potential of Ethernity Cloud and Web3. Our comprehensive and user-friendly tutorial will smoothly walk you through the entire process of sending tasks for execution on the powerful Ethernity Cloud ecosystem. Get ready to embark on an exciting journey of exploration and innovation!

### 1.1 Environment Prerequisites

#### 1.1.1 IDE
For a streamlined development process, we recommend using Visual Studio Code—a powerful and versatile code editor that offers a seamless experience for developers. You can download Visual Studio Code from the official [website](https://code.visualstudio.com/.).

After running the IDE, a new workspace will be created, where you can start developing the framework and code.

#### 1.1.2 Framework
Using a Terminal within the IDE workspace, follow these steps to set up your framework of choice.

**Node.js:**
Node.js is an open-source, server-side JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser. It uses an event-driven, non-blocking I/O model, making it highly efficient and suitable for building scalable and real-time applications.

Install Node.js on your local machine by following the instructions provided here: [Node.js Download](https://nodejs.dev/en/download/).

**React:**
React is an open-source JavaScript library for building user interfaces, particularly for creating interactive and dynamic web applications.

With its popularity and strong ecosystem, React has become a widely adopted choice for front-end development, empowering developers to create modern, scalable, and responsive web applications.

For more details and a how to start guide please check their official [website](https://react.dev/)

#### 1.1.3 Wallet Setup
A wallet is a crucial tool within the Ethernity Cloud ecosystem, empowering users to securely store and transfer their data for processing. As a developer, having a Web3 dApp testing wallet is necessary.

The wallet setup process with Metamask is detailed here: [Getting started with MetaMask](https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask).

Currently, there are two networks for using Ethernity Cloud. Please set up your wallet for the desired network following one of the articles below:
- OpenBeta Network on bloxberg
- TestNet Network on bloxberg
- MainNet Network on Polygon

#### 1.1.4 Web3 Development Libraries
To unleash the full potential of dApps utilizing Ethernity CLOUD smart contracts, a set of essential libraries is required. These libraries play a crucial role in ensuring that input data is appropriately formatted, encrypted, signed, and seamlessly sent to the protocol. Additionally, they enable the decryption and verification of signatures for the protocol results.

Until an SDK becomes available, we recommend integrating these powerful libraries into your development process to have the necessary tools to interact with Ethernity CLOUD smart contracts efficiently and securely. These libraries serve as the backbone of your dApp, facilitating seamless communication with the protocol and ensuring the integrity of the exchanged data.

**EthersJS:**
EthersJS is a popular JavaScript library for interacting with the Ethereum blockchain. It provides a powerful set of tools and utilities to handle Ethereum transactions, smart contracts, and wallet management, making it easier for developers to build decentralized applications (dApps) and work with the Ethereum network.

Link: [EthersJS Documentation](https://docs.ethers.org/v5/)
Install: `npm install ethers --save`

**Node-forge:**
Node-forge is a JavaScript library that provides cryptographic functionalities in Node.js and web browsers. It offers a wide range of cryptographic tools, including encryption, decryption, digital signatures, hashing, and more, making it useful for securely handling data and implementing secure communication protocols in web applications and server-side environments.

Link: [Node-forge on npm](https://www.npmjs.com/package/node-forge)
Install: `npm install node-forge --save`

**jsrsasign:**
jsrsasign is an npm package for Node.js and web browsers that provides a comprehensive set of tools for working with JSON Web Tokens (JWT) and various cryptographic operations, such as RSA, ECDSA, and hashing algorithms or working with certificates like X509. It offers an easy-to-use API for generating, signing, verifying, and parsing JWTs, making it a valuable library for implementing secure authentication and data integrity mechanisms in web applications and server-side environments.

Link: [jsrsasign on npm](https://www.npmjs.com/package/jsrsasign)
Install: `npm install jsrsasign --save`

**elliptic:**
Elliptic is an npm package for Node.js and web browsers that provides a straightforward and efficient API for performing elliptic curve cryptography operations. It allows developers to work with cryptographic primitives like generating key pairs, signing messages, and verifying signatures using elliptic curve algorithms. This library is commonly used in blockchain applications, digital signatures, and other cryptographic systems that benefit from the security and performance advantages of elliptic curve cryptography.

Link: [elliptic on npm](https://www.npmjs.com/package/elliptic)
Install: `npm install elliptic --save`

**js-sha256:**
js-sha256 is an npm package for Node.js and web browsers that provides a simple and efficient API for generating SHA-256 cryptographic hashes. It allows developers to compute SHA-256 hashes of data, such as strings or binary data, making it useful for securely storing and verifying data integrity in various applications, including blockchain, password hashing, and digital signatures.

Link: [js-sha256 on npm](https://www.npmjs.com/package/js-sha256)
Install: `npm install js-sha256 --save`

**ipfs-http-client:**
ipfs-http-client is an npm package that provides a JavaScript API for interacting with the IPFS (InterPlanetary File System) network over HTTP. It allows developers to upload, download, and manage files on the IPFS network, enabling decentralized and distributed file storage and retrieval. With ipfs-http-client, developers can easily integrate IPFS functionality into their web applications and server-side projects, leveraging the benefits of a peer-to-peer, content-addressable file system.

Link: [ipfs-http-client on npm](https://www.npmjs.com/package/ipfs-http-client)
Install: `npm install ipfs-http-client --save`

### 1.2 Step by step guide

**1.2.1. Project Setup**

To initiate the creation of a new React app using `npx create-react-app`, follow these steps:

1. Ensure that you have Node.js and npm (Node Package Manager) installed on your system.

2. Open your terminal or command prompt.

3. Execute the following command:
```
npx create-react-app my-app
```
Replace "my-app" with your desired name for the React app. This command will establish a new directory named "my-app" and configure a basic React application structure within it.

4. After the process completes, navigate to the newly created directory:
```
cd my-app
```

5. Launch the development server:
```
npm start
```
This action will start the development server and automatically open your React app in a web browser. You can now commence building your React application by making changes to the files within the "src" directory.

Utilizing `npx create-react-app` presents a swift and straightforward method for initializing a new React project with all the essential configurations and dependencies, freeing you to concentrate on developing your app without concerning yourself with the initial setup.

**1.2.2. Ethernity Cloud Runner package installation**

To begin developing with the Ethernity Cloud Runner, you can easily set up your environment by installing the package using npm:

```console
$ npm install @ethernity-cloud/runner --save
```

This command will install the Ethernity Cloud Runner package and save it as a dependency in your project. With the package installed, you're ready to start utilizing the Ethernity Cloud Runner functionality and explore its capabilities for your application development.

**1.2.3. Ethernity Cloud Runner usage**

Now go on src/App.css file and update the content adding following css classes:
```css
.container {
  /* Set the container to flex to align the button horizontally and vertically */
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100vh; /* Adjust the container's height based on your requirement */
}

.centeredButton {
  /* Add your button styles here */
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}

```
After this go on src/App.js file and replace the content with following code:

```javascript
import './App.css';
import EthernityCloudRunner from "@ethernity-cloud/runner";
import {ECRunner} from "@ethernity-cloud/runner/enums";

// example of a Python script
const pythonCode = `
def sum(a, b):
    return a + b        
a=1
b=10        
___etny_result___(str(sum(a, b)))`;

// example of a Node.js script
// const jsCode = `function add(a, b) {\n  return a + b;\n}\n ___etny_result___(add(1, 10).toString());`;

function App() {
   const executeTask = async () => {
      // this is a server provided by Ethernity CLOUD, please bear in mind that you can use your own Decentralized Storage server
      const ipfsAddress = 'https://ipfs.ethernity.cloud:5001';

      const runner = new EthernityCloudRunner();
      runner.initializeStorage(ipfsAddress);

      // there are two types of runners: for Python(ECRunner.PYNITHY_RUNNER_TESTNET) and Node.js(ECRunner.NODENITHY_RUNNER_TESTNET)
      // based on this you should use appropriate runner type, for this example we are using PYNITHY_RUNNER_TESTNET since we are executing a python script
      await runner.run(ECRunner.PYNITHY_RUNNER_TESTNET, pythonCode, '0x73842b5e67a321516cBA1d384E8B2cD70404148b');
      // in case you want to use Node.js
      //await runner.run(ECRunner.NODENITHY_RUNNER_TESTNET, jsCode, '0x73842b5e67a321516cBA1d384E8B2cD70404148b');
   };

   return (
       <div className="container">
          <button className="centeredButton" onClick={executeTask}>Execute Task</button>
       </div>
   );
}

export default App;
```

The App.js file of a React app is responsible for integrating the Ethernity Cloud Runner module into the application. Here's a description of the section:

**Ethernity Cloud Runner Integration in App.js**

This comprehensive guide explains the seamless integration of the Ethernity Cloud Runner module into your React application, empowering developers to execute Python tasks using IPFS. The following sections elaborate on the integration process:

1. **Import Statements:**
   Begin by importing the essential modules and styles. Import `./App.css` for styling, and crucially, include two pivotal modules from the `@ethernity-cloud/runner` package: `EthernityCloudRunner` and `ECRunner`. These modules are vital for interacting with the Ethernity Cloud Runner and defining the runner type.

2. **Defining Code to be Executed:**

   The Ethernity Cloud Runner allows users to execute tasks using different programming languages and frameworks. Currently, the runner supports two main templates: Python and Node.js. Users can define the code to be executed within these templates to perform specific tasks on the Ethernity Cloud platform.
   
   #### Python Template:
   
   In the Python template, users can write their code in Python programming language. Python is known for its simplicity and readability, making it a popular choice for various use cases. Users can utilize the Python template to execute tasks that require data processing, scientific computing, artificial intelligence, and more. The Python template provides a flexible and versatile environment to build sophisticated applications within the Ethernity Cloud ecosystem.
   
   Below there is an example of Python code that demonstrates a program used to compute PI number:
   
   ```python
   import time
   from decimal import Decimal, getcontext
             
   def compute(n):
     getcontext().prec = n
     res = Decimal(0)
     for i in range(n):
       a = Decimal(1)/(16**i)
       b = Decimal(4)/(8*i+1)
       c = Decimal(2)/(8*i+4)
       d = Decimal(1)/(8*i+5)
       e = Decimal(1)/(8*i+6)
       r = a*(b-c-d-e)
       res += r
     return res
             
   t1 = time.time()
   res = compute(2000)
   dt = time.time()-t1
                 
   print(res)
   ___etny_result___(str(res))
   ```
   
   
   #### Node.js Template:
   
   For those who prefer JavaScript, the Node.js template offers a powerful option. Node.js allows users to leverage JavaScript both on the client and server-side, making it suitable for web-based applications and server-side scripting. With the Node.js template, users can execute tasks on the Ethernity Cloud Runner using JavaScript, taking advantage of its asynchronous, event-driven nature and extensive library support.
   
   Below there is an example of Node.js code that computes the sum of two numbers:
   
   ```javascript
   function add(a, b) {
     return a + b;
   }
   ___etny_result___(add(1, 10).toString());
   ```
   
   To use either template, users need to provide the code in the corresponding programming language that defines the specific task they want to execute. This code will be packaged and executed within the Ethernity Cloud environment, leveraging the capabilities of the blockchain and distributed computing to complete the task securely and efficiently.
   
   It's important to note that as the Ethernity Cloud platform evolves, additional templates and language support may be introduced, providing even more flexibility for users to define and execute a wide range of tasks on the Ethernity Cloud Runner. For now, users can take advantage of the Python and Node.js templates to harness the power of blockchain and distributed computing for their applications and tasks.

3. **App Function Component:**
   Define the `App` function component, which plays a pivotal role in rendering the entire application.

4. **Rendering the Button:**
   The return statement of the `App` function renders a button labeled "Execute Task." Clicking the button triggers the `executeTask` function, initiating task execution through the Ethernity Cloud Runner.

5. **Execute Task Function:**
   Within the `App` function, define the `executeTask` function as an asynchronous function that triggers upon clicking the "Execute task" button.

6. **Runner Initialization:**
   The first crucial step involves creating an instance of the `EthernityCloudRunner`. Initialize the runner by constructing `const runner = new EthernityCloudRunner();`.

7. **Decentralized Storage Initialization:**
   Next, initialize the Ethernity Cloud Runner's decentralized storage by specifying the IPFS address where it will communicate with the IPFS network. For this integration, you have multiple options to initialize the storage:

   - **Ethernity Cloud IPFS Server (Recommended for Development):** 
      
   Utilize the default IPFS address 'https://ipfs.ethernity.cloud:5001' provided by Ethernity Cloud, which serves as an efficient option for development purposes. It ensures seamless initialization with the specified IPFS address, allowing you to focus on task execution without managing your own IPFS infrastructure.

   - **Custom IPFS Server:**
   
   Alternatively, if you have your own IPFS server set up or prefer to use a different IPFS address, you can provide the desired IPFS address to the runner.initializeStorage(ipfsAddress) method. This option empowers you to leverage any IPFS infrastructure that suits your specific requirements.

   - **Other Decentralized Storage Solutions:**
   
   Ethernity Cloud Runner offers the flexibility to integrate with various decentralized storage solutions beyond IPFS. While IPFS is the default and recommended option, you can explore other decentralized storage systems based on your needs and preferences.

   In summary, initializing the Ethernity Cloud Runner's decentralized storage plays a crucial role in enabling seamless communication with the IPFS network or other decentralized storage solutions. Whether you opt for the provided Ethernity Cloud IPFS server, your custom IPFS infrastructure, or other decentralized storage, this integration ensures efficient task execution and data management within your React application.

8. **Task Execution:**
The heart of the integration lies in the `await runner.run(...)` line, which initiates task execution through the Ethernity Cloud Runner. The `runner.run(...)` function accepts three arguments:

    - **Runner Type:** Specify the runner type, with currently two runners available for use on the TESTNET network:
        - Python runner: `ECRunner.PYNITHY_RUNNER_TESTNET`
        - Node.js runner: `ECRunner.NODENITHY_RUNNER_TESTNET`

    - **Code:** Provide the code to be executed as the task. For this example, it contains the Python code snippet to be executed (Ensure to preserve proper indentations).

    - **Node Address (Optional):** Include this argument if you wish to provide The Ethereum wallet address (node address) for processing the task. The Ethernity Cloud Runner offers two options for task approval:

        - **Manual Approval:** If you omit the node address, the task execution will be manually approved, allowing users to review the task details before execution proceeds. 

        - **Automatic Approval:** If you choose to provide the node address, the task execution will be automatically approved, providing a seamless and quick execution process without manual intervention.
9. **Metamask Interaction when Executing a Task:**

When executing a task with the Ethernity Cloud Runner, Metamask, a popular Ethereum wallet browser extension, plays a significant role in the process. Here's a step-by-step guide on how Metamask interacts with the task execution:

1. **Connecting Metamask:**
   Before initiating the task execution, ensure that Metamask is installed and set up in your web browser. If you haven't done so already, install Metamask and create or import an Ethereum wallet address.

2. **Logging in and Approving the Task:**
   When you click the "Execute task" button in the React application, the `executeTask` function is triggered. The Ethernity Cloud Runner will then prompt Metamask to request account access, enabling it to interact with your Ethereum wallet. If you haven't logged in to Metamask, you will be prompted to do so at this point.

3. **Approving Transaction:**
   After logging in, Metamask will display a transaction confirmation popup. This popup provides details about the task being executed, such as the runner type and the Python code snippet. Review the transaction details and confirm the task execution by clicking the "Confirm" button within Metamask.

4. **Transaction Processing:**
   Once you confirm the transaction, Metamask will initiate the process of executing the task on the Ethereum network. The transaction will be broadcasted to the network, and you can monitor its progress through Metamask.

5. **Transaction Confirmation:**
   As the task execution is processed, Metamask will provide a transaction confirmation once the task is successfully executed on the network. You will receive a confirmation message in Metamask, indicating that the task execution has been completed.

6. **Task Result Retrieval:**
   After the task execution is confirmed, the Ethernity Cloud Runner will retrieve the result of the executed task from the Ethereum network. The result will be displayed in the React application, indicating the outcome of the Python code execution.

By leveraging Metamask's secure and user-friendly interface, the Ethernity Cloud Runner seamlessly interacts with your Ethereum wallet, ensuring the secure and efficient execution of tasks within your React application. Metamask serves as the bridge between your application and the Ethereum blockchain, facilitating a smooth and decentralized experience when running tasks on the Ethernity Cloud platform.

In conclusion, the above-mentioned code elegantly integrates the Ethernity Cloud Runner into your React app, enabling seamless execution of Python code snippets while facilitating interaction with the IPFS network for efficient data storage and retrieval. As a professional developer, you can now leverage this integration to enhance your React applications with powerful decentralized task execution capabilities.
