    function scroll(value){
        const element = document.getElementById(value);
        
        element.scrollIntoView();
    }
    function alerta(value){
        if(value == "discord"){
            document.getElementById('alertdiscord').style.display = "block"
        }else{
            document.getElementById('alert').style.display = "block"
        }
    }
    function notConfirm(value){
        if(value == 'discord'){
            document.getElementById('alertdiscord').style.display = "none"
        }else{
            document.getElementById('alert').style.display = "none"
        }
        
    }
    function confirm(value){
        window.location = document.getElementById('confirm').getAttribute('value')
        notConfirm()
    }
    function red(value){
        if(value == 'instagram'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://www.instagram.com/rafaelparroni/")
        }else if(value == 'github'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://github.com/RafaelParoni")
        }else if(value == 'twitter'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://twitter.com/RafaelParoni")
        }else if(value == 'youtube'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://www.youtube.com/channel/UCCjwv7_RJteoSRhbRqFqP-Q")
        }else if(value == 'discord'){
            alerta('discord')
        }else if(value == 'html'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://g.co/kgs/cNYSe2")
        }else if(value == 'css'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://g.co/kgs/yKs1if")
        }else if(value == 'react.js'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://g.co/kgs/4R2XeQ")
        }else if(value == 'js'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://g.co/kgs/nJhcNE")
        }else if(value == 'php'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://g.co/kgs/co6VH6")
        }else if(value == 'mysql'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://g.co/kgs/JcqJmV")
        }else if(value == 'python'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://g.co/kgs/z8zt1L")
        }else if(value == 'terminal'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://github.com/RafaelParoni/Website-DB")
        }else if(value == 'alert'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://github.com/RafaelParoni/alert")
        }else if(value == 'snake-game'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://github.com/RafaelParoni/snake-game")
        }else if(value == 'website-old'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://github.com/RafaelParoni/website-old")
        }else if(value == 'website-pessoal'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://github.com/RafaelParoni/Website-pessoal")
        }else if(value == 'rafaelparoni.netlify.app'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://rafaelparoni.netlify.app/")
        }else if(value == 'alert-preview'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://alertcode.glitch.me/")
        }else if(value == 'alertcode.glitch.me'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://alertcode.glitch.me/")
        }else if(value == 'login-screen'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://github.com/RafaelParoni/login_screen")
        }else if(value == 'website-emoji'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://github.com/RafaelParoni/Splus_emojis")
        }else if(value == 'splusemoji.netlify.app'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://splusemoji.netlify.app/")
        }else if(value == 'tasks-website'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://github.com/RafaelParoni/tasks-site")
        }else if(value == 'tasks-website-preview'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://task-preview.netlify.app/")
        }else if(value == 'search-cep'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://github.com/RafaelParoni/buscador-cep")
        }else if(value == 'search-cep.app'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://buscador-cep-orpin.vercel.app/")
        }else if(value == 'search-Movie'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://github.com/RafaelParoni/Movie-Search")
        }else if(value == 'search-Movie.app'){
            alerta()
            var elementValue = document.getElementById('confirm')
            elementValue.setAttribute("value", "https://movie-search-five-chi.vercel.app/")
        }
    }
    function project(value){
        window.location = "./projeto/" + value + ".html"
    }
    function goBack(){
        window.location = '../index.html'
    }