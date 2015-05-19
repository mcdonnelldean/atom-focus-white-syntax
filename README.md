# Focus White
[![use-with][use-with-badge]][use-with-url]
[![git][git-badge]][git-url]
[![apm][apm-badge]][apm-url]
[![nearform][nearform-badge]][nearform-url]

Focus White is a hyper minimal syntax theme for [Atom.io][] which removes superfluous highlighting in
favor of more focused highlighting that helps draw the eye to read instead of just acknowledging keywords by
color.

## How To Install
It is recommended that packages are installed via APM or Atom's package management interface. Packages should
only be installed manually when you want to modify, debug, or otherwise change the package itself. Manually
installed packages will not take advantage of Atom's updater mechanism.

### Via Atom's preferences pane

1. Open atom's preferences pane
2. On the sidebar, choose install
3. Toggle the _search packages_ search bar to Themes
3. In the _search themes_ box, search for _focus white_
4. Choose the correct package, the author will be _mcdonnelldean_
5. Hit install on the the found package
6. Select Themes from the sidebar
7. In the themes dropdown select Focus White
8. Restart any instances of Atom.io

### Using APM

1. Open the command line
2. Run `apm install focus-white`
3. Open atom's preferences pane
4. Select Themes from the sidebar
5. In the themes dropdown select Focus White
6. Restart any instances of Atom.io

### Manually

1. Fork this repository
2. Pull down your fork via github
3. Open the terminal in the package's root directory
4. Run `apm link`, which will symlink the package to Atom
5. Open atom's preferences pane
6. Select Themes from the sidebar
7. In the themes dropdown select Focus White
8. Restart any instances of Atom.io

## Supported Languages
Language support is on a per needed basis. If you need a particular language to be supported, create an
issues with some sample code to use and I will include support for it with the next feature update.

### Javascript

![js-sample][]

Note that this theme styles the full editor pane, that means the whole pane, including gutters and
gutter symbols will be overridden for styling. This is in line with Atom's best practices for Syntax vs
UI theming.

## Contributing
Focus White is an __open project__ and encourages participation regardless or race, gender, or sexual
orientation. If you feel you can help in any way please be our guest. See our [Contributing Guide][] for
information on how to pull this repository as well as how to create a pull request to send to us.

## License
Licensed under [MIT](./LICENSE) 2015 Dean McDonnell

[use-with-badge]: https://img.shields.io/badge/use%20with%20-atom.io-green.svg?style=flat-square
[use-with-url]: https://atom.io
[git-badge]: https://img.shields.io/github/release/mcdonnelldean/atom-focus-white-syntax.svg?style=flat-square
[git-url]: https://github.com/mcdonnelldean/atom-focus-white-syntax/releases
[apm-badge]: https://img.shields.io/apm/v/atom-focus-white-syntax.svg?style=flat-square
[apm-url]: https://atom.io/packages/atom-focus-white-syntax
[nearform-badge]: https://img.shields.io/badge/sponsored%20by-nearForm-red.svg?style=flat-square
[nearform-url]: http://nearform.com

[Atom.io]: https://atom.io/
[Contributing Guide]: ./CONTRIBUTING.md

[js-sample]: ./images/js-sample.png
