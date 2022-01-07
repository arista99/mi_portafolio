import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
declare const $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura!: number;
  @Input('etiquetas') captions!: boolean;
  @Output() conseguirAutor = new EventEmitter();

  public autor:any;
  constructor() {
    this.autor = {
      nombre: "Kevin Torres",
      correo: "torres.arista99@gmail.com"
    };
  }

  ngOnInit(): void {
    // $('#logo').on('click', (e) => {
    //   e.preventDefault();
    //   $('header')
    //     .css('background', 'green')
    //     .css('height', '50px');
    // });
    

  //   (<any>$(".galeria")).bxSlider({
  //     mode: 'fade',
  //     captions: true,
  //     slideWith: this.anchura
  // });
  $('.galeria').bxSlider({
    auto: true,
    mode: 'fade',
    captions: this.captions,
    slideWidth: this.anchura
  });
  }

  lanzar(event:any){
    this.conseguirAutor.emit(this.autor);
  }

}
