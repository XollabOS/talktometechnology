# Talk to Me Technology

Talk to me technology is a open source communication board to give access to every person who needs assistance with verbal communcation by providing a free AAC digital communication board. The Goal of this project is to eliminate economic barriers and paywalls for those who require this assistive technology.

![Animated overview](https://user-images.githubusercontent.com/76171953/162774535-fd5d0859-95f3-433b-8f9f-00c33b5d2229.gif)

# ✨ Features

- Communication board with accessible colors and actions
- Play sound and provide feedback
- Color scheme based on Fitzgerald key

## Color Scheme

This communication board uses the Fitzgerald Key Groups parts of speech. The key assigns colors to different parts of speech to make it easier to find the right kind of word.

| Color  | Description  |
|--------|--------------|
| Blue   | adjectives   |
| Green  | verbs        |
| Yellow | pronouns     |
| Orange | nouns        |
| White  | conjunctions |
| Pink   | questions    |
| Brown  | adverbs      |
| Red    | important function words, negation, emergency words |

# ✨ Product Roadmap 

* Vision:
  To build an open source communication board to give access to every person who needs assistance with verbal communication

* Goals:
The goal of this project is to eliminate economic barriers and paywalls for those who require the assistive technology 

* Timeframe:
The project will have feature based iterations that will be released throughout the build process


* Feature-User journey:
1. Signup for an account
2. Edit and customize their profiles enabling the user to create custom communication boards
3. Display the links to all their social media handles and their other websites
4 Get information about visits to their profiles and clicks to their links
5 Get details of visitors for a mailing list
6 A social-fi feature on the app where users can communicate via sms as well as use to make phone calls
7 Switching on and deactivating accounts
8 Suggest features and report bugs
9. Change pins and passwords

# ✨Future Features:

* Dashboard to check analytics like clicks, the click through rate (CTR), total view of the profile and activities.

* Editor: Can be used for customization - to change themes & modes; to edit links, & profile information, add or remove elements etc

* Payment feature: There’s no payment features as it will be accessible free for all users

* Feedback: To report bugs, to suggest additional features

* Tips card: to offer tips on how to navigate the platform easily.

* Personalization feature: that allows users to indicate their areas of specialty and specializations to help model the look and feel of their space or profile on the web app

## Setup

The repository uses static HTML/JavaScript files which can be cloned and served by a webserver.

The following sections describe different environments to get started.

### Gitpod Environment

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/XollabOS/talktometechnology)

### Local Environment

Clone this repository and run the static files with a webserver (e.g. Nginx/Apache, or different HTTP servers).

```
$ git clone https://github.com/XollabOS/talktometechnology && cd talktometechnology
```

Python provides a small HTTP server for development, including live preview of changes.

Install Python using your preferred package manager, for example Homebrew on macOS:

```
$ brew install python3
```

Run the `http.server` module and set the listening port to `3000`.

```
$ python3 -m http.server 3000
```

Navigate to http://localhost:3000 in your browser.

> **Note**
>
> There are alternative HTTP server implementations in NodeJS, PHP, etc. in case you do not want to use Python.

### Container Environment

> **Note**
>
> This environment uses containers and may require advanced knowledge in case of failure.

Install [Docker](https://docs.docker.com/get-docker/) or available [alternatives on macOS](https://dnsmichi.at/2022/03/15/docker-desktop-alternatives-macos-podman-nerdctl-rancher-desktop/), Windows or Linux.

Clone this repository to run a HTTP container image serving the content.

```
$ git clone https://github.com/XollabOS/talktometechnology && cd talktometechnology
```

Run the `nginx:latest` container image, listen on port 3000 and mount the current directory into the Nginx default webserver root directory `/usr/share/nginx/html`.

```
docker run -ti --rm -d -p 3000:80 --name ttmt -v `pwd`:/usr/share/nginx/html nginx
```

Navigate to http://localhost:3000 in your browser.

You can modify the source code and preview the changes live in your browser.

Cleanup/delete commands:

```
$ docker ps
$ docker stop ttmt
```

<!-- TODO
#### Images

#### Kubernetes
-->

# Contributing

Thank you for your interest in contribution to this project :-)

Please follow the guide in [CONTRIBUTING.md](CONTRIBUTING.md)

# License

[MIT](https://github.com/XollabOS/talktometechnology/blob/main/LICENSE)
