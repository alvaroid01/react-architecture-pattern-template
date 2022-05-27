# About this template

This template was created with the purpose of offering a scalable project with a clean  architecture and ordered folder structure to use in a React application.

## Template structure

This template gets rid of some unnecessary files that are created when launching the create-react-app command and puts all the relevant src folders inside the modules folder.

This folder contains:
-Assets: this folder will hold all the recources and assets such as images or videos.

-Components: in which all the components of the application will be created. For the sake of reusability I hae included a common folder for those components that may be used in multiple parts of the app. There is also a index.js file inside of which all the components will be imported and then exported. This way the imported files can be easily spotted and read i.g: 
```
//Old import

import TestComponent from './modules/components/common/TestComponent/TestComponent';

//New import

import { TestComponent } from './modules/components';

```

-Constants: this folder contains a locales folder in which all the translations will be located separated on the different languages we want.

-Context: context folder is for the Contexts and Provider or all the Redux-related files.

-Services: this folder purpose is to hold all the API call and all the interactions with the backend or an external API as well as the React router files and routes.    It also contains an index.js which can be used the same way as the one above.

-Utils: here we will put all the custom hooks or helpers to be used in the app.

-Views: last but not least we have the views folder divided into public and private which will hold all the ui of the application.

It is important to separate the UI from the logic to make the app scalable and organized. When creating a component it would be ideal to create a hook for each component inside the utils/hooks folder and separate all the big and convoluted components into subcomponents to avoid having big and bulky files and be able to find whatever we are looking for easily.




