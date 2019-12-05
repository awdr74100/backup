$(document).ready(function() {
  $('a[data-dismiss="modal"][data-toggle="modal"]').on('click', function() {
    let target = $(this).data('target');
    $(target).on('shown.bs.modal', function() {
      $('body').addClass('modal-open');
    });
  });
});
