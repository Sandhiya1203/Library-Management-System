function signIn(){
    let oauth2endpoint="https://accounts.google.com/o/oauth2/v2/auth"
    let form=document.createElement('form')
    form.setAttribute('method','GET')
    form.setAttribute("action",oauth2endpoint)

let params={
    "client_id":"371368810797-99b5hg0n94nscpeubssbgp0ji7o90pl8.apps.googleusercontent.com",
    "redirect_url":"http://localhost",
    "response_type":"token",
    "scope":"http://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.readonly",
    "include_granted_scopes":'true',
    "state":"pass-through-value"
}
for(var p in params){
    let input=document.createElement('input')
    input.setAttribute('type','hidden')
    input.setAttribute('name',p)
    input.setAttribute('value',params[p])
    form.appendChild(input)
}
document.body.appendChild(form)
form.submit()

}