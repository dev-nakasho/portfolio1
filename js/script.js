$(function () {
  // ヘッダー背景色の変更をハンドルする
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    var firstViewHeight = $(".first-view").height();
    var contactPageTitleHeight = $(".page-title-wrapper").height();

    if (scroll > firstViewHeight || scroll > contactPageTitleHeight) {
      $("header").addClass("bg-dark");
    } else {
      $("header").removeClass("bg-dark");
    }
  });

  // ナビゲーションメニューの開閉をハンドルする
  $(".humberger-btn").click(function () {
    $(this).toggleClass("close");
    $(".header-nav").fadeToggle(300);
    $("body").toggleClass("noscroll");
  });

  // ナビゲーションからのページ内リンクをハンドルする
  $(".nav-item a").click(function () {
    // PC ver.
    var id = $(this).attr("href");
    var position = $(id).offset().top;
    $("html, body").animate({ scrollTop: position }, 300);

    // SP ver.
    if ($(".humberger-btn").css("display") !== "none") {
      $(".humberger-btn").toggleClass("close");
      $(".header-nav").fadeToggle(300);
      $("body").toggleClass("noscroll");
    }
  });

  // ページTOPに対するリンクをハンドルする
  $(".header-title").click(function () {
    console.log("called this");
    $("html, body").animate({ scrollTop: 0 }, 300);
  });
});
