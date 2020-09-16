This project was bootstrapped with [Create React
App](https://github.com/facebook/create-react-app), and uses the
[ace-editor](https://ace.c9.io/).

# Github Math

Have you ever had trouble expressing mathematical ideas in a Github readme?

Have you ever become tired of typing `&frasl;`, `&lfloor;` or `&isin;`?

Well, don't you fret! Github has basic LaTeX style math encoding ability, and
this app will streamline the process of going from something like `x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}` to ![x = \frac{-b \pm \sqrt{b^2 -
4ac}}{2a}](https://render.githubusercontent.com/render/math?math=x%20%3D%20%5Cfrac%7B-b%20%5Cpm%20%5Csqrt%7Bb%5E2%20-%204ac%7D%7D%7B2a%7D)
in no time.

## Usage

1. Open the [app](https://shlappas.com/github-math/).

2. Enter some mathematics.

3. Get the url. This is what github uses to generate your image. You can do this
   by clicking the preview image.

4. Use the url as the source for an image.

## Examples

### Standalone

```markdown
The sigmoid function, g, is defined on complex numbers z as:

![sigmoid](https://render.githubusercontent.com/render/math?math=g(z)%20%3D%20%5Cfrac%7B1%7D%7B1%20%2B%20e%5E%7B-z%7D%7D)
```

The sigmoid function, g, is defined on complex numbers z as:

![sigmoid](https://render.githubusercontent.com/render/math?math=g(z)%20%3D%20%5Cfrac%7B1%7D%7B1%20%2B%20e%5E%7B-z%7D%7D)

### Inline

It can also be used inline:

```markdown
A **simple function** on
![the reals](https://render.githubusercontent.com/render/math?math=%5Cmathbb%7BR%7D)
is a measurable function
![phi](https://render.githubusercontent.com/render/math?math=%5Cphi%3A%5Cmathbb%7BR%7D%5Cto%5Cmathbb%7BR%7D)
such that
![the domain of phi](https://render.githubusercontent.com/render/math?math=%5Cphi(%5Cmathbb%7BR%7D))
is finite.
```

A **simple function** on
![the reals](https://render.githubusercontent.com/render/math?math=%5Cmathbb%7BR%7D)
is a measurable function
![phi](https://render.githubusercontent.com/render/math?math=%5Cphi%3A%5Cmathbb%7BR%7D%5Cto%5Cmathbb%7BR%7D)
such that
![the domain of phi](https://render.githubusercontent.com/render/math?math=%5Cphi(%5Cmathbb%7BR%7D))
is finite.
