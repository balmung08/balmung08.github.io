---
layout: page
title: Tips for Applying Template
permalink: /docs/
---

### Template Installation and Customization

> The original template comes from \[[https://github.com/zivong/jekyll-theme-hamilton](https://github.com/zivong/jekyll-theme-hamilton)]

#### Basic Installation Process

* [https://blog.csdn.net/hohaizx/article/details/85066248](https://blog.csdn.net/hohaizx/article/details/85066248) provides an introduction to the basic installation process.
* This template uses Jekyll. There are many templates available at [http://jekyllthemes.org](http://jekyllthemes.org/). If you want to learn more about customizing templates, you can refer to this [Chinese tutorial](https://www.wenjiangs.com/doc/jekyll-home).
* (Note: This website can only be accessed from within China.)

#### Blog Comments Section

* **GitHub Pages (the io homepage) is a typical static website and requires plugins to enable comment interaction.**

  A commonly used and convenient commenting plugin is Disqus. You just need to register an account, create a shortname for your site, then replace the shortname in the template with your own and embed the code snippet at the bottom of your blog page to enable the comments section.


  <pre><code>
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
  </code></pre>


