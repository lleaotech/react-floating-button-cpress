<h1 align="center">React Awesome Floating Button</h1>


<br>


### <h1 align="center">An Awesome & Unique Customizable Floating Button</h1>

<p align="center">
    Powered by Lleaotech derivated from The WuuD Team
</p>

## Build & Run



#### Install

With npm

```bsh
npm install react-floating-button-cpress
```


#### Usage

```javascript
import { FloatingButton, Item } from "react-floating-button";
import downloadIcon from "./assets/DOWNLOAD.svg";
import forwardIcon from "./assets/FORWARD.svg";

<FloatingButton>
  <Item
    imgSrc={downloadIcon}
    onClick={() => {
      console.log("callback function here");
    }}
  />
  <Item
    imgSrc={forwardIcon}
    onClick={() => {
      console.log("callback function here");
    }}
  />
</FloatingButton>;
```

## Options

### FloatingButton

| Property        | Description                                                                          | Type    | Default   |
| --------------- | ------------------------------------------------------------------------------------ | ------- | --------- |
| right           | Specify if the button should be on the right if false the button will be at the left | boolean | `true`    |
| top             | Specify if the button should be on the right if false the button will be at the left | boolean | `false`   |
| size            | The size used for the buttons                                                        | number  | `60`      |
| backgroundColor | The backgroundColor for the main button                                              | string  | `#8f1d30` |
| color           | The color for the burger icon                                                        | string  | `#dbdbdb` |

### Item

| Property        | Description                      | Type   | Default   |
| --------------- | -------------------------------- | ------ | --------- |
| imgSrc          | The icon to use on given button  | string | -         |
| backgroundColor | The backgroundColor for the Item | string | `#dbdbdb` |
| onClick         | Called when an item is clicked   | func   | -         |

## Attribution


- Built & Developed from [React JS](https://reactjs.org/)


## License

The code is available under the [MIT] license.


