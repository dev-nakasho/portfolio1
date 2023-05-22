$(function () {
  // ヘッダーの背景色
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    var firstViewHeight = $(".first-view").height();
    var contactPageTitleHeight = $(".contact-page-title").height();

    if (scroll > firstViewHeight || scroll > contactPageTitleHeight) {
      $("header").addClass("dark");
    } else {
      $("header").removeClass("dark");
    }
  });

  // ページ内リンク
  $(".list-item-a").click(function () {
    var id = $(this).attr("href");
    var position = $(id).offset().top;

    $("html, body").animate({ scrollTop: position }, 500);

    if ($(".modal-wrapper").css("display") !== "none") {
      $(".modal-wrapper").css("display", "none");
      $(".header-humberger").show();
    }
  });

  // ページ内リンク top
  $("#header-title").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  // マウスオーバー
  $(".cover-image3").hover(
    function () {
      $(this).removeClass("cover-image3").addClass("hover-image3");
    },
    function () {
      $(this).removeClass("hover-image3").addClass("cover-image3");
    }
  );

  // ハンバーガーメニュー open
  $(".header-humberger").click(function () {
    $(".modal-wrapper").css("display", "block");
    $(this).hide();
  });

  // ハンバーガーメニュー close
  $(".header-humberger-close").click(function () {
    $(".modal-wrapper").css("display", "none");
    $(".header-humberger").show();
  });

  // window resize
  $(window).resize(function () {
    var width = $(window).width();

    if (width < 1024) {
      $(".first-view-inner h2").html(
        "<h2>快適なオフィスを<br>デザインする</h2>"
      );
    } else {
      $(".first-view-inner h2").html("<h2>快適なオフィスをデザインする</h2>");
    }
  });
});
