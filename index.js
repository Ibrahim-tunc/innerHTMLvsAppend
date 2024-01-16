// can be tried in script tags and html by live server

// Example 1 just a div containing span tags

        const main = document.createElement('div');
        document.body.append(main)
        function writer(id){
            main.innerHTML += `<span> Hangisi daha iyi ?</span>`;
        }
        const start = Date.now();

        for(let i=0; i<300; i++){
            writer(i);
        }
        const duration = Date.now() - start;
        console.log(`duration : ${duration}`);

        /* try separately */
        
        const main = document.createElement('div');
        document.body.append(main);
        function writer(i){
            const span = document.createElement('span');
            span.textContent = "Hangisi daha iyi ?"
            main.append(input);
        }
        const start = Date.now();
        for(let i=0; i<300; i++){
            writer();
        }
        const duration = Date.now() - start;
        console.log(`duration : ${duration}`); 


// Exaple 2 with props

        const main = document.createElement('div');
        document.body.append(main)
        function writer(id){
            main.innerHTML += `<input name='hangisi' id="hangisi-${id}" placeholder="hangisi"/>`;
        }
        const start = Date.now();

        for(let i=0; i<60; i++){
            writer(i);
        }
        const duration = Date.now() - start;
        console.log(`duration : ${duration}`);

        /* try separately */
        
        const main = document.createElement('div');
        document.body.append(main);
        function writer(i){
            const input = document.createElement('input');
            input.name = "hangisi";
            input.placeholder = "hangisi";
            input.id = `hangisi-${i}`;
            main.append(input);
        }
        const start = Date.now();
        for(let i=0; i<300; i++){
            writer();
        }
        const duration = Date.now() - start;
        console.log(`duration : ${duration}`); 
