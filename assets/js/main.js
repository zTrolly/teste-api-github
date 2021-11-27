const URL = "https://api.github.com/users/ztrolly";
const container = document.getElementById("container");
var profileCard,profile,card;

    function requestPerfil(URL){
      fetch(URL)
      .then(response => response.json())
      .then(data => {
        profile = data;
      })
      .catch(err => console.log(err));
   }

    function criandoPerfil(){
      card = `
        <div class="profile_picture">
          <img src="${profile.avatar_url}">
        </div>
        <div class="profile_info">
          <p>${profile.login}</p>
        </div>
      `
      return card
    }


function startApp(URL){
  requestPerfil(URL);
  setTimeout(function () {
    container.innerHTML = criandoPerfil();
  }, 1000);
}
startApp(URL);