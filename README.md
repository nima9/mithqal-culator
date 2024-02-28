# Mithqál-Culator

The Mithqál-Culator is a Mithqál Calculator (get it?) web application built with Svelte and Astro that allows users to calculate the value of gold and silver in various currencies in Mithqáls.

## Features
- Can copy the calculated value to the clipboard by clicking on the total price.
- Displays the date and time of when metals and currency values were last updated.
- Metals and currencies values update once a day (by calling `runMetalsAPI.js` in bun run build:prod) and timestamp value is then updated.

## Usage

1. Open the [Mithqal Calculator](https://mithqal.app/) in your browser.
2. Enter the amount of metal in Mithqal(s) in the input field.
3. Click on the button to switch between gold and silver.
4. The calculated value will be displayed in the selected currency.
5. Click on the calculated value to copy it to the clipboard.

## Development

To run the project locally (if you want?), use the following commands:

```sh
# Install dependencies
bun install

# Build the project
    bun run build

    # OR: 
    # Call the Metals API and build the project (for production) 

    bun run build:prod

# Start the development server
bun run dev
```



To build the project, use the following command:

```sh
bun run build
```

## API

The application uses an API to get the current values of gold and silver (from [Metals.dev](https://metals.dev/)). The API is called in the [`runMetalsAPI.js`](command:_github.copilot.openRelativePath?%5B%22runMetalsAPI.js%22%5D "runMetalsAPI.js") script.

## The Tools used:

- Astro
- Svelte
    - shadcn-svelte
- Tailwind CSS
    - DaisyUI
- Bun
- Prettier
- Github Actions
- Netlify


## Contributing

Contributions are welcome. Please make sure to update tests as appropriate.