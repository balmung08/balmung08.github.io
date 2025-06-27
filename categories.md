---
layout: archive-taxonomies
type: categories
title: Categories
permalink: /categories/
---

### 模板挂载与微调
> 原模板来自[https://github.com/zivong/jekyll-theme-hamilton]

#### 基本挂载流程
* [https://blog.csdn.net/hohaizx/article/details/85066248](https://blog.csdn.net/hohaizx/article/details/85066248)对基本挂载流程进行了介绍
* 本模板使用jekyllrb，[http://jekyllthemes.org](http://jekyllthemes.org/)中提供了非常多的模板可供选择；如果想进一步了解并修改模板，可以参考[中文教程](https://www.wenjiangs.com/doc/jekyll-home)。*（注：这个网站只能使用国内网打开）*


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

