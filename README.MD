# Input Password
Baisc React.js input password with cool features.

## How To Use
1. Install with `npm install react-input-password --save`.
2. Import to your "js" file: `import Input from 'react-input-password';`.
3. In your code, use like that: `<Input onChange={this.test}/>`.
4. See `example/basic.js` as reference.

## Features
1. Hide/Show password

## Todo
1. Password strength (Base on js regex).
2. Mobile-Like-View - Show only the last letter similar to how mobile password input behave.
3. In IE10+ input password we should disable the native browser icon since both features are the same but here we gain cross browser similar behaviour & look and feel.

## Bugs
1. When "revealActive" set to false - there is still padding at the end of the input.

## Screenshot

**Basic:**

![alt tag](examples/screenshot-basic.jpg)

## How to Contribute
1. Fork the project (top right button, in github UI).
2. Clone the forked repository to your machine.
3. Run `npm install`.
4. Run `npm start` (or better `npm run demon` in case you have `nodemon`, otherwise run `npm install nodemon -g`).
5. Create a new branch.
6. Go to `http://localhost:3334/`.
7. Write your code, commit and push to your own forked repository in the new branch.
8. Open a PR and wait for someone to review and merge to master.