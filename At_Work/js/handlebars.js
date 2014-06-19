//handlebars script to disable default button on dialogue windows

a5.callbacks.dialogs.get('a5.view.dialog.ReallySubmit').bind('showed', function($d){
  $d.find("a").blur(); 
})

a5.callbacks.dialogs.get('a5.view.dialog.ReallyReload').bind('showed', function($d){
  $d.find("a").blur(); 
})