/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
// <reference 
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    /**
     * Disable img and video download
     */
    $("img").on("contextmenu drag dragstart dragend", () => false);
    $("video").on("contextmenu", () => false);

    /**
     * dummy Login
     */
    const dummy = "duckblue";
    const dummyDom = $("#dummy");
    const dummyInputDom = dummyDom.find("input")
    dummyInputDom.on("keyup", (event) => {
        if (event.keyCode !== 13) {
            return;
        }
        const value = (dummyInputDom && dummyInputDom[0]) ? dummyInputDom[0].value : "";
        if (value === dummy) {
            dummyDom.css("display", "none");
        }
    });

    /**
     * projects setting
     */
    const projectsEl = $("#projects")
    const categoryEl = $("#categories")

    const categories = {
        op: "op",
        logo: "logo",
        character: "character",
        illust: "illust",
        threeD: "threeD"
    }

    const configs = [
        {
            order: 1,
            title: "KASOUKEN no ONNA -season21-", // タイトル
            modalRef: "#portfolioModal1", // モーダルとの紐付け
            year: "2021", // ホバー時の表示文言
            month: "Aug", // ホバー時の表示文言
            description: "OP Movie", // ホバー時の表示文言
            imagePath: "./assets/img/pj-head/2108_Kasouken21.jpg", // 画像のパス
            category: [
                categories.op,
            ], // カテゴリ (複数の場合は複数追加)
        },
        {
            title: "Karisome Tengoku  -oct-",
            modalRef: "#portfolioModalKarisomeOct",
            year: "2019",
            month: "Oct",
            description: "OP Movie",
            imagePath: "./assets/img/pj-head/1910_KarisomeOct.jpg",
            category: [
                categories.op
            ],
        },
        {
            title: "Karisome Tengoku  -Mar-",
            modalRef: "#portfolioModalKarisomeMar",
            year: "2019",
            month: "Mar",
            description: "OP Movie",
            imagePath: "./assets/img/pj-head/1903_KarisomeMar.jpg",
            category: [
                categories.op
            ],
        },
        {
            title: "MUSIC STATION",
            modalRef: "#portfolioModal7",
            year: "Until",
            month: "now",
            description: "Artist back LED movie",
            imagePath: "./assets/img/pj-head/MUSICSTATION.jpg",
            category: [
                categories.illust
            ],
        },        
        {
            title: "KANJAM",
            modalRef: "#portfolioModal5",
            year: "2018",
            month: "Jul",
            description: "OP Movie",
            imagePath: "./assets/img/pj-head/1807_Kanjam.jpg",
            category: [
                categories.op,
                categories.illust
            ],
        },
        {
            title: "HIMOMEN",
            modalRef: "#portfolioModal4",
            year: "2018",
            month: "Jul",
            description: "OP Movie",
            imagePath: "./assets/img/pj-head/1807_Himomen.jpg",
            category: [
                categories.op,
                categories.illust
            ],
        },
        {
            title: "Air Girl",
            modalRef: "#portfolioModal6",
            year: "2021",
            month: "Sep",
            description: "Key visual graffic",
            imagePath: "./assets/img/pj-head/2102_Airgirl.jpg",
            category: [
                categories.op
            ],
        },
        {
            title: "SEKAI TAISOU -2021-",
            modalRef: "#portfolioModal8",
            year: "2021",
            month: "Sep",
            description: "Key visual graffic",
            imagePath: "./assets/img/pj-head/2109_Sekai Taisou 2021.jpg",
            category: [
                categories.op
            ],
        },
        {
            title: "ABEMA HILLS",
            modalRef: "#portfolioModal9",
            year: "2020",
            month: "Jul",
            description: "Key visual graffic",
            imagePath: "./assets/img/pj-head/2006_ABEMAhills.jpg",
            category: [
                categories.op,
                categories.logo,
                categories.illust
            ],
        },
        {
            title: "Azatokute nani ga Waruino?",
            modalRef: "#portfolioModalAzatokute",
            year: "2019",
            month: "Jul",
            description: "Key visual graffic",
            imagePath: "./assets/img/pj-head/1909_Azatokute.jpg",
            category: [
                categories.logo
            ],
        },
        {
            title: "Onegai Ranking",
            modalRef: "#portfolioModalOnegai",
            year: "2020",
            month: "Nov",
            description: "Key visual graffic",
            imagePath: "./assets/img/pj-head/2011_Onegai.jpg",
            category: [
                categories.logo
            ],
        },
        {
            title: "CGDog",
            modalRef: "#portfolioModalCGDog",
            year: "2019",
            month: "Mar",
            description: "Character design",
            imagePath: "./assets/img/pj-head/1903_CGDog.jpg",
            category: [
                categories.illust
            ],
        },
        {
            title: "Taiyou to Bolero",
            modalRef: "#portfolioModalTaiyoutoBolero",
            year: "2021",
            month: "Jun",
            description: "LOGO VFX Graffic",
            imagePath: "./assets/img/pj-head/2106_TaiyoutoBolero.jpg",
            category: [
                categories.logo.threeD
            ],
        },
        {
            title: "Ariyoshi Tankentai",
            modalRef: "#portfolioModalAriyoshiTankentai",
            year: "2019",
            month: "Mar",
            description: "LOGO OP Graffic ",
            imagePath: "./assets/img/pj-head/1707_AriyoshiTankentai.jpg",
            category: [
                categories.logo.op
            ],
        },
        // TODO: add here
    ];

    const makeProjectEls = (arr) => {
        return arr.map((config) => (
            `
            <!-- ${config.order}. ${config.title} -->
            <div class="col-lg-4 col-sm-6 p-0">
                <div class="portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="${config.modalRef}">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            <div class="hover-content-above">
                                <div>${config.year}</div>
                                <div>${config.month}</div>
                            </div>
                            <div class="hover-content-bottom">
                                <div class="portfolio-caption-heading">${config.description}</div>
                            </div>
                        </div>
                        <img class="img-fluid" src="${config.imagePath}" alt="" />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">${config.title}</div>
                    </div>
                </div>
            </div>
            `
        ));
    }

    const focusCategory = (selector) => {
        categoryEl.find("a").removeClass();
        $(selector).addClass("selected");
    }

    const projectFilter = (categoryKey, e) => {
        const contentClass = ".portfolio-item"
        const selectedConfigs = configs.filter((config) => !categoryKey ? true : config.category.includes(categoryKey)).sort((a, b) => a.order - b.order)
        const els = makeProjectEls(selectedConfigs)

        projectsEl.find(contentClass).fadeOut(1000);
        projectsEl.empty().append(els.join("")).find(contentClass).hide().fadeIn(1000);

        focusCategory((e && e.path) ? e.path[0] : '#categoryAll');
    }
    $("document").ready(() => projectFilter());

    window.projectFilter = projectFilter

    /**
     * Modal
     */
    $(".modal").on("hidden.bs.modal", () => {
        const els = $("video");
        els.toArray().forEach((el) => {
            if(el && el.paused !== undefined && !el.paused) {
                el.pause()
            }
        });
    })

})(jQuery); // End of use strict
