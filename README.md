# CNAM UI Kit

This repository contains a bunch of graphical components re-usable across different projects.

## FAQ

### Why is my header too small for CNAM logo?

![Cropped Header](./readme/cropped-logo.png)

It is likely you miss the `Open Sans` font. Add the following tag to your page `head`:

```xml
<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
```

This is due to the use of `ex` CSS unit, based on the first available font `x` character height.
