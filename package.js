var where = 'client';

Package.describe({
  name: 'lukialee:admin-lte',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'AdminLTE for Meteor. 轻量级, 删除了google css的引用。',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/lukialee/AdminLTE.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.3');
  api.use('ecmascript');

  api.use('jquery', where); // Dependencies
  api.use('twbs:bootstrap@3.3.5', where); // Dependencies
  api.use('fortawesome:fontawesome@4.4.0', where); // Dependencies

  //style
  api.addFiles('dist/css/AdminLTE.no_googleapis.css', where);

  // skins
  api.addFiles('dist/css/skins/skin-black.css', where);
  api.addFiles('dist/css/skins/skin-black-light.css', where);
  api.addFiles('dist/css/skins/skin-blue.css', where);
  api.addFiles('dist/css/skins/skin-blue-light.css', where);
  api.addFiles('dist/css/skins/skin-green.css', where);
  api.addFiles('dist/css/skins/skin-green-light.css', where);
  api.addFiles('dist/css/skins/skin-purple.css', where);
  api.addFiles('dist/css/skins/skin-purple-light.css', where);
  api.addFiles('dist/css/skins/skin-red.css', where);
  api.addFiles('dist/css/skins/skin-red-light.css', where);
  api.addFiles('dist/css/skins/skin-yellow.css', where);
  api.addFiles('dist/css/skins/skin-yellow-light.css', where);


  //app
  api.addFiles('dist/js/meteorApp.js', where);

  //export
  api.export("MeteorAdminLTE", where);

});
