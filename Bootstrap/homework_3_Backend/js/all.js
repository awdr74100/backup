$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('#editModal').on('show.bs.modal', function(e) {
    let btn = $(e.relatedTarget);
    let title = btn.data('title');
    let modal = $(this);
    modal.find('.modal-title').text(title);
    modal.find('#product').val(title);
  });
  $('#removeModal').on('show.bs.modal', function(e) {
    let btn = $(e.relatedTarget);
    let title = btn.data('title');
    let modal = $(this);
    modal.find('.modal-title').text(`確認刪除 ${title} 嗎？`);
    modal.find('.modal-body').text(`刪除 ${title} 商品`);
  });
});
