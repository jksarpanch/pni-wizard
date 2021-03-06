# Analytics-Wizard

Analytics-Wizard is a Javascript library for handling dynamic questions on a wizard.

## Installation

Use the npm package manager to install Analytics-Wizard.

```bash
npm install analytics-wizard
```

## Usage as module

```typescript
import * as wizard from 'analytics-wizard'

wizard.openInteractiveWizard() // opens wizard
wizard.closeInteractiveWizard() // closes wizard
wizard.showNextQuestion() // Display next question 
```

Add <Analytics-Wizard></Analytics-Wizard> in main body of root html file

## Usage as commonjs module
## index.html or root file
```html
<html>
<head>
 <link rel="stylesheet" href="./node_modules/analytics-wizard/dist/style.css">   
 <script src="./node_modules/analytics-wizard/dist/index.js"></script>
 ...
 ...
 </head>

 <body>
    <Analytics-Wizard></Analytics-Wizard>
    <!-- Or -->
    <div class="pni-wizard" id="pni-interactive-wizard" positioning='true' top='10%' right='5%' left="10%"></div>

    ...
    ...
 </body>

 ...

 </html>
```

## commonjs events
```javascript
// PniWizard will be global object
PniWizard.openInteractiveWizard() // opens wizard
PniWizard.closeInteractiveWizard() // closes wizard
PniWizard.showNextQuestion() // Display next question 
```

## Wizard Positioning
For setting the position of the analytics-wizard on the page there are few attributes that can be passes.  
```HTML
Attributes:  
    - positioning: This is a boolean flag that should be set true for setting the wizard position.  
    - top: This value can be passed as percentage or pixel to set top position of the wizard.  
    - right: This value can be passed as percentage or pixel to set right position of the wizard.  
    - left: This value can be passed as percentage or pixel to set left position of the wizard.  
If both right and left position values are passed then right will take precedence.  
```
Example:  
```HTML
<Analytics-Wizard positioning='true' top='10%' right='3%' left="10%"></Analytics-Wizard>
OR
<Analytics-Wizard positioning='true' top='20px' right='17px left="15px"></Analytics-Wizard>  
OR
<div class="pni-wizard" id="pni-interactive-wizard" positioning='true' top='10%' right='3%' left="10%"></div>
OR
<div class="pni-wizard" id="pni-interactive-wizard" positioning='true' top='20px' right='17px left="15px"></div>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)