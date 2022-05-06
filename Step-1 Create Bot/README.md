## INSTALLATION

Create you account on [Replit](https://replit.com/~) and create node.js project.([click me to create project](https://replit.com/new/nodejs))<br />
Node.js 16.6.0 or newer is required for using discord.js v13 so we will upgrade our node version to 16.6.0 or above.

**STEP : 1**<br />
Delete `Package.json` and `Package-lock.json` from your project and type this command in replit shell.
```
npm init -y && npm i --save-dev node@17.0.1 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH
```
**STEP : 2**<br />
Now we have execute npm start so we will create a file `.replit` and type this code in it.
```
run= "npm start"
```
**STEP : 3**<br />
Now we have to run our main file so we will add this code in script section of `Package.json`.
```
"start": "node index.js"
```

## VIDEO

If you need [video tutorial](https://youtube.com/channel/UCC1pjmMDmy6v1bmp_KygwFg) then visit our YouTube channel !
<div align="center">
  <p>
    <a href="https://youtube.com/channel/UCC1pjmMDmy6v1bmp_KygwFg">
  </p>
</div>

## SUPPORT

If you don't understand something from my tutorial, you are getting errors, or you need help related to tutorial, please don't hesitate to join our official [support server](https://dsc.gg/nxtlvedevs).
