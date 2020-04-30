## 協作方式

頻繁使用 **社群軟體** 溝通，每成功修改掉相似的 bug，就建立一個新版本。

## 本次的進度 ( 2020.04.30 )

### 字體放大

#### 附註

如果有 html tag 使用 inline style css，要將它移除。如下方所示，`h1` 最後會呈現 `2rem`。

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

#### 新增的程式碼行數

點擊滑鼠右鍵，選擇「檢視網頁原始碼」。

[首頁](home.html)

- 360 ~ 362 ( html 按鈕 )
- 2608 ~ 2638 ( css 與 js )

[常見問題](faq.html)

- 323 ~ 325 ( html )
- 746 ~ 775 ( css 與 js )

### 首頁修改

#### 跳到主要畫面

- 218 ( html )
- 181 ~ 199 ( css )

#### navbar 的 item 向左移動

先嘗試 `50px`。