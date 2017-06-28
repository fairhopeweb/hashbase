/* global $ location params */

// admin tools on archive
$(function () {
  var _csrf = $('[name=_csrf]').val()
  $('#admin-remove-archive').on('click', function () {
    if (confirm('Remove this archive?')) {
      $.post('/v1/admin/archives/' + params.key + '/remove', {key: params.key, _csrf}, function (response, status) {
        if (status !== 'success') {
          console.error(status, response)
        }
        window.location = '/' + params.owner
      })
    } else {
      return
    }
  })

  $('#admin-toggle-featured').click(function () {
    var act = params.isFeatured ? 'unfeature' : 'feature'
    $.post('/v1/admin/archives/' + params.key + '/' + act, {_csrf}, function (response, status) {
      if (status !== 'success') {
        return console.error(status, response)
      }
      location.reload()
    })
  })
})
