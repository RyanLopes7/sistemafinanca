function cadastrar(){
   const email=document.querySelector('#email').value 
   const senha = document.querySelector('#password').value
   const csenha = document.querySelector('#cpassword').value



if(senha.length < 6){
console.log('a senha tem que ter 6 caracteres')


}else{
   
   if(senha== csenha  ){
console.log('as senhas são iguais')

}else{
console.log('as senhas são diferentes')
}
}






}