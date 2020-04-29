## 協作方式

頻繁使用 **社群軟體** 溝通，每成功修改掉相似的 bug，就建立一個新版本。

## 註解方式

以**日期**的形式註解。

```html
<!--20200305-->
<label for="search"></label>
```
---

## 本次的進度

1. 學姊先看一下效果，是否 OK。
2. 如果有 html tag 使用 inline style css，要將它移除。
3. 原因如下，`h1` 最後會呈現 `2rem`。

priority 較高

```html
<h1 style="font-size:2rem;">Hello World</h1>
```

priority 較低

```html
<style>
h1{
    font-size: 1rem;
}
</style>
```

- [首頁](https://kevinhsu7361.github.io/NCYU/home.html)
- [常見問題](https://kevinhsu7361.github.io/NCYU/faq.html)