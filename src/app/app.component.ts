import { Component,OnInit } from '@angular/core';
declare const $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  formulario:any;
  respuesta:any;

  ngOnInit(){
    this.init();
  }

  init(){
    this.formulario = {
      nombre:null,
      correo:null,
      preguntas: [
        {
          nombre: "Prefiero hacer un mapa que explicarle a alguien como tiene que llegar.",
          respuesta:null
        },{
          nombre: "Si estoy enojado(a) o contento (a) generalmente sé exactamente por qué.",
          respuesta:null
        },{
          nombre: "Sé tocar (o antes sabía tocar) un instrumento musical.",
          respuesta:null
        },{
          nombre: "Asocio la música con mis estados de ánimo.",
          respuesta:null
        },{
          nombre: "Puedo sumar o multiplicar mentalmente con mucha rapidez.",
          respuesta:null
        },{
          nombre: "Puedo ayudar a un amigo a manejar sus sentimientos porque yo lo pude hacer antes en relación a sentimientos parecidos.",
          respuesta:null
        },{
          nombre: "Me gusta trabajar con calculadoras y computadores.",
          respuesta:null
        },{
          nombre: "Aprendo rápido a bailar un ritmo nuevo",
          respuesta:null
        },{
          nombre: "No me es difícil decir lo que pienso en el curso de una discusión o debate.",
          respuesta:null
        },{
          nombre: "Disfruto de una buena charla, discurso o sermón.",
          respuesta:null
        },{
          nombre: "Siempre distingo el norte del sur, esté donde esté.",
          respuesta:null
        },{
          nombre: "Me gusta reunir grupos de personas en una fiesta o en un evento especial.",
          respuesta:null
        },{
          nombre: "La vida me parece vacía sin música.",
          respuesta:null
        },{
          nombre: "Siempre entiendo los gráficos que vienen en las instrucciones de equipos o instrumentos.",
          respuesta:null
        },{
          nombre: "Me gusta hacer rompecabezas y entretenerme con juegos electrónicos.",
          respuesta:null
        },{
          nombre: "Me fue fácil aprender a andar en bicicleta (o patines).",
          respuesta:null
        },{
          nombre: "Me enojo cuando oigo una discusión o una afirmación que parece ilógica.",
          respuesta:null
        },{
          nombre: "Soy capaz de convencer a otros que sigan mis planes.",
          respuesta:null
        },{
          nombre: "Tengo buen sentido de equilibrio y coordinación.",
          respuesta:null
        },{
          nombre: "Con frecuencia veo configuraciones y relaciones entre números con más rapidez y facilidad que otros.",
          respuesta:null
        },{
          nombre: "Me gusta construir modelos ( o hacer esculturas).",
          respuesta:null
        },{
          nombre: "Tengo agudeza para encontrar el significado de las palabras.",
          respuesta:null
        },{
          nombre: "Puedo mirar un objeto de una manera y con la misma facilidad verlo.",
          respuesta:null
        },{
          nombre: "Con frecuencia hago la conexión entre una pieza de música y algún evento de mi vida.",
          respuesta:null
        },{
          nombre: "Me gusta trabajar con números y figuras.",
          respuesta:null
        },{
          nombre: "Me gusta sentarme silenciosamente y reflexionar sobre mis sentimientos íntimos.",
          respuesta:null
        },{
          nombre: "Con sólo mirar la forma de construcciones y estructuras me siento a gusto.",
          respuesta:null
        },{
          nombre: "Me gusta tararear, silbar y cantar en la ducha o cuando estoy solo(a).",
          respuesta:null
        },{
          nombre: "Soy bueno(a) para el atletismo.",
          respuesta:null
        },{
          nombre: "Me gusta escribir cartas detalladas a mis amigos.",
          respuesta:null
        },{
          nombre: "Generalmente me doy cuenta de la expresión que tengo en la cara.",
          respuesta:null
        },{
          nombre: "Me doy cuenta de las expresiones en la cara de otras personas.",
          respuesta:null
        },{
          nombre: "Me mantengo 'en contacto' con mis estados de ánimo. No me cuesta identificarlos.",
          respuesta:null
        },{
          nombre: "Me doy cuenta de los estados de ánimo de otros.",
          respuesta:null
        },{
          nombre: "Me doy cuenta bastante bien de lo que otros piensan de mí.",
          respuesta:null
        },
      ]
    };

  this.respuesta=[
      {
        nombre: "Inteligencia Verbal",
        posiciones:[9,10,17,22,30],
        resultado:0
      },{
        nombre: "Inteligencia Lógico-matemática",
        posiciones:[5,7,15,20,25],
        resultado:0
      },{
        nombre: "Inteligencia Visual espacial",
        posiciones:[1,11,14,23,27],
        resultado:0
      },{
        nombre: "Inteligencia kinestesica-corporal",
        posiciones:[8,16,19,21,29],
        resultado:0
      },{
        nombre: "Inteligencia Musical-rítmica",
        posiciones:[3,4,13,24,28],
        resultado:0
      },{
        nombre: "Inteligencia Intrapersonal",
        posiciones:[2,6,26,31,33],
        resultado:0
      },{
        nombre: "Inteligencia Interpersonal",
        posiciones:[12,18,32,34,35],
        resultado:0
      }
    ];

  }
  onSubmit(){

    for(let inteligencia of this.respuesta){
      for (let index of inteligencia.posiciones) {
        inteligencia.resultado = inteligencia.resultado + Number(this.formulario.preguntas[index-1].respuesta);
      }
    }
    console.log("respuesta",this.respuesta);
    $('#resultadoModal').modal('toggle')
  }
}
