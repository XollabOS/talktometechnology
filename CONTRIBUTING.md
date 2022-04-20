# Contributing

Thank you for your interest in contribution to this project :-)

Before you get started, please familiarize yourself with the project structure, languages, and coding styles.

## Preparations

> **Note**
>
> You need to fork the repository into your user space to make changes and propose them to the upstream repository.

Fork the repository into your namespace using the UI or [CLI](https://github.com/cli/cli#installation).

Learn more about

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Manually forking and cloning a repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- [Syncing a fork with the upstream repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)

## Development Environment

### Development in Gitpod

Replace `YOURUSERNAME` in the URL `https://gitpod.io/#https://github.com/YOURUSERNAME/talktometechnology`, copy/open the URL and select to continue with GitHub. Inside Gitpod, you can make changes, create a new branch and Pull Request using the GitHub extensions.

### Local Development

Clone the forked repository, and replace `YOURUSERNAME` with your username or namespace.

```
$ USERNAME="YOURUSERNAME"
$ git clone https://github.com/$USERNAME/talktometechnology && cd talktometechnology
```

Follow the instructions with [local](README.md#local-environment) or [container](README.md#container-environment) environments.

## Languages and style guide

The project currently uses static files to render the content, and run client-side JavaScript.  HTML, JavaScript and CSS knowledge is recommended for code contributions.

Please follow the existing code style, and avoid changes in Pull Requests, for example indent changes.

## Workflows

Please create a new branch for any proposed changes, commit the changes, push the branch, and create a new Pull Request.

```
$ git checkout -b new-feature

$ git add changedfile newfile

$ git commit -v changedfile newfile -m "Add new feature X

More description or issue references #1"

$ git push -u origin new-feature
```

Open the URL shown in the server response to create a new Pull Request in the browser.

