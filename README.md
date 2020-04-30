## 協作方式

頻繁使用 **社群軟體** 溝通，每成功修改掉相似的 bug，就建立一個新版本。

## 本次的進度

1. 字體放大。
2. 如果有 html tag 使用 inline style css，要將它移除。如下方所示，`h1` 最後會呈現 `2rem`。

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

3. 新增的程式碼行數

點擊滑鼠右鍵，選擇「檢視網頁原始碼」。

#### [首頁](home.html)

- 339 ~ 341 ( html )
- 2587 ~ 2617 ( css 與 js )

#### [常見問題](faq.html)

- 323 ~ 325 ( html )
- 746 ~ 775 ( css 與 js )