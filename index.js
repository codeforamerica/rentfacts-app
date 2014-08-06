var $ = require('jquery')

var Router = require('./router')
var view = require('./view')

$(document).ready(function () {

  view.initialize({rootElement:'#outer'})
  var router = new Router()

    router.on('route', function (routeName, params) {
      // assume first route parameter is the homeId
      var homeId = params ? params[0] : null
      console.log('r', routeName, arguments)
      var elapsed = new Date - window.pageLoadEnd
      var delay = 1500
      var left = delay - elapsed
      console.log('load time', elapsed, 'wait', left)
      view.show(routeName, homeId)
      setTimeout(function () {
        document.getElementById('splash').style.display = 'none'
      }, left > 0 ? left : 0)

    })

  router.history.start()
})
