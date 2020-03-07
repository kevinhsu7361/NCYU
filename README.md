## 前言

- [NCYU 網頁資料夾](https://webhd.ncyu.edu.tw/share.cgi?ssid=07WBEfX)
- [無障礙網頁](https://www.handicap-free.nat.gov.tw/)
- [測試網頁](https://kevinhsu7361.github.io/NCYU/index2021_v2_test.html)

## 註解範例

```html
<!--20200305 search 加label 開始-->
<label for="search"></label>
<!--20200305 search 加label 結束-->
```

## 目標一

1. 安裝 Freego
2. 修改檢測有錯誤之處，開啟此[網頁](https://www.handicap-free.nat.gov.tw/Accessible/Detail/144?Category=46)，利用 `Ctrl + F` 搜尋檢測代碼。

- 20200305：search
- 20200306：news_sn=3588

(1) 少了結束標籤 

```html
</a>
```

(2)少了 `title` 屬性

```html
<a title="主題"><span>範例</span></a>
```
- 20200307

bulletin_sn=46851

該改 `<h5>` 的位置
## 目標二

設定「[定位點](https://www.handicap-free.nat.gov.tw/Questions/Detail/82?Category=33)」。

進入無障礙網頁，第一次按 `tab` 時，網頁左上角會顯示「跳到主要內容」。

![](https://i.imgur.com/CsrDKCG.png)

<a href="#content" id="gotocenter" title="跳到主要內容" tabindex="1" class="sr-only sr-only-focusable">跳到主要內容</a>但一開始沒按tab前確不能顯示