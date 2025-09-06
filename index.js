const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active')
    })
}

if (close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active')
    })
};


// Animation

gsap.from("#header .logo",{
    opacity:0,
    delay:0.5,
    x:20
})

const navbar = document.querySelector("#navbar");
gsap.from(navbar.children,{
    opacity:0,
    delay:1,
    x:0,
    duration:1,
    stagger:{
        amount:1
    }
})

gsap.from("#b-image",{
    opacity:0,
    delay:0.8,
    x:0,
    duration:1,
    stagger:{
        amount:1
    }
})

gsap.from("#heading h4",{
    opacity:-0.5,
    duration:1.3,
    x:150,
    scrollTrigger:{
        trigger:"#heading h4"
    }
})
gsap.from("#heading h2",{
    opacity:-0.5,
    duration:1.3,
    x:-200,
    scrollTrigger:{
        trigger:"#heading h2"
    }
})
gsap.from("#heading h1",{
    opacity:-0.5,
    duration:1.3,
    x:-200,
    scrollTrigger:{
        trigger:"#heading h1"
    }
})
gsap.from("#heading p",{
    opacity:-0.5,
    duration:1.5,
    y:-40,
    scrollTrigger:{
        trigger:"#heading p"
    }
})
gsap.from("#heading button",{
    opacity:-0.5,
    duration:1.3,
    y:90,
    scrollTrigger:{
        trigger:"#heading button"
    }
})

gsap.from("#product h2",{
    opacity:-0.5,
    duration:1,
    y:100,
    scrollTrigger:{
        trigger:"#product h2",
        scroll:"body",
        // markers:true,
        start:"top 78%",
        end:"top 30%",
    }
})
gsap.from("#product p",{
    opacity:-0.8,
    duration:1.5,
    y:-40,
    scrollTrigger:{
        trigger:"#product p",
        scroll:"body",
        // markers:true,
        start:"top 63%",
        end:"top 30%",
    }
})

 gsap.fromTo(".pro",{
    opacity:0,
    scale:1,
 },{
    opacity:1,
    scale:1,
    duration:1,
    // delay:1,
    stagger:{
        amount:1
    },
    scrollTrigger:{
        trigger:".pro",
        scroll:"body",
        // markers:true,
        start:"top 70%",
        end:"top 30%",
    }
 })

//  gsap.fromTo("#pro2",{
//     opacity:0,
//     scale:1,
//  },{
//     opacity:1,
//     scale:1,
//     duration:1,
//     delay:1,
//     stagger:{
//         amount:1
//     },
//     scrollTrigger:{
//         trigger:"#pro2",
//         scroll:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 25%",
//     }
//  })

// bannar start
gsap.from("#bannar h4",{
    opacity:-0.5,
    duration:1.3,
    x:150,
    scrollTrigger:{
        trigger:"#bannar h4"
    }
})
gsap.from("#bannar h2",{
    opacity:-0.5,
    duration:1.5,
    y:-40,
    scrollTrigger:{
        trigger:"#bannar h2"
    }
})
gsap.from("#bannar button",{
    opacity:-0.5,
    duration:1.3,
    y:90,
    scrollTrigger:{
        trigger:"#bannar button"
    }
})
// bannar end

// new arrivals start

gsap.from("#product2 h2",{
    opacity:-0.5,
    duration:1,
    y:100,
    scrollTrigger:{
        trigger:"#product2 h2",
        scroll:"body",
        // markers:true,
        start:"top 78%",
        end:"top 30%",
    }
})
gsap.from("#product2 p",{
    opacity:-0.8,
    duration:1.5,
    y:-40,
    scrollTrigger:{
        trigger:"#product2 p",
        scroll:"body",
        // markers:true,
        start:"top 63%",
        end:"top 30%",
    }
})
gsap.fromTo(".pro2",{
    opacity:0,
    scale:1,
 },{
    opacity:1,
    scale:1,
    duration:1,
    // delay:1,
    stagger:{
        amount:1
    },
    scrollTrigger:{
        trigger:".pro2",
        scroll:"body",
        // markers:true,
        start:"top 70%",
        end:"top 30%",
    }
 })
//  new arraivals end
// gsap.fromTo("#sm-bannar .bannar-box1",{
//     opacity:0,
//     scale:1,
//  },{
//     opacity:1,
//     scale:1,
//     duration:1,
//     x:100,
//     // delay:1,
//     stagger:{
//         amount:1
//     },
//     scrollTrigger:{
//         trigger:"#sm-bannar .bannar-box1",
//         scroll:"body",
//         markers:true,
//         start:"top 70%",
//         end:"top 30%",
//     }
//  })

gsap.from("#sm-bannar .bannar-box1",{
    opacity:0,
    duration:1.3,
    x:-80,
    stagger:{
        amount:1
    },
    scrollTrigger:{
        trigger:"#sm-bannar .bannar-box1",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
})
gsap.from("#sm-bannar .bannar-box2",{
    opacity:0,
    duration:1.3,
    x:80,
    stagger:{
        amount:1
    },
    scrollTrigger:{
        trigger:"#sm-bannar .bannar-box2",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
})

gsap.from("#bannar3 .bannar-box",{
    opacity:0,
    duration:1.3,
    y:80,
    stagger:{
        amount:1
    },
    scrollTrigger:{
        trigger:"#bannar3 .bannar-box",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
}) 

// newsletter start
gsap.from("#newsletter .newstext h4",{
    opacity:-0.5,
    duration:1.3,
    x:150,
    scrollTrigger:{
        trigger:"#newsletter .newstext h4",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
})
gsap.from("#newsletter .newstext p",{
    opacity:-0.5,
    duration:1.5,
    y:-40,
    scrollTrigger:{
        trigger:"#newsletter .newstext p",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
})
gsap.from("#newsletter .form2",{
    opacity:0,
    duration:1.5,
    x:0,
    stagger:{
        amount:1
    },
    scrollTrigger:{
        trigger:"#newsletter .form2",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
})
// newsletter end

gsap.from("footer .colu .logo",{
    opacity:0,
    delay:0.5,
    x:20,
    scrollTrigger:{
        trigger:"footer .colu .logo",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
})
gsap.from("footer .colu h4",{
    opacity:-0.5,
    duration:1.3,
    x:-100,
    scrollTrigger:{
        trigger:"footer .colu h4",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
})
gsap.from("footer .colu p",{
    opacity:-0.5,
    duration:1.3,
    x:-100,
    scrollTrigger:{
        trigger:"footer .colu p",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
})
gsap.from("footer .colu .follow .ichons",{
    opacity:-0.8,
    duration:1.3,
    y:-50,
    scrollTrigger:{
        trigger:"footer .colu .follow .ichons",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
})

gsap.from("footer .colu a",{
    opacity:-0.8,
    duration:1.3,
    y:-50,
    scrollTrigger:{
        trigger:"footer .colu a",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
})

gsap.from("footer .colu-inst h4",{
    opacity:-0.5,
    duration:1.3,
    x:100,
    scrollTrigger:{
        trigger:"footer .colu-inst h4",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
})
gsap.from("footer .colu-inst p",{
    opacity:-0.5,
    duration:1.3,
    y:-50,
    scrollTrigger:{
        trigger:"footer .colu-inst p",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
})
gsap.from("footer .colu-inst .logo2",{
    opacity:-0.5,
    duration:1.3,
    y:-60,
    scrollTrigger:{
        trigger:"footer .colu-inst .logo2",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
})
gsap.from("footer .colu-inst .logo",{
    opacity:-0.5,
    duration:1.3,
    y:-60,
    scrollTrigger:{
        trigger:"footer .colu-inst .logo",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
})
gsap.from("footer .copyright p",{
    opacity:-0.5,
    duration:1.3,
    y:60,
    scrollTrigger:{
        trigger:"footer .copyright p",
        scroll:"body",
    }
})