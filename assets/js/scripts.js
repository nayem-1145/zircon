/*
    1. Strech Image 
    2. Sicky Headaer
    3. Video Popup
    4. Banner Carousel
    5. zc3 Cagegory Tab
    6. Preloader
    7. Scroll to top Button
    8. Coupon announcement
    9. Best Selling Product Tab
    10. Product Quentity 
    11. Testimonial Carousel
    12. Data Background Set
    13. checkout toggle
    14. NiceSelect
    16. CART DRAWER
    17. Range Slider
    18. Split text
*/

/*==================================
1. Strech Image 
==================================*/
function zc_stretch() {
    var windowWidth = window.innerWidth;

    // Apply stretch logic only if the window width is greater than 1921px
    if (windowWidth < 1921) {
        document.querySelectorAll(".row .zc_stretch-element-inside-column").forEach(function (element) {
            console.log('hello');
            var row = element.closest(".row");
            var cols = element.closest('[class^="col-"]');
            var colsHeight = cols.offsetHeight;

            var rect = element.getBoundingClientRect();
            var rowRect = row.getBoundingClientRect();
            var colsRect = cols.getBoundingClientRect();

            var elementLeft = rect.left;
            var elementRight = rect.right;
            var rowLeft = rowRect.left + (parseFloat(getComputedStyle(row).paddingLeft) || 0);
            var rowRight = windowWidth - rowRect.right + (parseFloat(getComputedStyle(row).paddingRight) || 0);

            var colsLeft = colsRect.left;
            var colsRight = windowWidth - colsRect.right;

            var styles = {
                "marginLeft": "0px",
                "marginRight": "0px"
            };

            if (Math.round(rowLeft) === Math.round(colsLeft)) {
                var marginLeft = parseFloat(getComputedStyle(element).marginLeft) || 0;
                styles.marginLeft = (marginLeft - elementLeft) + "px";
            }

            if (Math.round(rowRight) === Math.round(colsRight)) {
                var marginRight = parseFloat(getComputedStyle(element).marginRight) || 0;
                styles.marginRight = (marginRight - (windowWidth - elementRight)) + "px";
            }

            Object.assign(element.style, styles);
        });
    } else {
        // Reset styles when width is 1920px or below
        document.querySelectorAll(".row .zc_stretch-element-inside-column").forEach(function (element) {
            element.style.marginLeft = "";
            element.style.marginRight = "-315px";
        });
    }
}
zc_stretch();
window.addEventListener('resize', zc_stretch);

/*==================================
2. Sicky Headaer
==================================*/
window.addEventListener("scroll", function () {
    const scrollBar = window.scrollY;
    const headers = document.querySelectorAll(".header-sticky");

    headers.forEach(header => {
        if (scrollBar > 150) {
            header.classList.add("sticky-on");
        } else {
            header.classList.remove("sticky-on");
        }
    });
});

/*==================================
3. Video Popup
==================================*/
document.addEventListener('DOMContentLoaded', function () {
    const videoPopupBtn = document.querySelector('.template-video-btn');
    const videoPopup = document.getElementById('video-popup');
    const popupClose = document.querySelector('.popup-close');
    const popupVideo = document.getElementById('popup-video');

    // Show popup and play video
    videoPopupBtn.addEventListener('click', function (event) {
        event.preventDefault();

        // Extract the video ID from the YouTube URL
        const videoUrl = new URL(videoPopupBtn.getAttribute('href'));
        const videoId = videoUrl.pathname.split('/').pop();
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

        popupVideo.setAttribute('src', embedUrl);
        videoPopup.style.display = 'flex';
    });

    // Close popup and stop video
    popupClose.addEventListener('click', function () {
        videoPopup.style.display = 'none';
        popupVideo.setAttribute('src', '');
    });

    // Close popup when clicking outside the content area
    videoPopup.addEventListener('click', function (event) {
        if (event.target === videoPopup) {
            videoPopup.style.display = 'none';
            popupVideo.setAttribute('src', '');
        }
    });
});

/*==================================
4. Banner Carousel
==================================*/
var zcFeedbackSlide = new Swiper(".zc_feedback_slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".feedback-button-next",
        prevEl: ".feedback-button-prev",
    },
    autoplay: {
        delay: 3100,
        disableOnInteraction: false,
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 24
        },
    }
});

/*==================================
* Zn Brand Carousel
==================================*/
var znBrandCarousel = new Swiper('.zn_brand_swipper ', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 15,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1300: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }
});
/*==================================
* Banner Carousel
==================================*/
var hrBanner03Slide = new Swiper('.hero_bnner03_Slide', {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".zc3_hero_pagin",
        clickable: true,
    },
});

/*==================================
* Brand Carousel
==================================*/
var zc3BrandSlide = new Swiper('.zc3_brand_slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    autoplay: {
        delay: 3100,
        disableOnInteraction: false,
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }
});

/*==================================
* Hover Toggle Class
==================================*/
document.querySelectorAll('.collection_single').forEach(function (element) {
    element.addEventListener('mouseenter', function () {
        element.classList.add('active');
        element.parentNode.querySelectorAll('.collection_single').forEach(function (sibling) {
            if (sibling !== element) {
                sibling.classList.remove('active');
            }
        });
    });

    element.addEventListener('mouseleave', function () {
        element.classList.remove('active');
        document.querySelector('.active_item').classList.add('active');
    });
});

/*==================================
* Product Cart Slider
==================================*/
const sliderThumbs = new Swiper('.slider_thumbs .swiper-container', {
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 16,
    freeMode: true,
    breakpoints: {
        0: {
            direction: 'horizontal',
            spaceBetween: 16,
            slidesPerView: 3,
        },
        460: {
            spaceBetween: 16,
            slidesPerView: 4,
        },
        768: {
            direction: 'vertical',
        }
    }
});

const sliderImages = new Swiper('.slider_images .swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 32,
    mousewheel: true,
    grabCursor: true,
    thumbs: {
        swiper: sliderThumbs
    },
    breakpoints: {
        0: {
            direction: 'horizontal',
        },
        768: {
            direction: 'vertical',
        }
    }
});

/*==================================
* Author Img Carousel
==================================*/
var zc3_author_carousel = new Swiper('.zc3_author_carousel', {
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1, // Move one slide at a time
    spaceBetween: 15,
    loopFillGroupWithBlank: true,
    loopedSlides: 3,
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/*==================================
* Author Content Carousel
==================================*/
var zc3_authorCnt_carousel = new Swiper('.zc3_authorCnt_carousel', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.zc3_author_next',
        prevEl: '.zc3_author_prev',
    },
});

// Synchronize both sliders
zc3_author_carousel.controller.control = zc3_authorCnt_carousel;
zc3_authorCnt_carousel.controller.control = zc3_author_carousel;

/*==================================
5. zc3 Cagegory Tab
==================================*/
window.addEventListener("load", function () {
    var myTabs = document.querySelectorAll("ul.zc3_category_nav > li");

    function myTabClicks(tabClickEvent) {
        for (var i = 0; i < myTabs.length; i++) {
            myTabs[i].classList.remove("active");
        }
        var clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add("active");
        tabClickEvent.preventDefault();
        var myContentPanes = document.querySelectorAll(".tab-pane");
        for (i = 0; i < myContentPanes.length; i++) {
            myContentPanes[i].classList.remove("active");
        }
        var anchorReference = clickedTab.querySelector("a");
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = document.querySelector(activePaneId);
        activePane.classList.add("active");
    }
    for (var i = 0; i < myTabs.length; i++) {
        myTabs[i].addEventListener("click", myTabClicks);
    }
});

/*==================================
* zc3 Product Carousel
==================================*/
var zc3pdCarousel = new Swiper(".zc3_product_carousel", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".zc3_product_pagi",
        type: "progressbar",
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        576: {
            slidesPerView: 1.6,
            spaceBetween: 24
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

/*==================================
6. Preloader
==================================*/
window.addEventListener('load', function () {
    var preload = document.querySelector('.zc_preloader');
    if (preload) {
        setTimeout(function () {
            preload.style.transition = 'opacity 0.5s ease';
            preload.style.opacity = '0';
            setTimeout(function () {
                preload.style.display = 'none';
            }, 500);
        }, 500); 
    }
});

/*==================================
7 Scroll to top Button
==================================*/
document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.querySelector(".scroll-top-btn");

    if (scrollTopBtn) {
        window.addEventListener("scroll", function () {
            const scrollBar = window.scrollY;

            if (scrollBar > 150) {
                scrollTopBtn.style.display = "block"; // Equivalent to fadeIn()
            } else {
                scrollTopBtn.style.display = "none"; // Equivalent to fadeOut()
            }
        });

        // Scroll to top on button click
        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Smooth scrolling effect
            });
        });
    }
});

/*==================================
8. Coupon announcement
==================================*/
document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.querySelector(".zc_announce_close");
    if (closeButton) {
        closeButton.addEventListener("click", function () {
            document.querySelector(".zc_coupon_announce").classList.add("off");
        });
    }
});

/*==================================
9. Best Selling Product Tab
==================================*/
function openFeatured(evt, featurName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(featurName).style.display = "block";
    evt.currentTarget.className += " active";
}

/*==================================
10. Product Quentity
==================================*/
if (document.querySelectorAll(".quantity").length > 0) {
    document.querySelectorAll(".ptPlus").forEach(function (button) {
        button.addEventListener('click', function () {
            var input = this.previousElementSibling;
            var vals = parseInt(input.value, 10);
            vals += 1;
            input.value = vals;
            var event = new Event('change');
            input.dispatchEvent(event);
            return false;
        });
    });

    document.querySelectorAll(".ptMinus").forEach(function (button) {
        button.addEventListener('click', function () {
            var input = this.nextElementSibling;
            var vals = parseInt(input.value, 10);
            if (vals > 1) {
                vals -= 1;
            }
            input.value = vals;
            var event = new Event('change');
            input.dispatchEvent(event);
            return false;
        });
    });
}

/*==================================
* Hero Swipper
==================================*/
var swiper = new Swiper('.zn_hero_slider', {
    loop: true,
    autoplay: {
        delay: 3400,
        disableOnInteraction: false,
    },
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 30,
});

/*==================================
* ZN Testimonial Carousel
==================================*/
var znFeaturedPd = new Swiper('.zn_featured_pd_carousel', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2400,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.zn_featuredPd_next',
        prevEl: '.zn_featuredPd_prev',
    },
    breakpoints: {

        400: {
            spaceBetween: 15,
            slidesPerView: 1.3
        },
        480: {
            spaceBetween: 15,
            slidesPerView: 1.3
        },
        576: {
            spaceBetween: 15,
            slidesPerView: 1.7
        },
        768: {
            spaceBetween: 20,
            slidesPerView: 1.4
        },
        992: {
            spaceBetween: 20,
            slidesPerView: 2
        },
        1300: {
            spaceBetween: 30,
            slidesPerView: 3
        }
    }
});

/*==================================
11. Testimonial Carousel
==================================*/
var zntestimSwiper = new Swiper('.zn_testimonial-swipper', {
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        480: {
            spaceBetween: 15,
            slidesPerView: 1
        },
        576: {
            spaceBetween: 15,
            slidesPerView: 1
        },
        768: {
            spaceBetween: 20,
            slidesPerView: 2
        },
        992: {
            spaceBetween: 20,
            slidesPerView: 2
        },
        1300: {
            spaceBetween: 30,
            slidesPerView: 3
        }
    }
});


/*==================================
12. Data Background Set
==================================*/
document.querySelectorAll('[data-background]').forEach(function (element) {
    const backgroundUrl = element.getAttribute('data-background');
    element.style.backgroundImage = `url(${backgroundUrl})`;
});


/*==================================
13. checkout toggle
==================================*/
document.querySelectorAll(".checkout-toggle-form").forEach(function (form) {
    const toggleBtn = form.querySelector(".form-toggle-btn");
    const toggleForm = form.querySelector(".toggle-form");

    if (toggleBtn && toggleForm) {
        toggleBtn.addEventListener("click", function (event) {
            event.preventDefault();
            toggleForm.classList.toggle("active");
        });
    }
});

/*==================================
* Feature Product
==================================*/
var swiper = new Swiper(".zc_featuredProduct_slides", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".zcFeature-button-next",
        prevEl: ".zcFeature-button-prev",
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        }
    }
});


/*==================================
* Acordion Button 
==================================*/
document.querySelectorAll('.accordion button').forEach(button => {
    button.addEventListener('click', function () {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';

        document.querySelectorAll('.accordion button').forEach(btn =>
            btn.setAttribute('aria-expanded', 'false')
        );

        if (!isExpanded) {
            this.setAttribute('aria-expanded', 'true');
        }
    });
});


/*==================================
* Product single slider
==================================*/
var swiper = new Swiper(".product-nav-slider", {
    loop: true,
    slidesPerView: 5,
    freeMode: true,
    spaceBetween: 24,
    direction: "vertical",
    breakpoints: {
        0: {
            slidesPerView: 2,
            direction: "horizontal"
        },
        420: {
            slidesPerView: 3,
            direction: "horizontal"
        },
        767: {
            slidesPerView: 3,
            direction: "horizontal"
        },
        768: {
            slidesPerView: 5,
            direction: "vertical"
        },
        1024: {
            slidesPerView: 5,
            direction: "vertical"
        },
    },
});
var swiper2 = new Swiper(".product-main-slider-wrapper", {
    loop: true,
    thumbs: {
        swiper: swiper,
    },
});

/*==================================
* Product single slider 02
==================================*/
var swiper = new Swiper(".rtl-slider-nav", {
    loop: true,
    slidesPerView: 2,
    freeMode: true,
    spaceBetween: 24,
    direction: "vertical",
    breakpoints: {
        0: {
            slidesPerView: 2,
            direction: "horizontal"
        },
        420: {
            slidesPerView: 3,
            direction: "horizontal"
        },
        767: {
            slidesPerView: 3,
            direction: "horizontal"
        },
        768: {
            slidesPerView: 3,
            direction: "horizontal"
        },
        1024: {
            slidesPerView: 3,
            direction: "horizontal"
        },
        1199: {
            slidesPerView: 3,
            direction: "horizontal"
        },
        1200: {
            slidesPerView: 2,
            direction: "vertical",
        },
    },
});
var swiper2 = new Swiper(".rtl-slider", {
    loop: true,
    thumbs: {
        swiper: swiper,
    },
});

/*==================================
* Product single slider 03
==================================*/
var swiper = new Swiper(".product-nav-slider3", {
    loop: true,
    slidesPerView: 3,
    freeMode: true,
    spaceBetween: 24,
    direction: "vertical",
    breakpoints: {
        0: {
            slidesPerView: 2,
            direction: "horizontal"
        },
        420: {
            slidesPerView: 3,
            direction: "horizontal"
        },
        767: {
            slidesPerView: 3,
            direction: "horizontal"
        },
        991: {
            slidesPerView: 3,
            direction: "horizontal"
        },
        992: {
            slidesPerView: 3,
            direction: "vertical",
        },
    },
});
var swiper2 = new Swiper(".product-main-slider-wrapper3", {
    loop: true,
    thumbs: {
        swiper: swiper,
    },
});

/*==================================
* Feedback Slider
==================================*/
var znInnerFeedback = new Swiper(".zn_innerFeedback-slider", {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".feedback-button-next",
        prevEl: ".feedback-button-prev",
    },
});


/*==================================
14. NiceSelect 
==================================*/
document.addEventListener("DOMContentLoaded", function () {
    if (typeof NiceSelect === "undefined") {
        console.error("NiceSelect is not loaded!");
        return;
    }
    var els = document.querySelectorAll(".nice_select");
    els.forEach(function (select) {
        NiceSelect.bind(select);
    });
});

// =====================
//16. CART DRAWER SECTION START
const cartDrawer = document.getElementById("cartDrawer");
const cartDrawerCloseButton = document.getElementById(
    "cartDrawerCloseButton"
);
const cartDrawerOpenButton = document.getElementById(
    "cartDrawerOpenButton"
);
const inputRange = document.getElementById("cart-drawer-deals-input-range");
const rangeSlide = document.getElementById("cart-drawer-deals-range");
const cardDrawerDeals = document.getElementById("cardDrawerDeals");

// Function to open the cart drawer
function openCartDrawer() {
    cartDrawer.classList.add("active");
    handleOverlay({ show: true, action: closeCartDrawer });

    const tl = gsap.timeline();
    tl.from(cartDrawer.querySelector(".cart-drawer-header"), {
    y: 100,
    opacity: 0,
    duration: 0.4,
    ease: "power1.inOut",
    })
    .from(cartDrawer.querySelector(".cart-drawer-wrapper"), {
        y: 100,
        opacity: 0,
        duration: 0.4,
        ease: "power1.inOut",
    })
    .from(cartDrawer.querySelector(".cart-drawer-footer"), {
        y: 100,
        opacity: 0,
        duration: 0.4,
        ease: "power1.inOut",
    });
}

// Function to close the cart drawer
function closeCartDrawer() {
    cartDrawer.classList.remove("active");
    handleOverlay({ show: false });
}

// Function to update range slide width
function updateRangeSlide() {
    rangeSlide.style.width = `${inputRange.value}%`;
}

// Function to toggle card drawer deals
function toggleCardDrawerDeals() {
    const dealsWrapper = cardDrawerDeals.querySelector(
    ".cart-drawer-deals-rang-wrapper"
    );

    if (cardDrawerDeals.classList.contains("active")) {
    gsap.to(dealsWrapper, {
        height: 0,
        duration: 0.4,
        opacity: 1,
        ease: "power1.inOut",
        overflow: "hidden",
    });
    cardDrawerDeals.classList.remove("active");
    } else {
    cardDrawerDeals.classList.add("active");
    gsap.to(dealsWrapper, {
        height: "auto",
        duration: 0.4,
        opacity: 1,
        ease: "power1.inOut",
    });
    }
}

// Initialize the cart drawer deals range
gsap.set(cardDrawerDeals.querySelector(".cart-drawer-deals-rang-wrapper"), {
    height: 0,
    opacity: 0,
});

if (cardDrawerDeals.classList.contains("active")) {
    gsap.set(
    cardDrawerDeals.querySelector(".cart-drawer-deals-rang-wrapper"),
    {
        height: "auto",
        opacity: 1,
    }
    );
}

// Event Listeners
cartDrawerOpenButton.addEventListener("click", openCartDrawer);
cartDrawerCloseButton.addEventListener("click", closeCartDrawer);
inputRange.addEventListener("input", updateRangeSlide);
cardDrawerDeals.addEventListener("click", toggleCardDrawerDeals);

// CART DRAWER SUGGEST PRODUCTS SWIPER
const swiperCart = new Swiper(".cart-drawer-suggest-products-wrapper", {
    loop: true,
    speed: 700,
    slidesPerView: 1,
    pagination: {
    el: ".cart-drawer-suggest-products-pagination",
    clickable: true,
    },
});


// Function to handle the overlay visibility
const handleOverlay = ({ show = false, action = () => {} }) => {
const overlay = document.querySelector(".overlay");

// HANDLE CLOSE OVERLAY
const handleClose = () => {
    overlay.classList.remove("active");
    overlay.style.zIndex = "var(--overlay-z-index)";
    document.body.style.overflowY = "visible";
    document.body.style.overflowX = "hidden";
    action();
};

// HANDLE OPEN
const handleOpen = () => {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
};

// CONDITION
if (show) {
    handleOpen();
} else {
    handleClose();
}

overlay.addEventListener("click", () => {
    if (show) {
    handleClose();
    }
});
};

// Mobile Menu
window.addEventListener("DOMContentLoaded", () => {
gsap.registerPlugin(ScrollTrigger);

(function () {
    const productControllers = document.querySelectorAll(
        ".product-quantity-controller"
    );

    productControllers &&
        productControllers.forEach((controller) => {
        let count = 1;
        const decreaseButton = controller.querySelector(".decrease-quantity");
        const increaseButton = controller.querySelector(".increase-quantity");
        const productQuantity = controller.querySelector(".product-quantity");

        // Set the initial quantity
        productQuantity.value = count;

        // Handle increase
        increaseButton.addEventListener("click", () => {
            count++;
            productQuantity.value = count;
        });

        // Handle decrease
        decreaseButton.addEventListener("click", () => {
            if (count > 1) {
            count--;
            productQuantity.value = count;
            }
        });
        });
})();

// Function to handle the overlay visibility
const handleOverlay = ({ show = false, action = () => {} }) => {
    const overlay = document.querySelector(".overlay");

    // HANDLE CLOSE OVERLAY
    const handleClose = () => {
    overlay.classList.remove("active");
    overlay.style.zIndex = "var(--overlay-z-index)";
    document.body.style.overflowY = "visible";
    document.body.style.overflowX = "hidden";
    action();
    };

    // HANDLE OPEN
    const handleOpen = () => {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    };

    // CONDITION
    if (show) {
    handleOpen();
    } else {
    handleClose();
    }

    overlay.addEventListener("click", () => {
    if (show) {
        handleClose();
    }
    });
};

// =====================
// MOBILE MENU SECTION START
(function () {
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileMenuCloseButton = document.getElementById("mobileMenuCloseBtn");
    const mobileMenuOpenButton = document.getElementById(
    "mobileMenuOpenButton"
    );
    const mobileMenuItems = mobileMenu.querySelectorAll(".mobile-menu-items");
    const mobileSubMenu = document.getElementById("mobileSubmenu");

    // Set initial state of the mobile menu off-screen
    gsap.set(mobileMenu, { xPercent: -110 });

    // Open Menu Function
    function openMobileMenu() {
    handleOverlay({ show: true, action: closeMobileMenu });

    // GSAP Open Timeline
    const tl = gsap.timeline();
    tl.to(mobileMenu, {
        display: "block",
        delay: 0.2,
    })
        .to(mobileMenu, {
        xPercent: 0,
        duration: 0.3,
        ease: "power4.out",
        })
        .from(mobileMenu.querySelector(".header-mobile-menu"), {
        y: -100,
        duration: 0.5,
        opacity: 0,
        ease: "back.out(1.7)",
        })
        .fromTo(
        mobileMenu.querySelectorAll(".mobile-menu-list > li"),
        { xPercent: -100, opacity: 0 },
        {
            duration: 0.6,
            opacity: 1,
            xPercent: 0,
            stagger: 0.1,
            ease: "power4.out",
        }
        )
        .from(mobileMenu.querySelector(".mobile-menu-footer"), {
        y: 100,
        duration: 0.3,
        ease: "back.out(1.7)",
        opacity: 0,
        });
    }

    // Close Menu Function
    function closeMobileMenu() {
    // GSAP Close Timeline
    const tlClose = gsap.timeline({
        onComplete: () => handleOverlay({ show: false }), // Optional: Handle overlay close
    });

    // Slide the menu off-screen
    tlClose
        .to(mobileMenu, {
        xPercent: -110,
        duration: 0.7,
        ease: "power4.in",
        })
        .set(mobileMenu, {
        display: "none",
        });
    }

    // Handle Menu Item Clicks
    function handleMenuItemClick(item) {
    item.addEventListener("click", () => {
        const tl = gsap.timeline();
        tl.to(mobileSubMenu, {
        display: "block",
        }).fromTo(
        mobileSubMenu,
        {
            xPercent: -110,
            opacity: 1,
        },
        {
            xPercent: 0,
            opacity: 1,
            duration: 0.7,
        }
        );
    });
    }

    // Handle Back Button Click on Submenu
    function handleSubMenuBackButton() {
    mobileSubMenu
        .querySelector(".mobile-submenu-back-button")
        .addEventListener("click", () => {
        const tl = gsap.timeline();
        tl.to(mobileSubMenu, {
            xPercent: -110,
            duration: 0.7,
        });
        });
    }

    // Event Listeners
    mobileMenuOpenButton.addEventListener("click", openMobileMenu);
    mobileMenuCloseButton.addEventListener("click", closeMobileMenu);
    mobileMenuItems.forEach(handleMenuItemClick);
    handleSubMenuBackButton();
})();


/* ------------------------------
SELECT & OPTION  SECTION  START
-------------------------------- */
(function () {
    const customSelect = document.querySelectorAll(".custom-select");

        // CHECK CUSTOM SELECT EXIT
        if (customSelect.length > 0) {
        window.addEventListener("click", (e) => {
            customSelect.forEach((item) => {
            if (!item.contains(e.target)) {
                item.classList.remove("open");
            }
            });
        });

        customSelect.forEach((item) => {
            const selectBox = item.querySelector(".select-box");
            const list = item.querySelector(".select-options-list");
            const options = item.querySelectorAll(".option");
            const selected = item.querySelector(".selected");

            // CHECK SELECT BOX & LIST EXIT
            if (selectBox && list) {
            selectBox.addEventListener("click", () => {
                item.classList.toggle("open");
            });
            }

            // CHECK IF OPTION EXIST
            if (options.length > 0) {
            options.forEach((opt) => {
                opt.addEventListener("click", () => {
                if (selected) {
                    selected.textContent = opt.textContent;
                }
                item.classList.remove("open");
                });
            });
            }
        });
        }
    })();
}); // END DOM CONTENT LOADED

/*==================================
17. Range Slider
==================================*/
window.onload = function () {
    slideOne();
    slideTwo();
};

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}

function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}

function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #D0552F ${percent1}% , #D0552F ${percent2}%, #DEDEDE ${percent2}%)`;
}

/*==================================
18. Split text animation
==================================*/
document.addEventListener('DOMContentLoaded', function () {
    const splitTextElements = document.querySelectorAll('.split-text');

    if (splitTextElements.length === 0) return;

    gsap.registerPlugin(SplitText);

    splitTextElements.forEach((el) => {
        // Initialize SplitText on each element
        el.split = new SplitText(el, {
            type: "lines,words,chars",
            linesClass: "tp-split-line"
        });

        // Set perspective for 3D effect
        gsap.set(el, {
            perspective: 400
        });

        // Apply initial transform based on class
        if (el.classList.contains('right')) {
            gsap.set(el.split.chars, {
                opacity: 0,
                x: "50",
                ease: "back.out"
            });
        } else if (el.classList.contains('left')) {
            gsap.set(el.split.chars, {
                opacity: 0,
                x: "-50",
                ease: "circ.out"
            });
        } else if (el.classList.contains('up')) {
            gsap.set(el.split.chars, {
                opacity: 0,
                y: "80",
                ease: "circ.out"
            });
        } else if (el.classList.contains('down')) {
            gsap.set(el.split.chars, {
                opacity: 0,
                y: "-80",
                ease: "circ.out"
            });
        }

        // Define the animation with ScrollTrigger
        el.anim = gsap.to(el.split.chars, {
            scrollTrigger: {
                trigger: el,
                start: "top 90%"
            },
            x: "0",
            y: "0",
            rotateX: "0",
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.02
        });
    });
});

// Image reveal js
document.addEventListener('DOMContentLoaded', function () {
    const revealContainers = document.querySelectorAll('.reveal');

    revealContainers.forEach((container) => {
        const image = container.querySelector('img');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                toggleActions: 'play none none none'
            }
        });

        tl.set(container, {
            autoAlpha: 1
        });

        if (container.classList.contains('zoom-out')) {
            tl.from(image, {
                scale: 1.4,
                duration: 1.5,
                ease: 'power2.out'
            });
        } else if (container.classList.contains('left') || container.classList.contains('right')) {
            const xPercent = container.classList.contains('left') ? -100 : 100;

            tl.from(container, {
                xPercent: xPercent,
                duration: 1.5,
                ease: 'power2.out'
            });
            tl.from(image, {
                xPercent: -xPercent,
                scale: 1,
                duration: 1.5,
                delay: -1.5,
                ease: 'power2.out'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const offerTimers = document.querySelectorAll(".zn_offer_timer");

    offerTimers.forEach((offerTimer) => {
        const offerDate = new Date(offerTimer.getAttribute("data-offer-date")).getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = offerDate - now;

            if (timeLeft > 0) {
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                offerTimer.innerHTML = `<ul>
                    <li>${days}<span>Days</span></li>
                    <li class="zn_timerSeparator"><span>:</span></li>
                    <li>${String(hours).padStart(2, '0')}<span>Hrs</span></li>
                    <li class="zn_timerSeparator"><span>:</span></li>
                    <li>${String(minutes).padStart(2, '0')}<span>Mins</span></li>
                    <li class="zn_timerSeparator"><span>:</span></li>
                    <li>${String(seconds).padStart(2, '0')}<span>Secs</span></li>
                </ul>`;
            } else {
                offerTimer.innerHTML = "Offer Expired!";
                clearInterval(intervalId);
            }
        }

        const intervalId = setInterval(updateCountdown, 1000);
        updateCountdown();
    });
});
