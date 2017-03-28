$(document).ready(() => {
  $('.delete-post').click((event) => {
    event.preventDefault;
    let id = $(event.target).attr("data-post-id");
    $.ajax({
      method: 'DELETE',
      url: `http://localhost:3000/home/post/${id}`,
      success: function() {
        console.log('delete post clicked');
        window.location.reload();
      }
    });
  });
  $('.update').click((event) => {
    event.preventDefault;
    let id = $(event.target).attr("data-post-id");
    $.ajax({
      method: 'PATCH',
      url: `http://localhost:3000/home/post/${id}`,
      success: function() {
        console.log('update clicked');

      }
    });
  });
  $('.delete-user').click((event) => {
    event.preventDefault;
    let user = $(event.target).attr("data-user-id");

    $.ajax({
      method: 'DELETE',
      url: `http://localhost:3000/home/user/${user}`,
      success: function() {
        console.log('delete user clicked');
        window.location.href = "http://localhost:3000";
      }
    });
  });
});
