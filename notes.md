# Course Structure

- ### Install MUI in a react application
- ### Typography
- ### Components
  - Inputs / Form controls
  - Layout
  - Navigation
  - Data display and feedback
  - MUI Lab
- ### MUI Customization

## Typography

- Typography component - using variant attribute we can change html tags eg: h1-h6,subtitle,body1-2
- ```
  <Typography variant="h1">h1 Heading</Typography>
  ```
- using Typography we can customize the semantic tag which is getting added to the html using an attribute called **<span style="color: tomato">component</span>**
  - eg:
  ```ts
  <Typography variant="h4" component="h1">
    h4 Heading
  </Typography>
  ```
- **<span style="color: tomato">gutterbottom</span>** adds margin-bottom to the tag
- eg:
  ```ts
  <Typography variant="h4" component="h1" gutterBottom>
    h4 Heading
  </Typography>
  ```
