### 模板挂载与微调
> 原模板来自[https://github.com/thedevslot/WhatATheme]

#### 基本挂载流程
* [https://blog.csdn.net/hohaizx/article/details/85066248](https://blog.csdn.net/hohaizx/article/details/85066248)对基本挂载流程进行了介绍
* 本模板使用jekyllrb，[http://jekyllthemes.org](http://jekyllthemes.org/)中提供了非常多的模板可供选择；如果想进一步了解并修改模板，可以参考[中文教程](https://www.wenjiangs.com/doc/jekyll-home)。*（注：这个网站只能使用国内网打开）*

#### 主页面格式微调
* **主页面采用了bulma css框架作为格式划分**
* 
    ```<section class="hero is-halfheight has-text-centered has-background-white-ter" id="about">```

    就是这一框架的典型语句，可以调整is-halfheight为is-fullheight改变section的高度，也可以更改后面的参数调整section的位置和背景颜色；
* 在此模板中，section的背景图片在assets/css/style.css中，根据上面section的id确定其对应的css块

#### 创建新联系方式图标
* **联系方式图标使用Font Awesome Web的应用图标**

    ```其v5格式为<i class="fas fa-tags"></i>```，其中fas，fab用于显示不同种类的图标，但是实际上统一使用fa即可显示；fa-tags是图标名，可以换成其他图标，关于可选图标可见[https://fontawesome.com.cn/v5#google_vignette](https://fontawesome.com.cn/v5#google_vignette)。另外，Font Awesome Web在v6版中加入了新的图标，可见[https://fontawesome.com/icons](https://fontawesome.com/icons)，但是使用的fa-brands等标签无法正确被浏览器解析导致无法显示。但是该网站提供了SVG向量图的显示方式，可以替代原本的```<i>```标签进行显示

* **```<i>```和SVG显示同一个图标的时候，SVG会稍微偏上一点，为了保证标签的整齐尽量统一选择，而SVG可以使用最新版图标，推荐选择SVG进行显示**

#### 创建新的project页面
* **project.md $\Rightarrow$ project.html $\Rightarrow$ project-card.html**

    project.md用于输入project每张卡片的属性与文字；project.md对应的layout是project.html，在其中包含了include中的project-card.html文件，project-card.html会遍历project.md的所有卡片属性，生成卡片嵌入project.html中，三者高度嵌合，为了尽量少的改参数，最好直接把这三个全部新建以防止参数互相干扰
* 为保证project卡片的整齐，即标题都为一排，简述都为两排，标题需要小于等于九个字且描述为16-28字之间

#### 调整建议阅读时间
* **原模板使用的```{% assign words = post.content | number_of_words %}```函数无法正确统计中文字数**

    阅读时间是词数整除180，而此函数的原理是根据单词之间的空格来计算词数；对中文来说非常不合理，导致很长的文章仍旧显示0分钟即可阅读完成，故需要替换统计方法。[[巡音儿力]的知乎专栏](https://zhuanlan.zhihu.com/p/433233271)提供了三种不同的解决方法，本人最后采用了覆盖主题文件的方法，目前阅读时间已经可以正常计算了

#### 博客评论区
* **github的io主页是典型的静态网页，需要使用插件才能实现评论互动**

    比较方便使用的评论插件有Disqus，只需要简单的注册账号，创建网站短域名，在模板中把短域名改成和自己创建的相同并把代码内嵌到博客网页的最后即可完成评论区绑定

    <details><summary><b>网页中需要内嵌的代码</b></summary>

    ```
  <script>
  /**
   *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
   *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
  /*
  var disqus_config = function () {
  this.page.url = PAGE_URL;  Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = PAGE_IDENTIFIER; Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };
  */
  (function () { /* DON'T EDIT BELOW THIS LINE */
    var d = document,
      s = d.createElement('script');
    s.src = 'https://{{site.disqus-shortname}}.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
  </script>
  ```
  </details>

