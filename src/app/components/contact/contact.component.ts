import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

// import * as $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider!: number;
  public anchuraToSlider: any;
  public captions!: boolean;
  public autor: any;
  @ViewChild('textos', {static: true}) textos!: ElementRef;

  constructor() { 
    this.captions = true;
  }

  ngOnInit(): void {
    var opcion_clasica = document.querySelector('#texto')?.innerHTML;
    alert(this.textos.nativeElement.textContent);
  }

  cargarSlider(){
    // this.anchuraToSlider = null;
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider = false;
  }

  getAutor(event:any){
    this.autor = event;
  }
}
