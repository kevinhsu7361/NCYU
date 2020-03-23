## 問題一

按下按鈕會重新整理頁面，所以必須使用 `<input type="submit">`，而非 `<button type="button">` 加上 JS。

如果使用第二種方法，會有某個按鈕可以重複按的問題，例如：假設原本字體為 1 px，無論按多少次按鈕，字體都應該放大 2 倍就好，而非遞增放大 4 倍、 8 倍等等。

## 問題二

字型大小的單位，有 `px`、`em`、`rem` 這幾種。

```javascript
let all = document.body.getElementsByTagName("*"); // 抓取所有的元素
for (let i = 0, max = all.length; i < max; i++) { 
    // 內容 
}                    
```

### px

```javascript
let style = window.getComputedStyle(all[i],null).getPropertyValue("font-size");
let fontSize = parseFloat(style);
all[i].style.fontSize = (fontSize * 2) + "px";
```

### em

```javascript
all[i].style.fontSize = '2em';
```

## 附註

我只會寫 vanilla JavaScript，我不會寫 jQuery。