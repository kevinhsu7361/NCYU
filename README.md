## 前言

- [NCYU 網頁資料夾](https://webhd.ncyu.edu.tw/share.cgi?ssid=07WBEfX)
- [無障礙網頁相關規定](https://www.handicap-free.nat.gov.tw/)
- [受檢測的網頁](https://kevinhsu7361.github.io/NCYU/index2021_v2_test.html)

## 註解範例

```html
<!--20200305 search 加label 開始-->
<label for="search"></label>
<!--20200305 search 加label 結束-->
```

## 環境安裝

1. 安裝 [Freego](https://www.handicap-free.nat.gov.tw/Download/Detail/1375?Category=52)
2. 打開 Freego，輸入網址，並且選擇「單一網頁」，「AA」等級。
3. 可以開啟此[網頁](https://www.handicap-free.nat.gov.tw/Accessible/Detail/144?Category=46)，利用 `Ctrl + F` 搜尋檢測代碼，查看詳細原因。

附註：

1. Freego **無法**一次把相同的錯誤告訴我們。( 例如：XH1080400，XH1080401 )
2. 標籤錯誤也會造成，例如少了結尾標籤，或者 `inline tag` + `block tag` 等等。

## Week 1 進度 ( 03/02 ~ 03/08 )

### 20200305

search 添加 `<label>`。

### 20200306

news_sn=3588,3589 等等的

(1) 超連結少了結束標籤 

```html
</a>
```

(2)超連結少了 `title` 屬性

```html
<a title="主題"><span>範例</span></a>
```

### 20200307

bulletin_sn=46851

該改 `<h5>` 的位置

### 20200308

其他 bulletin 相關等等的

也是修改 `<h5>` 位置

## 附註

由於要改的地方實在太多了，所以我只有以日期的方式註解，像是 `<!--20200308-->`，建議學姊開啟**文字編輯器**，利用搜尋的方式，會比較好找到需修改之處。

---

## Week 2 預計進度 ( 03/09 ~ 03/15 )

設定「[定位點](https://www.handicap-free.nat.gov.tw/Questions/Detail/82?Category=33)」。

進入無障礙網頁，第一次按 `tab` 時，網頁左上角會顯示「跳到主要內容」，但一開始沒按 `tab` 前確不能顯示。

```html
<a href="#content" id="gotocenter" title="跳到主要內容" tabindex="1" class="sr-only sr-only-focusable">跳到主要內容</a>
```

![](https://i.imgur.com/CsrDKCG.png)