Meteor usage
------------

This package is inspired by: https://github.com/yp2/AdminLTE/
Many users in China couldn't access google's server. So I remove this line:
```css
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic);
```


Installation
```
meteor add lukialee:admin-lte
```
You could use AdminLTE on any template or layout.
```js
Template.templateOrLayout.onRendered(function () {

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

I'll add plugins later.


You can read full documents here: https://github.com/almasaeed2010/AdminLTE