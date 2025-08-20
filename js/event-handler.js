  document.getElementById('change').addEventListener('click',function(){
           const change = document.getElementById('name');
           change.innerText = 'My name is razib';
        })
// another

        document.getElementById('btn-update').addEventListener('click', function(){
        const inputName = document.getElementById('input-name');
        const name = inputName.value;
        document.getElementById('change-value').innerText = name;
     })