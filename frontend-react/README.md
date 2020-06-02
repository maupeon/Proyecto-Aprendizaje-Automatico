This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Ejecuta la aplicación de forma local con Docker 

### Ve a la raiz del proyecto de React

`$ cd react-frontend`

### Crea y nombra la imagen de Docker

`$ docker build -t react-frontend-app:dev .`

### Ejecuta un contenedor de la imagen recien creada con el siguiente comando:

`$ docker run \`
`    -it \`
`    --rm \`
`    -v ${PWD}:/app \`
`   -v /app/node_modules \`
`    -p 3000:3000 \`
`    -e CHOKIDAR_USEPOLLING=true \`
`    react-frontend-app:dev`

¿Qué significan los tags anteriores?

1. The docker run command creates and runs a new container instance from the image we just created.
2. -it starts the container in interactive mode. Why is this necessary? As of version 3.4.1, react-scripts exits after start-up (unless CI mode is specified) which will cause the container to exit. Thus the need for interactive mode.
3. --rm removes the container and volumes after the container exits.
4. -v ${PWD}:/app mounts the code into the container at “/app”.
{PWD} may not work on Windows. See this Stack Overflow question for more info.
5. Since we want to use the container version of the “node_modules” folder, we configured another volume: -v /app/node_modules. You should now be able to remove the local “node_modules” flavor.
6. -p 3000:3000 exposes port 3000 to other Docker containers on the same network (for inter-container communication) and port 3000 to the host.
For more, review this Stack Overflow question.
7. Finally, -e CHOKIDAR_USEPOLLING=true enables a polling mechanism via chokidar (which wraps fs.watch, fs.watchFile, and fsevents) so that hot-reloading will work.

[Source:](https://mherman.org/blog/dockerizing-a-react-app/)

### Abre el siguiente url en el browser de tu preferencia

http://localhost:3000/

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
