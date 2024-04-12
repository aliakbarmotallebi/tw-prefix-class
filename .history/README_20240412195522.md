#  tw class prefixer

This script automatically adds a prefix to all class names in HTML files. It's particularly useful for projects using Tailwind CSS, where you may want to prefix all class names with "tw-" for clarity and consistency.

## Requirements

- Node.js installed on your system

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/aliakbarmotallebi/tw-prefix-class.git
    ```

2. Navigate to the project directory:

    ```bash
    cd tw-prefix-class
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Place your HTML files in the `input` directory.

2. Open the `index.js` file in a text editor.

3. Modify the `prefix` variable to the prefix you want to add to your class names (e.g., "tw-").

4. Run the script:

    ```bash
    npm run output
    ```

5. The prefixed HTML files will be generated in the `output` directory.

## Example

Suppose you have an HTML file named `index.html` with the following content:

Input : 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="container mx-auto">
        <p class="text-center">Hello, world!</p>
    </div>
</body>
</html>
```


Output: 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="tw-container tw-mx-auto">
        <p class="tw-text-center">Hello, world!</p>
    </div>
</body>
</html>
```