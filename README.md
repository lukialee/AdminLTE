Meteor usage
------------
我很喜欢用AdminLTE这个模板，为了在Meteor中更方便地使用，借鉴了YP2的做法。
为了让package更小，删除了一些多余文件，为了让中国大陆的用户能正常使用（你懂得)，删除了google的css文件的引用。

This package is inspired by: [yp2/AdminLTE](https://github.com/yp2/AdminLTE/)
Many users in China couldn't access google's server. So I remove this line:
```css
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic);
```

Installation 安装
```
meteor add lukialee:admin-lte
```
可以在客户端代码中为模板或布局代码启用AdminLTE。
You could use AdminLTE on any template or layout.
```js
Template.myTemplate.onRendered(function () {

    var self = this;
    if (self.view.isRendered) {
    		//initSettings();//Optional. You could change default settings.
        var body = $('body');
            body.removeClass();
            body.addClass("skin-blue sidebar-mini");

        $(function () {
            MeteorAdminLTE.run()
        });
    }

    function initSettings(){
    		MeteorAdminLTE.AdminLTE.options.animationSpeed = 200;
    }

});
```

之后我再加上插件。
I'll add plugins later.


You can read full documents here: [AdminLTE Readme](https://github.com/almasaeed2010/AdminLTE)