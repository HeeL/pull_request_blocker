$( document ).ready(function() {
  $('button:contains("Create pull request")').on('click', function(e){ 
    if($('select[name="dest"]').val().match(/\:\:master/) && !confirm('Do you want to create a pull request to a master branch?')) {
      e.stopPropagation();
      return false;
    }
  });
});