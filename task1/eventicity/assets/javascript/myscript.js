function startCounting() {
    var a= document.querySelectorAll('.stat-number');
    a.forEach(items => {
        let target= parseInt(items.innerText);
        let suffix= items.innerText.includes('+') ? '+' : '';
        let count= 0;
        let increment = target / (3000 / 30);
        let timer= setInterval(()=>{
            count+= increment;
            if(count>=target){
                items.innerText= target+suffix;
                clearInterval(timer); 
            }else {
                items.innerText= Math.ceil(count)+suffix;
                }
        },30);
    });
}
let observer= new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting){
        startCounting();
        observer.disconnect();
    }
    }, {threshold:0.5});
    const section= document.querySelector('.stat-container');
    if (section) {
    observer.observe(section);
}


const newsCards = document.querySelectorAll('.our-blog-2, .our-blog-3');
newsCards.forEach(card => {
    const arrow = card.querySelector('.arrow');
    arrow.style.transition = "all 0.6s cubic-bezier(0.19, 1, 0.22, 1)";
    arrow.style.display = "inline-block";
    card.addEventListener('mouseenter', () => {
        let readMore = card.querySelector('.read-more-js');
        if (!readMore) {
            readMore = document.createElement('span');
            readMore.innerText = 'READ MORE';
            readMore.className = 'read-more-js';
            readMore.style.fontSize = "13px";
            readMore.style.fontWeight = "bold";
            readMore.style.color = "#ffffff";
            readMore.style.opacity = "0";
            readMore.style.maxWidth = "0";
            readMore.style.display = "inline-block";
            readMore.style.overflow = "hidden";
            readMore.style.whiteSpace = "nowrap";
            readMore.style.verticalAlign = "middle";
            readMore.style.transition = "all 0.5s ease-in-out";
            arrow.parentNode.insertBefore(readMore, arrow);
        }
        setTimeout(() => {
            readMore.style.maxWidth = "120px"; 
            readMore.style.opacity = "1";
            readMore.style.marginRight = "15px"; 
        }, 30);
    });
    card.addEventListener('mouseleave', () => {
        const readMore = card.querySelector('.read-more-js');
        if (readMore) {
            readMore.style.maxWidth = "0";
            readMore.style.opacity = "0";
            readMore.style.marginRight = "0";
        }
    });
});

var accordionList= document.querySelectorAll('.acc-content');
var hoverBox= document.createElement('div');
hoverBox.className= "hover-box";
document.body.appendChild(hoverBox);
accordionList.forEach(element => {
 element.addEventListener('mouseenter', () =>{
        const imagePath=element.getAttribute('data-image');
        hoverBox.innerHTML= `<img src= "${imagePath}"style="width:100%; height:100%; object-fit:cover;">`
        hoverBox.style.display = 'block';
    });
    element.addEventListener('mouseleave', () => {
        hoverBox.style.display= "none";
    });
    element.addEventListener('mousemove', (e) => {
        hoverBox.style.left= (e.clientX+20)+'px';
        hoverBox.style.top= (e.clientY+20)+'px';
    }); 
});

window.addEventListener('scroll', () =>{
    const line1= document.querySelector('.title');
    const line2= document.querySelector('.titlee');
    const section= document.querySelector('.item-title-text');
    const rect= section.getBoundingClientRect();
    const screenHeight= window.innerHeight;
    if(rect.top < screenHeight && rect.bottom > 0){
        const scrollProgress = (screenHeight / 2) - (rect.top + rect.height / 2); 
        const movement = scrollProgress * 0.5;
        line1.style.transform = `translateX(${-movement}px)`;
        line2.style.transform = `translateX(${movement}px)`;
    }
});

const sidePanel = document.querySelector('.menu-panel');
const openTrigger = document.querySelector('.nav-icons label[for="menu-toggle"]'); 
const closeTrigger = document.querySelector('.close-btn');
const tagsElement = document.getElementById('tags'); 
if (openTrigger) {
    openTrigger.addEventListener('click', (e) => {
        e.preventDefault(); 
        e.stopPropagation(); 
        sidePanel.classList.add('is-open');
        // alert("You are going to open slider");
                if (tagsElement) {
            tagsElement.style.display = 'none';
        }
    });
}
if (closeTrigger) {
    closeTrigger.addEventListener('click', () => {
        sidePanel.classList.remove('is-open');
        // alert("You are going to close slider");
                if (tagsElement) {
            tagsElement.style.display = 'flex'; 
        }
    });
}
window.addEventListener('click', (e) => {
    if (sidePanel.classList.contains('is-open') && 
        !sidePanel.contains(e.target) && 
        !openTrigger.contains(e.target)) {
        sidePanel.classList.remove('is-open');
         alert("You are going to close slider");
                if (tagsElement) {
            tagsElement.style.display = 'flex';
        }
    }
});

var productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    const priceTag = card.querySelector('.pricee');
    const hoverBtn = card.querySelector('.hover-btn');
    card.addEventListener('mouseenter', () => {
        if (priceTag) {
            priceTag.style.transform = "translateY(-20px)";
            priceTag.style.opacity = "0";
            priceTag.style.transition = "all 0.4s ease";
        }
        if (hoverBtn) {
            hoverBtn.style.display = "flex"; 
            setTimeout(() => {
                hoverBtn.style.transform = "translateY(-25px)"; 
                hoverBtn.style.opacity = "1";
                hoverBtn.style.transition = "all 0.4s ease";
            }, 10);
        }
    });
    card.addEventListener('mouseleave', () => {
        if (priceTag) {
            priceTag.style.transform = "translateY(0)";
            priceTag.style.opacity = "1";
        }
        if (hoverBtn) {
            hoverBtn.style.transform = "translateY(0)";
            hoverBtn.style.opacity = "0";
            setTimeout(() => { hoverBtn.style.display = "none"; }, 400);
        }
    });
});

const contactFields = document.querySelectorAll('.contact-form');
contactFields.forEach(field => {
    const line = document.createElement('div');
    line.style.position = "absolute";
    line.style.bottom = "0px";
    line.style.left = "0px";
    line.style.width = "0%";
    line.style.height = "0.5px";
    line.style.backgroundColor = "#333"; 
    line.style.transition = "width 0.4s ease";
    field.style.position = "relative";
    field.appendChild(line);
    field.addEventListener('mouseenter', () => {
    line.style.width = "100%";
    });
    field.addEventListener('mouseleave', () => {
        line.style.width = "0%";
    });
});
var slider= document.querySelector('.slider');
if(slider){
slider.style.animation = "scroll-loop 20s linear infinite";
slider.style.display = "flex";
slider.style.flexWrap = "nowrap";
}

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    if (scrollPos > 0 && scrollPos < 700) {
        header.style.transform = "translateY(-100%)"; 
        header.style.opacity = "0";
    } 
    else  {
        header.style.transform = "translateY(0)";
        header.style.opacity = "1";
        header.style.position = "fixed";
        header.style.transition = "all 0.4s ease";
        header.style.backgroundColor = "#121f2e";
    }
});

const icons = document.querySelectorAll('.social-icons .dev img');
const filters = [
    "invert(39%) sepia(21%) saturate(2878%) hue-rotate(192deg) brightness(91%) contrast(101%)", // Icon 1
    "invert(55%) sepia(93%) saturate(1352%) hue-rotate(173deg) brightness(101%) contrast(101%)", // Icon 2
    "invert(53%) sepia(20%) saturate(2500%) hue-rotate(315deg) brightness(100%) contrast(101%)", // Icon 3
    "invert(30%) sepia(90%) saturate(1500%) hue-rotate(280deg) brightness(90%) contrast(105%)"  // Icon 4
];
icons.forEach((img, index) => {
    img.addEventListener('mouseenter', () => {
        img.style.filter = filters[index];
        img.style.transition = "filter 0.3s ease"; 
    });
    img.addEventListener('mouseleave', () => {
        img.style.filter = "";
    });
});

// function showWelcome() {
//     console.log("Website Loaded Successfully!");
//     alert("Welcome to Eventicity – Catering & Event Agency!"); 
// }
// window.onload = showWelcome;

function validateForm(e) {
    e.preventDefault(); 
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    if (!nameInput.value.trim() || !emailInput.value.trim()) {
        showCustomAlert("Please accept the terms of our Privacy policy.", "error");
    } else {
        showCustomAlert("Thank you! Message sent successfully.", "success");
        nameInput.value = "";
        emailInput.value = "";
    }
}
const submitBtn = document.querySelector('.submit-btn');
if (submitBtn) {
    submitBtn.addEventListener('click', validateForm);
}
function showCustomAlert(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 500); 
    }, 3000);
}

const viewBtn = document.querySelector('.view-link');
const arrowIcon = viewBtn.querySelector('.arrow');
if (viewBtn && arrowIcon) {
    const triggerArrow = () => {
        arrowIcon.classList.remove('arrow-animate');
        void arrowIcon.offsetWidth; 
        arrowIcon.classList.add('arrow-animate');
    };
    viewBtn.addEventListener('mouseenter', triggerArrow);
    viewBtn.addEventListener('mouseleave', triggerArrow);
}

const closeBtn = document.querySelector('.close-btn');
if (closeBtn) {
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.classList.add('rotate-close');
    });
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.classList.remove('rotate-close');
    });
    closeBtn.onclick = (e) => {
        e.preventDefault();
        const checkbox = document.querySelector('#dash-check');
        if (checkbox) {
            checkbox.checked = false;
            const event = new Event('change');
            checkbox.dispatchEvent(event);
        }
    };
}

function toggleMenu() {
    const slider = document.getElementById("mainSlider");
    if (!slider) return;

    if (slider.classList.contains("active")) {
        slider.classList.remove("active");
        slider.classList.add("exit-active");

        const items = slider.querySelectorAll(".acc-item, .c-item, .social-icons, hr");
        let finished = 0;

        const forceClose = setTimeout(() => {
            closeSliderNow(slider);
        }, 700);

        if (items.length > 0) {
            items.forEach(item => {
                item.addEventListener("animationend", () => {
                    finished++;
                    if (finished === items.length) {
                        clearTimeout(forceClose);
                    }
                }, { once: true });
            });
        } else {
            closeSliderNow(slider);
        }
    } else {
        slider.style.top = "0";
        slider.classList.remove("exit-active");
        slider.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeSliderNow(slider) {
    slider.style.top = "-100%";
    slider.classList.remove("exit-active");
    document.body.style.overflow = "auto";
    
    document.querySelectorAll('.acc-body').forEach(body => {
        body.style.maxHeight = null;
    });
}

function toggleAccordion(element) {
    const body = element.nextElementSibling;
    
    if (body.style.maxHeight) {
        body.style.maxHeight = null;
        element.parentElement.classList.remove("active");
    } else {
        document.querySelectorAll('.acc-body').forEach(b => {
            b.style.maxHeight = null;
            b.parentElement.classList.remove("active");
        });
        body.style.maxHeight = body.scrollHeight + "px";
        element.parentElement.classList.add("active");
    }
}