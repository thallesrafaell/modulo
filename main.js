document.addEventListener('DOMContentLoaded', function () {
    const avatar = document.getElementById('avatar')
    const nome = document.getElementById('nome')
    const usuario = document.getElementById('usuario')
    const repositorios = document.getElementById('repositorios')
    const seguidores = document.getElementById('seguidores')
    const seguindo = document.getElementById('seguindo')
    const linkPerfil = document.getElementById('link-perfil')
    const endpoint = 'https://api.github.com/users/thallesrafaell'

    fetch(endpoint)
    .then(function (resposta) {
        return resposta.json()
    })
    .then(function (json) {
        const apitAvatar = json.avatar_url
        const apiNome = json.name
        const apiUsuario = json.login
        const apiRepositorios = json.public_repos
        const apiSeguidores = json.followers
        const apiSeguindo =json.following
        const apiLinkPerfil = json.html_url

        avatar.setAttribute('src', apitAvatar)
        nome.innerText = apiNome
        usuario.innerText =  `@${apiUsuario}`
        repositorios.innerText = apiRepositorios
        seguidores.innerText = apiSeguidores
        seguindo.innerText = apiSeguindo
        linkPerfil.setAttribute('href', apiLinkPerfil)
    })
    .catch(function(erro){
        alert("Ocorreu um Erro")
    })
})
