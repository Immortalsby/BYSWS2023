---
nav:
  title: Flet
  order: -1
group:
  title: 项目-2023
  order: 0
---

# Flet
## 了解 Flet：构建多用户Web、桌面和移动应用的框架

上个月（2023.08），我第一次真正接触了Flet。早在2022年，我曾在一个Flutter项目中听说过Flet，但当时项目还处于Beta测试阶段，因此我没有尝试使用它。现在已经是2023年了，我很想知道这个项目的进展如何。

### 什么是 Flet？

Flet是一个框架，允许您使用您喜欢的编程语言构建交互式多用户Web、桌面和移动应用程序，而无需具备前端开发经验。

### 主要特点

- **快速开发**：Flet让您可以在几分钟内从概念到应用程序的开发，为多个用户提供服务。

- **简单架构**：不需要复杂的架构，如JavaScript前端、REST API后端、数据库和缓存等。使用Flet，您只需使用Python编写整体式的有状态应用程序，即可获得多用户实时单页应用程序（SPA）。

- **一站式开发**：要开始使用Flet进行开发，您只需要使用您喜欢的IDE或文本编辑器。无需SDK、复杂的依赖项或工具。Flet具有内置的Web服务器，其中包含托管资产和桌面客户端。

- **由Flutter提供动力**：Flet UI是使用Flutter构建的，因此您的应用程序看起来非常专业，并且可以交付到任何平台。Flet通过将较小的“小部件”组合成具有命令式编程模型的即用型“控件”来简化Flutter模型。

- **语言无关**：Flet不受语言限制，因此团队中的任何人都可以使用自己喜欢的编程语言开发Flet应用程序。目前已支持Python，Go，C#等，更多语言也在不断添加中。

- **跨设备交付**：将Flet应用程序部署为Web应用程序，可以在浏览器中查看。将其打包为适用于Windows、macOS和Linux的独立桌面应用程序。或者将其作为PWA安装到移动设备上，并通过适用于iOS和Android的Flet应用程序进行查看。

### 安装与使用

要安装Flet，您可以使用以下命令：

```
pip install flet
```

下面是一个简单的计数示例：

```python
import flet
from flet import IconButton, Page, Row, TextField, icons

def main(page: Page):
    page.title = "Flet计数示例"
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

要运行该程序，可以使用以下命令：

```
python counter.py
```

如果您希望该应用程序仅在浏览器端运行，您可以进行如下配置：

```
flet.app(target=main, view=flet.WEB_BROWSER)
```

默认情况下，它会在桌面端运行，但在启动时会在随机端口上启动一个Web服务器，以便在Web端进行访问。

现在，让我来介绍一些我用Flet做的一些令人惊叹的事情，您可以慢慢了解。