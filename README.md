# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript regexes
- fetch() api and JSON data
- Accessible markup


### What I learned
* **Slug generator**:I learned how to create a slug generator.A slug is basically a url friendly version of a string.
for example ```Douglas Punk``` would be ```douglas-pank```.
heres the function 
```js
const toSlug = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
```
  **How it works**:Take ```toSlug(' #Musasizi Solomon!!')```
    **1**: The text in quotes will  be the argument of the function which is assigned to value. ```js value.toLowerCase``` will return ``` #musasizi solomon!!```
    **2**: ``` .trim()``` will remove the whitespaces at the beginning and the end of the string returning ```#musasizi solomon!!```
    **3**:The tough part ```.replace(/[^a-z0-9]+/g, "-")``` '//'indicates that this is a regex,'[]'contains the characters to be matched.when '^' is inside the '[]',it represents not(complement of what is inside.```0-9```numbers from 0 to 9,```a-z``` lowercase letters from a to z.'+' means one or more characters that match the criteria. and the ```g``` is for global meaning replace everything matching the criteria. Now the final part '-' means replace with```-```
    which means ```[^a-z0-9]``` not a lower case letter or number
    So this says So this says:
    > Find anything that is NOT a lowercase letter or number and replace it with ```-```
    thus ```#musasizi solomon!!``` would become ```-musasizi-solomon--```
    **4** Then ```.replace(/^-+|-+$/g, "")```.
    '//'~regex
    '^' if outside '[]' it means start of string,
    '-' matches the ```-``` character
    '+' one or more that fit the criteria
    '|' means or
    '$' means end of string
    which means ```^-+```one or more dashes at the start of the string or ```-+$``` one or        more dashes at the end of the string
    So this says:
    > Remove leading or trailing dashes.
    thus ```-musasizi-solomon--``` becomes ```musasizi-solomon```
    **5**: Mission successful ~slug generated
* **how to use ```js fetch()``` properly**
  At first,I tried it without async and await as a raw function and had failed to get the data into my global variables.
  ```js
  const loadCrewData = () => {
  const response = fetch("./data.json");
  const data =response.json();
  return data.crew;
};
const crewMembers = loadCrewData();
console.log(crewMembers);
  ```
this failed because fetch() does not return data immediately.

It returns a Promise, which is like a “Im going to give you the burger” instead of immediately "handing us the burger"
The proper way
```js
const loadCrewData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data.crew;
};
```
```js async``` tells javascript that this function is asynchronous so here is a promise continue with other things as i bring you **whats inside the function**.
```js await fetch("./data.json")``` await says something like ..wait  as fetch gets the burger before biting at nothing.
```js 
  const data = await response.json();
```
wait as I format this response into something javascript can understand.
In this case data is the actual JSON response but ```js return data.crew```
specifies that we want the crew array only
**The more confusing part**:```js console.log(loadCrewData())``` wouldnt work,it would return a promise since it asynchronous.
the  solution would be ```js console.log(await loadCrewData())```this means wait,dont do anything before we bring you the data.

 **the broken analogy**:Think of fetch like ordering food:

   * You order (fetch) → the kitchen prepares it (async)

   * You wait for delivery (await) → only then can you eat (use data)

   *  If you try to eat before it arrives → nothing to eat (undefined / errors)



### Continued development
I loved doing this project using vanilla js  and i think I would like to redo or advance it using Vue js.


### AI Collaboration
I used ChatGPT,and Copilot.
**Copilot**-inline code suggestions especially since i had four javascript file and the major differences were recurring words like,destiantion,technology...so it helped me a lot not to die in the boring part of the project replacing words.
**ChatGpt**-It helped me while debugging my code to point out potential sources of error...btw i didnt know live server could glitch..thatnks to GPT im now aware.


## Author

- Website - [Raya Atta](https://www.your-site.com)
- Frontend Mentor - [@Rayaatta](https://www.frontendmentor.io/profile/rayaatta)

## Acknowledgments
I would like to thank web dev simplified because i learnt how to use JSON files from their video.
WEb dev simplified is a youtube cannel so,you can check it out
.
HAPPY CODING
