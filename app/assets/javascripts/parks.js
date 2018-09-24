
// frame it within the document; this makes sure the whole page is loaded; 
$(document).on('turbolinks:load', function() {

    $("#state_select").on('change', function(event){
      console.log(event);
    });

   $('.parks-list').on("click", function(event) {
    console.log(event);
    });
})



// see carb tracker . can also do window.init
// see $() -- look this up 
