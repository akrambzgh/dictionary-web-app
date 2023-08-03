# Dictionary Web App

This is a Dictionary Web App, a simple web application that allows users to search for word definitions and meanings. The app is built using HTML, CSS, and JavaScript, and it utilizes a RESTful API to fetch word data from an external dictionary service.

## Features

- Search for word definitions and meanings.
- View example sentences for the searched word.
- Responsive and user-friendly design.
- Quick and easy word lookup.

## Demo

You can try out the live demo of the application by visiting [https://example.com/dictionary-app](https://example.com/dictionary-app)

## Installation

To run the Dictionary Web App locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/akrambzgh/dictionary-web-app.git
```

2. Navigate to the project directory:

```bash
cd dictionary-web-app
```

3. Open index.html in your web browser to use the application.

## API Usage

The app utilizes the "Dictionary API" to fetch word data. The API endpoints are as follows:

- Endpoint: https://api.dictionary.com
- Method: GET
- Parameters: The API accepts the following query parameters:
  - word (required): The word to look up.
  - language (optional): The language code (e.g., "en" for English, "es" for Spanish).

To use the API, you'll need to sign up for an API key from the "Dictionary API" website and replace the placeholder API key in the script.js file with your actual API key:

```js
const API_KEY = "YOUR_API_KEY_HERE";
```

## Contributions

Contributions to the Dictionary Web App are welcome! If you find any bugs, have feature requests, or want to improve the code, feel free to open issues and submit pull requests.

## Contact

If you have any questions or need assistance, feel free to contact the project owner:

- Name: Akram Bouzoualegh
- GitHub: akrambzgh
- Email: akrambzgh04@gmail.com

Thank you for using the Dictionary Web App! Happy word hunting! 📚🔍
