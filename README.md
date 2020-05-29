## 協作方式

頻繁使用 **社群軟體** 溝通，每成功修改掉相似的 bug，就建立一個新版本。

https://webhd.ncyu.edu.tw/share.cgi?ssid=07WBEfX#07WBEfX

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

原始檔案：`index2021_v9a.html`

- 360 ~ 362 ( html 按鈕 )
- 2608 ~ 2638 ( css 與 js )

[常見問題](faq.html)

原始檔案：`faq_list2021_v1.html`

- 323 ~ 325 ( html )
- 746 ~ 775 ( css 與 js )

### 首頁修改

#### 跳到主要畫面

- 218 ( html )
- 181 ~ 199 ( css )

結果失敗。話說回來

![](https://i.imgur.com/O53ixz3.png)

#### navbar 的 item 向左移動

我的想法：`container` 改成 `container-fluid`，把 navbar 變成極限值，再看看文字放大的效果。

## 圖片輪播

基本上就是圖片還沒到，tab 先到，沒有做什麼特別的處理。

![](https://i.imgur.com/a71OXu0.png)

如果想要達到圖片跟著 tab，輪播形式必須要是這種 ~ 圈圈的。

[中山大學](https://www.nsysu.edu.tw/)

![](https://i.imgur.com/WSwhPDQ.png)

學校採用 Owl Carousel。

[屏東環保局](https://www.ptepb.gov.tw/Default.aspx)

這種方法可能不太友善，
因為在身心障礙在使用時，
如果你一直有判斷的動作，
會有可能讓他們的機器使用上困難。