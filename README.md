This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# My React Resume
Got bored of updating a word document resume so I wrote it in React. Using [react-pdf](https://react-pdf.org/) made it possible to build a PDF document with React components.

Master branch deployed on Netlify: [https://francis-enriquez-resume.netlify.com/](https://francis-enriquez-resume.netlify.com/)

## Getting Started
```
git clone https://github.com/omgitsfrancis/my-react-resume
cd my-react-resume
npm install
```
## Serving Locally
```
npm start
```
Resume will be served on [http://localhost:3000/](http://localhost:3000/)

## Exporting Straight to PDF
All PDF exports will be placed in the 'export' folder.
Instead of  `npm start` use:
```
npm run export
```