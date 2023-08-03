<p align="center">
  <a href="https://ethernity.cloud" title="Ethernity Cloud">
    <img src="https://ethernity.cloud/images/dark_gradient_logo.svg" alt="Ethernity Cloud logo" width="244" />
  </a>
</p>

<h3 align="center">Ethernity CLOUD example</h3>

## 1. Developer Guide for Ethernity CLOUD

Welcome to the Developer Guide section, where we provide you with essential steps and preparations to create an optimal
working environment for unlocking the full potential of Ethernity Cloud and Web3. Our comprehensive and user-friendly
tutorial will smoothly walk you through the entire process of sending tasks for execution on the powerful Ethernity
Cloud ecosystem. Get ready to embark on an exciting journey of exploration and innovation!

### 1.1 Environment Prerequisites

#### 1.1.1 IDE

For a streamlined development process, we recommend using Visual Studio Code—a powerful and versatile code editor that
offers a seamless experience for developers. You can download Visual Studio Code from the
official [website](https://code.visualstudio.com/.).

After running the IDE, a new workspace will be created, where you can start developing the framework and code.

#### 1.1.2 Framework

Using a Terminal within the IDE workspace, follow these steps to set up your framework of choice.

**Node.js:**
Node.js is an open-source, server-side JavaScript runtime environment that allows developers to execute JavaScript code
outside of a web browser. It uses an event-driven, non-blocking I/O model, making it highly efficient and suitable for
building scalable and real-time applications.

Install Node.js on your local machine by following the instructions provided
here: [Node.js Download](https://nodejs.dev/en/download/).

**React:**
React is an open-source JavaScript library for building user interfaces, particularly for creating interactive and
dynamic web applications.

With its popularity and strong ecosystem, React has become a widely adopted choice for front-end development, empowering
developers to create modern, scalable, and responsive web applications.

For more details and a how to start guide please check their official [website](https://react.dev/)

#### 1.1.3 Wallet Setup

A wallet is a crucial tool within the Ethernity Cloud ecosystem, empowering users to securely store and transfer their
data for processing. As a developer, having a Web3 dApp testing wallet is necessary.

The wallet setup process with Metamask is detailed
here: [Getting started with MetaMask](https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask).

Currently, there are two networks for using Ethernity Cloud. Please set up your wallet for the desired network following
one of the articles below:

- OpenBeta Network on bloxberg
- TestNet Network on bloxberg
- MainNet Network on Polygon

### 1.2 Step by step guide

**1.2.1. Project Setup**

To initiate the creation of a new React app using `npx create-react-app`, follow these steps:

1. Ensure that you have Node.js and npm (Node Package Manager) installed on your system.

2. Open your terminal or command prompt.

3. Execute the following command:

```
npx create-react-app my-app
```

Replace "my-app" with your desired name for the React app. This command will establish a new directory named "my-app"
and configure a basic React application structure within it.

4. After the process completes, navigate to the newly created directory:

```
cd my-app
```

5. Launch the development server:

```
npm start
```

This action will start the development server and automatically open your React app in a web browser. You can now
commence building your React application by making changes to the files within the "src" directory.

Utilizing `npx create-react-app` presents a swift and straightforward method for initializing a new React project with
all the essential configurations and dependencies, freeing you to concentrate on developing your app without concerning
yourself with the initial setup.

**1.2.2. Ethernity Cloud Runner package installation**

To begin developing with the Ethernity Cloud Runner, you can easily set up your environment by installing the package
using npm:

```console
$ npm install @ethernity-cloud/runner --save
```

This command will install the Ethernity Cloud Runner package and save it as a dependency in your project. With the
package installed, you're ready to start utilizing the Ethernity Cloud Runner functionality and explore its capabilities
for your application development.

**1.2.3. Ethernity Cloud Runner usage and integration**

This comprehensive guide explains the seamless integration of the Ethernity Cloud Runner module into your React
application, empowering developers to execute Python tasks. The following sections elaborate on the
integration process:

1. **Import Statements:**
   
   Begin by editing /src/App.js and by importing the essential modules and styles. Import `./App.css` for styling, and crucially, include two
   pivotal modules from the `@ethernity-cloud/runner` package: `EthernityCloudRunner`, `ECRunner` and `ECStatus`.
   
   These modules are vital for interacting with the Ethernity Cloud Runner and defining the runner type.

```javascript
import './App.css';
import EthernityCloudRunner from "@ethernity-cloud/runner";
import {ECEvent, ECRunner, ECStatus} from "@ethernity-cloud/runner/enums";
```

2. **Defining Code to be Executed:**

   The Ethernity Cloud Runner allows users to execute tasks using different programming languages and frameworks.
   Currently, the runner supports two main templates: Python and Node.js. Users can define the code to be executed
   within these templates to perform specific tasks on the Ethernity Cloud platform.

   #### Python Template:

   In the Python template, users can write their code in Python programming language. Python is known for its simplicity
   and readability, making it a popular choice for various use cases. Users can utilize the Python template to execute
   tasks that require data processing, scientific computing, artificial intelligence, and more. The Python template
   provides a flexible and versatile environment to build sophisticated applications within the Ethernity Cloud
   ecosystem.

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

For those who prefer JavaScript, the Node.js template offers a powerful option. Node.js allows users to leverage
JavaScript both on the client and server-side, making it suitable for web-based applications and server-side scripting.
With the Node.js template, users can execute tasks on the Ethernity Cloud Runner using JavaScript, taking advantage of
its asynchronous, event-driven nature and extensive library support.

Below there is an example of Node.js code that computes the sum of two numbers:

```javascript
function add(a, b) {
    return a + b;
}

___etny_result___(add(1, 10).toString());
```

To use either template, users need to provide the code in the corresponding programming language that defines the
specific task they want to execute. This code will be packaged and executed within the Ethernity Cloud environment,
leveraging the capabilities of the blockchain and distributed computing to complete the task securely and efficiently.

It's important to note that as the Ethernity Cloud platform evolves, additional templates and language support may be
introduced, providing even more flexibility for users to define and execute a wide range of tasks on the Ethernity Cloud
Runner. For now, users can take advantage of the Python and Node.js templates to harness the power of blockchain and
distributed computing for their applications and tasks.

For our example we are using the following code:

```javascript
const code = `___etny_result___("Hello, World!")`;
```

The `___etny_result___` function is a special function used in Ethernity Cloud Runner tasks. When executing a task, this function allows the task code to send the result back to the Ethernity Cloud platform.

In the context of the Ethernity Cloud Runner, tasks are executed in a decentralized and distributed manner. The `___etny_result___` function acts as a communication channel between the task code and the Ethernity Cloud platform. When the function is called with the result data as its argument, it sends the result back to the platform, where it can be processed and stored.

This special function plays a crucial role in ensuring that the results of executed tasks are properly recorded and accessible. It enables seamless interaction with the Ethernity Cloud platform, making it a key component of the Ethernity Cloud Runner's functionality.

3. **App Function Component:**

   Define the `App` function component, which plays a pivotal role in rendering the entire application.

```javascript
function App() {

}

export default App;
```

4. **Rendering the Button:**

   The return statement of the `App` function renders a button labeled "Execute Task." Clicking the button triggers
   the `executeTask` function, initiating task execution through the Ethernity Cloud Runner.

```javascript
return (
    <div className="container">
        <button className="centeredButton" onClick={executeTask}>Execute Task</button>
    </div>
);
```

5. **Execute Task Function:**

   Within the `App` function, define the `executeTask` function as an asynchronous function that triggers upon clicking
   the "Execute task" button.

```javascript
const executeTask = async () => {

};
```

6. **Runner Initialization:**

   The first crucial step involves creating an instance of the `EthernityCloudRunner`. Initialize the runner by
   constructing:

```javascript
const runner = new EthernityCloudRunner();
```

7. **Decentralized Storage Initialization:**

   Next, initialize the Ethernity Cloud Runner's decentralized storage by specifying the IPFS address where it will
   communicate with the IPFS network.

```javascript
// this is a server provided by Ethernity CLOUD, please bear in mind that you can use your own Decentralized Storage server
const ipfsAddress = 'https://ipfs.ethernity.cloud:5001';
runner.initializeStorage(ipfsAddress);
```

For this integration, you have multiple options to initialize the storage:

- **Ethernity Cloud IPFS Server (Recommended for Development):**

Utilize the default IPFS address 'https://ipfs.ethernity.cloud:5001' provided by Ethernity Cloud, which serves as an
efficient option for development purposes. It ensures seamless initialization with the specified IPFS address, allowing
you to focus on task execution without managing your own IPFS infrastructure.

- **Custom IPFS Server:**

Alternatively, if you have your own IPFS server set up or prefer to use a different IPFS address, you can provide the
desired IPFS address to the runner.initializeStorage(ipfsAddress) method. This option empowers you to leverage any IPFS
infrastructure that suits your specific requirements.

- **Other Decentralized Storage Solutions:**

Ethernity Cloud Runner offers the flexibility to integrate with various decentralized storage solutions beyond IPFS.
While IPFS is the default and recommended option, you can explore other decentralized storage systems based on your
needs and preferences.

In summary, initializing the Ethernity Cloud Runner's decentralized storage plays a crucial role in enabling seamless
communication with the IPFS network or other decentralized storage solutions. Whether you opt for the provided Ethernity
Cloud IPFS server, your custom IPFS infrastructure, or other decentralized storage, this integration ensures efficient
task execution and data management within your React application.

8. **Events subscription:**

   In the Ethernity Cloud Runner integration, events play a crucial role in providing real-time feedback and updates
   during the execution of tasks. By subscribing to these events, developers can monitor the progress and completion
   status of their tasks.

   **1. Task Progress Event (`ECEvent.TASK_PROGRESS`):**

   The `ECEvent.TASK_PROGRESS` event is triggered when there is progress in the execution of a task. To capture and
   handle this event, developers can define a function, such as `onTaskProgress`, to process the event data. The event
   object, `e`, provides access to the event detail, which contains information about the task's current status.

   In the example code provided:

   ```javascript
   const onTaskProgress = (e) => {
       if (e.detail.status === ECStatus.ERROR) {
           console.error(e.detail.message);
       } else {
           console.log(e.detail.message);
       }
   };
   
   runner.addEventListener(ECEvent.TASK_PROGRESS, onTaskProgress);
   ```

   The `onTaskProgress` function receives the event object `e`, and it checks the `e.detail.status` to determine if the
   task encountered an error or if it is progressing successfully. If an error is detected, the function logs the error
   message to the console using `console.error`, otherwise, it logs the progress message using `console.log`.

   **2. Task Completed Event (`ECEvent.TASK_COMPLETED`):**

   The `ECEvent.TASK_COMPLETED` event is triggered when a task is successfully completed. Similar to the previous event,
   developers can define a function, such as `onTaskCompleted`, to handle the event and access the task result.

   In the example code provided:

   ```javascript
   const onTaskCompleted = (e) => {
       console.log(`Task Result: ${e.detail.message.result}`);
   }
   
   runner.addEventListener(ECEvent.TASK_COMPLETED, onTaskCompleted);
   ```

   The `onTaskCompleted` function receives the event object `e`, and it accesses the task result
   from `e.detail.message.result`. The function then logs the result to the console, providing developers with the
   outcome of the completed task.

   By subscribing to these events, developers can stay informed about the execution progress and results of tasks,
   enabling them to monitor and respond to task executions effectively. The Ethernity Cloud Runner's event system
   enhances the developer experience, allowing for seamless integration and handling of task-related events in
   real-time.

9. **Task Execution:**

```javascript
await runner.run(ECRunner.PYNITHY_RUNNER_TESTNET, pythonCode);
```

The heart of the integration lies in the `await runner.run(...)` line, which initiates task execution through the
Ethernity Cloud Runner. The `runner.run(...)` function accepts three arguments:

- **Runner Type:** Specify the runner type, with currently two runners available for use on the TESTNET network:
    - Python runner: `ECRunner.PYNITHY_RUNNER_TESTNET`
    - Node.js runner: `ECRunner.NODENITHY_RUNNER_TESTNET`

- **Code:** Provide the code to be executed as the task. For this example, it contains the Python code snippet to be
  executed (Ensure to preserve proper indentations).

- **Node Address (Optional):** Include this argument if you wish to provide The Ethereum wallet address (node address)
  for processing the task. The Ethernity Cloud Runner offers two options for task approval:

    - **Manual Approval:** If you omit the node address, the task execution will be manually approved, allowing users to
      review the task details before execution proceeds.

    - **Automatic Approval:** If you choose to provide the node address, the task execution will be automatically
      approved, providing a seamless and quick execution process without manual intervention.

10. **Final application code**

```javascript
import './App.css';
import EthernityCloudRunner from "@ethernity-cloud/runner";
import {ECEvent, ECRunner, ECStatus} from "@ethernity-cloud/runner/enums";

const code = `___etny_result___("Hello, World!")`;

// example of a Node.js script
// const jsCode = `function add(a, b) {\n  return a + b;\n}\n ___etny_result___(add(1, 10).toString());`;

function App() {
    const executeTask = async () => {
        const runner = new EthernityCloudRunner();
        // this is a server provided by Ethernity CLOUD, please bear in mind that you can use your own Decentralized Storage server
        const ipfsAddress = 'https://ipfs.ethernity.cloud:5001';
        runner.initializeStorage(ipfsAddress);

        const onTaskProgress = (e) => {
            if (e.detail.status === ECStatus.ERROR) {
                console.error(e.detail.message);
            } else {
                console.log(e.detail.message);
            }
        };

        const onTaskCompleted = (e) => {
            console.log(`Task Result: ${e.detail.message.result}`);
        }

        runner.addEventListener(ECEvent.TASK_PROGRESS, onTaskProgress);
        runner.addEventListener(ECEvent.TASK_COMPLETED, onTaskCompleted);


        // there are two types of runners: 
        //    - Python(ECRunner.PYNITHY_RUNNER_TESTNET) 
        //    - Node.js(ECRunner.NODENITHY_RUNNER_TESTNET)
        // based on this you should use appropriate runner type
        // for this example we are using PYNITHY_RUNNER_TESTNET since we are executing a python script
        await runner.run(ECRunner.PYNITHY_RUNNER_TESTNET, code);
        // in case you want to use Node.js
        //await runner.run(ECRunner.NODENITHY_RUNNER_TESTNET, code);
    };

    return (
        <div className="container">
            <button className="centeredButton" onClick={executeTask}>Execute Task</button>
        </div>
    );
}

export default App;
```

11. **Application styling**

Now, navigate to the src/App.css file and proceed to enhance its content by adding the following CSS classes:

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

In conclusion, the above-mentioned code elegantly integrates the Ethernity Cloud Runner into your React app, enabling
seamless execution of Python/Node.js code snippets while facilitating interaction with the IPFS network for efficient data
storage and retrieval. As a professional developer, you can now leverage this integration to enhance your React
applications with powerful decentralized task execution capabilities.
