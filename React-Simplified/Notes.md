#  React Notes


## 1. Using create react app commend
1. TO create react app use 

````
 npx create-react-app app-name
````

2. cd to the app folder, and to run the app use
  ````
  npm start
  ```` 
 

3. to create a prod version of application use
````
 npm run build
````
 

4. to run the production build  use
````
npm install -g serve
serve -s build
````

### 5. to know what commend you can  run check package.json script section

## 2. Using vite to create react app 
1. create command
```
npm create vite@latest
``` 
2. command to install dependencies
```
 npm i
```
3. to run the app use
```
npm run dev
``` 
4. to build prod version 

```
npm run build
```
5. to run prod version as preview

```
npm preview
```


## JSX

1. Using html in jsx
 *  for html and style attributes contain - , we need to use camelcasing for attributes.
    +  i.e remove the dash and capitalize the next letter after dash 
    +  example for tab-index use tabIndex, background-color to backgroundColor
 * cant use class as attribute name in jsx, need to use 
    + for class use className  
 *   for "for" attribute need to use htmlFor
 *   for custom data attributes can use dash like data-attributename 
 *   In jsx for following values we get no UI output. 
     + null, undefined, false

```jsx
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div id='largeDiv' className='large'>
      <label htmlFor='numberInput'>Enter Number </label>
      <input id='numberInput' type='number' defaultValue={3}/>
      
     </div>
    </>
  )
}
```

2. how react creates element from jsx using createElement method

```jsx
 return
 React.createElement("h1",{id:5,className:'demoId'},"Hi")

 <h1 id="5">Hi</h1>
```