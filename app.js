window.onload = function(){
  // Get Elements
  const input = document.querySelector('#inp');
  const nameList = document.querySelector('#name-list');
  const display = document.querySelector('#display');
  const giveTry = document.querySelector('#roll');
  const firstPosition = document.querySelector('#Firstposition');
  const secondPosition = document.querySelector('#Secondposition');
  const thirdPosition = document.querySelector('#Thirdposition');
  const fourthPosition = document.querySelector('#Fourthposition');

  // create empty array 
  const participantNames = [];

  // keypress Event for Event
  input.addEventListener('keypress', inputName);

    // Creat Text Area Input function
    function inputName(e) {
    if(e.key === 'Enter'){
      let newNames = e.target.value.split(', ');
      if(newNames[0] !== ''){
        newNames.forEach(name =>{
          participantNames.push(name);

          let item = createListItem(name);
          // append item to namelist
          nameList.appendChild(item);

          // clear input
          input.value = '';
        });
      }
    }
    }

    giveTry.addEventListener('click',giveTryBtn);

    // give try random button
    function giveTryBtn(){
      if(participantNames.length === 0){
        alert('There is No Entry');
      } else {
        let shuffleNames = shuffle(participantNames);
        for(let i = 1; i < shuffleNames.length; i++){
          (function(i,count){

            setTimeout(() =>{
              let rand = Math.floor(Math.random() * shuffleNames.length);
              display.innerHTML = shuffleNames[rand];
              if(count === shuffleNames.length -1 ) {
                if(!firstPosition.innerHTML) {
                  firstPosition.innerHTML = `<a href="${shuffleNames[rand]}" target="_blank">${shuffleNames[rand]}</a>`;
                  let ind = participantNames.indexOf(shuffleNames[rand]);
                  participantNames.splice(ind, 1);

                } else if(!secondPosition.innerHTML){
                  secondPosition.innerHTML = `<a href="${shuffleNames[rand]}" target="_blank">${shuffleNames[rand]}</a>`;
                  let ind = participantNames.indexOf(shuffleNames[rand]);
                  participantNames.splice(ind, 1);
                } else if(!thirdPosition.innerHTML){
                  thirdPosition.innerHTML = `<a href="${shuffleNames[rand]}" target="_blank">${shuffleNames[rand]}</a>`;
                  let ind = participantNames.indexOf(shuffleNames[rand]);
                  participantNames.splice(ind, 1);
                } else if(!fourthPosition.innerHTML){
                  fourthPosition.innerHTML = `<a href="${shuffleNames[rand]}" target="_blank">${shuffleNames[rand]}</a>`;
                  let ind = participantNames.indexOf(shuffleNames[rand]);
                  participantNames.splice(ind, 1);
                } else {
                  alert('Raffle Draw Already Done');
                }
              }
            },i);

          })(i*100, i);
        }
      }
    }
};

// Create List Item
function createListItem(name) {
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.innerHTML = name;
  return li;
}

function shuffle(arr) {
  let shuffleArr = [...arr];
  
    for(let i = shuffleArr.length - 1; i > 0; i--){
      let rand = Math.floor(Math.random() * (i+1));
      let temp = shuffleArr[rand];
      shuffleArr[rand] = shuffleArr[i];
      shuffleArr[i] = temp;

    }

    return shuffleArr;
}

