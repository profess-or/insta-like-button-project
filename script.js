
        const container = document.querySelector(".container")
        const iIcon = document.querySelector('.heart-icon');

        container.addEventListener("dblclick",()=>{
            iIcon.style.transform = 'translate(-50%,-50%) scale(3)';
            setTimeout(function(){
                iIcon.style.transform = 'translate(-50%,-50%) scale(0)';
        },500)
        })
        
