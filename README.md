# Hangman

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Customizing game

The game loads words from a json file with below structure. You can change the source in `environments.apiUrl`

```javascript
[{ answer: "answer" }];
```

You can also change the letters depending on the language of words. You can set them up with `environments.letters`
