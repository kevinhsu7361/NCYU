## 檢測流程

- 以 [GitHub Pages](https://pages.github.com/) 搭建環境
- 從[資料夾](https://webhd.ncyu.edu.tw/share.cgi?ssid=07WBEfX)抓取最新版本的 html
- 打開 [Freego](https://www.handicap-free.nat.gov.tw/Download/Detail/1375?Category=52)，輸入網址，並且選擇**單一網頁**，**AA**等級。
- 使用 [Visual Studio Code](https://code.visualstudio.com/) 修改 html
- 目前的檢測版本：[v7](https://kevinhsu7361.github.io/NCYU/index2021_v7.html)

## flexslider

flexslider_new

## Freego

1. 可以開啟此[網頁](https://www.handicap-free.nat.gov.tw/Accessible/Detail/144?Category=46)，利用 `Ctrl + F` 搜尋檢測代碼，查看詳細原因。
2. Freego **無法**一次把相同的錯誤告訴我們。( 例如：XH1080400，XH1080401 )
3. 標籤錯誤也會造成，例如少了結尾標籤，或者 `inline tag` + `block tag` 等等。

## 協作方式

每成功修改掉相似的 bug，就建立一個新版本。

## 註解方式

以**日期**的形式註解。

```html
<!--20200305-->
<label for="search"></label>
```

## 修改 bug 的歷史

### 20200306

#### news_sn=3588,3589 等等的

(1) 超連結少了結束標籤 `</a>`

(2)超連結少了 `title` 屬性

```html
<a title="主題"><span>範例</span></a>
```

### 20200307

#### bulletin_sn=46851 等等

該改 `<h5>` 的位置

### 20200309

#### 其他 bulletin 相關等等的

也是修改 `<h5>` 位置

### 20200310

#### bulletin_sn=3595,3594 等等的

超連結少了結束標籤 `</a>`

---

## 預計進度

設定「[定位點](https://www.handicap-free.nat.gov.tw/Questions/Detail/82?Category=33)」。

進入無障礙網頁，第一次按 `tab` 時，網頁左上角會顯示「跳到主要內容」，但一開始沒按 `tab` 前確不能顯示。

```html
<a href="#content" id="gotocenter" title="跳到主要內容" tabindex="1" class="sr-only sr-only-focusable">跳到主要內容</a>
```

![](https://i.imgur.com/CsrDKCG.png)