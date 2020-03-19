## 導盲磚

- 看了[定義](https://www.handicap-free.nat.gov.tw/Questions/Detail/82?Category=33)，了解它的用意。
- 按下 `tab` 就會自動跳到網頁上的各個 `<a>` 。

## 文章閱讀

[iT 邦幫忙 ─ 實踐無障礙網頁設計](https://ithelp.ithome.com.tw/users/20108045/ironman/2454)

## 跳到主要內容

可以其他的[無障礙網頁](https://www.handicap-free.nat.gov.tw/Applications)。

不是透過 JS 來控制。

```html
<a href="#content" id="gotocenter" title="跳到主要內容" tabindex="1" class="sr-only sr-only-focusable">跳到主要內容</a>
```

![](https://i.imgur.com/CsrDKCG.png)

以下作法會被退件：

用 display:none 隱藏定位點（相當於由顯示中移除，可能導致沒有定位點）
把 ::: 幾個字改為圖片（Ctrl + F 找不到）
把 ::: 字體設為極端小（Ctrl + F 找得到，但是不容易看到，也是不行）
再者，倒是允許把 ::: 文字顏色設為跟背景色相同，無障礙服務網亦如此設計。