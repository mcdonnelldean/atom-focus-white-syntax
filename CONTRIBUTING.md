# Contributing
Focus White is an __open project__ and encourages participation regardless or race, gender, or
sexual orientation. If you feel you can help in any way please be our guest.


Contributing is not always about adding new features, there are plenty of other ways to get
involved, for instance:

- add more languages
- optimize styling performance.
- report, find and/or fix bugs.

Like any other project there is plenty to be done for people of all skill levels and specialities,
if you have any questions, simply open an issue in the project's [Issues Section][] on GitHub.

## Obtaining the Source
In order to obtain the source for Focus White we first suggest you fork it on Github. After this is
done, navigate to a suitable directory on your machine and run:

```
git clone https://github.com/<USERNAME>/atom-focus-white.git
```

This will pull your fork into a new folder `/atom-focus-white`, move to this directory using:

```
cd atom-focus-white
```

You now have access to your own local copy of Focus White to do as you please with.

## Making a Contribution
If you have something you would like to contribute first ensure your master branch is up to date
with ours, we assume a remote named mcdonnelldean exists that points to the master repo.

```
git checkout master
git pull --rebase mcdonnelldean master
```

Next, create a branch for your contribution:

```
git checkout -b name-of-my-branch
```

Go ahead and work on your feature creating commit's as needed. To create a commit at the command
line simply do:

```
git add --all
git commit -m "a commit message"
```

If you need to create multiline commit messages simply press enter before adding the second `"`
this will cause the console to add a line break to the commit and put the curser on a new line,
to finish simply close the string and press enter.

## Creating a Pull Request
Commit your changes until you are happy. Once you are ready to submit a pull request jump back
out to master and rebase again to ensure you have the latest source:

```
git checkout master
git pull --rebase mcdonnelldean master
git push -f origin master
```

Next jump back on to your branch and rebase it with your newly updated master:

```
git checkout name-of-my-branch
git rebase master
git push -f origin name-of-my-branch
```

Finally navigate to your fork on github. You should see a small marker to create a pull
request, just above the repo explorer. Make sure you add some information along with your
pull request, it makes reviewing it easier.

## License
Licensed under [MIT](./LICENSE) 2015 Dean McDonnell

[Issues Section]: https://github.com/mcdonnelldean/atom-focus-white/issues
