What is redux?
- Redux is a predictable state management library that contains the application's state. 
- Replacement for Flux
- Allows state values + reducer actions to be connected to any component
   - Helps with efficiency + cleanliness of the code

Why redux? What do you get out of using redux?
- Avoids prop drilling
- Easier to see changes in state -> allows you to see when + how the state changes
- Manages state globally
- Keeps code DRY
- The code only connects state to components that NEED it
- State management is more predictable

 How much different is angular to redux?
 - Yes, there is a lot different - more comparable to react than to redux. You can use redux with angular
 - Vue is more similar to redux + very well organized

 Would Provider wrap Router or vice versa?
 - Depends on the application - 9/10 times probably wrap the Router with the Provider 
 - Provider is usually applied to everything
 