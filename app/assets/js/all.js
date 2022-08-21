$(function() {
  $(".nav__link").each(function(index){
    $(this).click(function(){ //點選觸發事件
      $(".nav__link").removeClass("active");
      $(".nav__link").eq(index).addClass("active");
    });
  })
});

function isEditStyle(){
  $("#ckeditor").toggleClass("d-none");
  $(".others__comment").toggleClass("d-none");
  $(".page-btn").toggleClass("d-none");
  $(".ckeditor-btn").toggleClass("d-none");
}

$("#reply-btn").on("click",()=>{
  isEditStyle();
})

$("#cancel-btn").on("click",()=>{
  isEditStyle();
})





const editor = document.querySelector('#editor');
editor && ClassicEditor
.create( document.querySelector( '#editor' ) )
.catch( error => {
    console.error( error );
} );