# Markdown Features

## In-line HTML/CSS

You can include in-line HTML/CSS in markdown files. One trick to know though is that the markdown preprocessor needs a blank line before and after the HTML/CSS block. For example, this will not work:

```md
<div class='something'>
Make this **bold** using markdown.
</div>
```

Instead you have to write it like

```md
<div class='something'>

Make this **bold** using markdown.

</div>
```

with the new line before the markdown text begins.

This is also true around [slots in layouts](/layouts#slots).

So

```md
:: left ::
This is **markdown**
```

will not work but

```md
:: left ::

This is **markdown**
```

is good.

## Highlight

You can highlight text

```md
This is my ==highlighted text==.
```

Using the `==` syntax. Like ==this==.
