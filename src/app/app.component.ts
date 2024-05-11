import { Component, ContentChild, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NG-Content__Child';
  @ViewChild(DemoComponent) demoComponent!: DemoComponent;
  @ContentChild('increase') increaseText!: ElementRef;
  @ViewChild('myElment') myElement!: ElementRef;



  
  textIncrement: number = 0;

  inputVal: string[] = ['Hello', 'Hi There'];
  constructor(private renderer: Renderer2, private element: ElementRef){
    // console.log('App Component constructor called')
    // console.log(this.templeParagraph)
  }

  onBtnClicked(inputEl: HTMLInputElement){
    this.inputVal.push(inputEl.value);
    var newPara = this.renderer.createElement('button');
    this.renderer.setProperty(newPara, 'innerHTML', 'Delete');
    this.renderer.appendChild(this.demoComponent.message, newPara);
  }

  toggleText(temple: HTMLElement) {
    this.demoComponent.isTextVisible = !this.demoComponent.isTextVisible;
  }
  increaseNumber(){
    // console.log(this.increaseText);
    this.textIncrement++
 
   }

  ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    // this.textIncrement++;
    this.increaseNumber();
  }
//  toggle(temple: HTMLInputElement){
  
//  }

ngAfterViewInit() {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  this.myElement.nativeElement.textContent = 'ngAfterViewInit is active'
}
}
