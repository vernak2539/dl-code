## Deliveroo code test

### Running

```bash
$ git clone git@github.com:vernak2539/dl-code.git
$ cd dl-code
$ npm i
$ npm start
```

### Testing

This assumes you've already installed dependencies

```bash
# run tests in watch mode
$ npm test
```

### Standards

Uses prettier as a pre-commit hook, so it will rewrite all files before they are committed. This
means that the default prettier styles are the standards this code should adhere to.

### Assumptions

* Buttons and links do nothing
* Not using IE (one part needs a feature that's not implemented. Would be relatively easy to replace)
* No 3rd party CSS library is used or no preprocessor is used
  * would've liked to use LESS or SCSS to make styles easier

### Decisions

* Snapshot testing
  * while this requires devs to know what the desired outcome is already, they are simple to use when
    wanting to only test rendering. I can see arguments for and against this
* Styles in stylesheet
  * lots of the styles here are not shared. This means they could easily be moved into the component
    files and inserted as styles on the html tag. Again, can see arguments for and against this
* Loading data
  * When loading the restaurant information via a fetch request, there are a few seconds that we don't have
    data. To combat this, I put the text "Loading..." in the place of content while it's loading.
    It looks a bit weird, but could combat this in a short time and implement a loading icon/spinner
