---
nav:
  title: Flet
  order: -1
group:
  title: Project-2023
  order: 0
---

# Flet

## Exploring Flet: Building Multi-User Web, Desktop, and Mobile Apps Framework

Last month (August 2023), I had my first real encounter with Flet. I had heard about Flet back in 2022 when I was working on a Flutter project, but at that time, the project was still in beta testing, so I didn't dare to try it. Now, in 2023, I'm eager to find out how this project has progressed.

### What is Flet?

Flet is a framework that allows you to build interactive multi-user web, desktop, and mobile applications using your favorite programming language, without the need for front-end development expertise.

### Key Features

- **Rapid Development**: Flet lets you go from concept to application in minutes, serving a group of users.

- **Simplified Architecture**: No need for complex architectures like JavaScript front-end, REST API back-end, databases, and caching. With Flet, you only need to write a holistic, stateful application in Python to get a multi-user real-time single-page application (SPA).

- **All-In-One**: To start developing with Flet, all you need is your preferred IDE or text editor. No SDKs, no myriad dependencies, no complex tools - Flet comes with a built-in web server that hosts assets and desktop clients.

- **Powered by Flutter**: Flet UI is built with Flutter, so your applications look professional and can be delivered to any platform. Flet simplifies the Flutter model by composing smaller "widgets" into ready-to-use "controls" with an imperative programming model.

- **Language-Agnostic**: Flet is language-agnostic, allowing anyone on the team to develop Flet applications in their preferred programming language. Python is already supported, with Go, C#, and more to follow.

- **Cross-Device Delivery**: Deploy Flet applications as web apps for viewing in the browser. Package them as standalone desktop applications for Windows, macOS, and Linux. Install them as PWAs on mobile devices or view them through Flet applications for iOS and Android.

### Installation and Usage

To install Flet, you can use the following command:

```
pip install flet
```

Here's a simple counting example:

```python
import flet
from flet import IconButton, Page, Row, TextField, icons

def main(page: Page):
    page.title = "Flet Counter Example"
    page.vertical_alignment = "center"

    txt_number = TextField(value="0", text_align="right", width=100)

    def minus_click(e):
        txt_number.value = int(txt_number.value) - 1
        page.update()

    def plus_click(e):
        txt_number.value = int(txt_number.value) + 1
        page.update()

    page.add(
        Row(
            [
                IconButton(icons.REMOVE, on_click=minus_click),
                txt_number,
                IconButton(icons.ADD, on_click=plus_click),
            ],
            alignment="center",
        )
    )

flet.app(target=main)
```

To run the program, you can use the following command:

```
python counter.py
```

If you want the application to run only in the browser, you can configure it as follows:

```
flet.app(target=main, view=flet.WEB_BROWSER)
```

By default, it runs on the desktop, but it starts a web server on a random port during startup, allowing access through the web.

Now, let me tell you about some amazing things I've done with Flet, and you can learn about them slowly.

