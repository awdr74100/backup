$(document).ready(function() {
  $('#deleteModal').on('show.bs.modal', function(e) {
    let title = $(e.relatedTarget).data('title');
    $(this)
      .find('.modal-title')
      .text(`確認刪除 ${title} 嗎？`);
    $(this)
      .find('.modal-body')
      .text(`是否確認刪除 ${title} 商品`);
  });
});
