<div align="center">
  
  # Hoodier - eCommerce - Challenge Project* 
 


https://user-images.githubusercontent.com/98871279/179299022-dda585d0-eacf-4b26-b6a6-a48f3652434d.mov



</div>
  
  ### Tech stack used: 
  - Next.js
  - TailwindCSS
  
  ### Problems I've encountered
  
  Implementing `localStorage` into Next.js was more triciker than I anticipated. When trying to access the items in your `localStorage`, the first time the page renders, the `window` object returns `undefined` therefore it throws you an error and crash your app.
  
The solutions I've found didn't work out in my case but these are the suggested solutions:

```
if(typeof window !=== "undefined") {
  // do something here
}
```
or put the whole logic in `useEffect`. This is recommended more since `useEffect` fires only on CSR. Therefore `window` is not undefined. 

In my case what worked is: 

```
 useEffect(() => {
    const timer = setTimeout(() => {
      const data = getItemsFromLocalStorage();
      setLocalStorageData(data);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
```
Putting a `setTimeOut` delayed the render just a little bit and it is more than enough. 
> Still not sure if it's the best practice but hey if it's working, it's working. 😅
 
