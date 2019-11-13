
    var newbtn= document.getElementById('newbtn');
    console.log('test');
    
    const clickFunc =()=>{
        fetch('superheroes.php').then((data)=>{
            return data.text();
        }).then(ndata=>{
            alert(ndata);
        })
        .catch(err=>{
            
        })
    }
    
    newbtn.addEventListener('click',clickFunc);

