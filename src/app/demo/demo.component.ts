import { Component, Input, OnChanges, SimpleChange, SimpleChanges, OnInit, ViewChild, ElementRef, DoCheck, AfterContentInit, ContentChild, AfterContentChecked, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit{
 @Input() message!: string[];
 @Input() newMessage!: any;
 @ViewChild('temp') tempPara!: ElementRef;
 @ViewChild('temple') templePara!: ElementRef;
 @ContentChild('temple') templeParagraph!: ElementRef;
 @ContentChild('increase') increaseText!: ElementRef;
 @ViewChild('myElment') myElement!: ElementRef;

 constructor(){
  // console.log(this.message)
 }

 isTextVisible: boolean = true;
 number: any;
 numberINT: any;
 ngOnChanges(changes: SimpleChanges){
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  
  console.log('ngOnChages Hook Called');
  console.log(changes);

 }

 ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  console.log('ngOnInit Hook Called');
  // console.log(this.tempPara.nativeElement.innerHTML);
 }

 ngDoCheck() {
  console.log("ngDoCheck is called");
  
  // console.log(this.templeParagraph)

 }

 ngAfterContentInit(){
  //Called after ngOnInit when the component's or directive's content has been initialized.
  //Add 'implements AfterContentInit' to the class.
  console.log("ngAfterContentInit is Called");
  // console.log(this.templeParagraph.nativeElement)
 }

 ngAfterContentChecked() {
  //Called after every check of the component's or directive's content.
  //Add 'implements AfterContentChecked' to the class.
  console.log("ngAfterContentChecked is Called");
  const projectedContent = this.templeParagraph.nativeElement;
    if(projectedContent){
      projectedContent.textContent = this.isTextVisible ? 'This is the projected content' : 'This is the new projected content';
    };
  // this.number = this.increaseText.nativeElement;
  // this.numberINT = parseInt(this.number);
 }

 ngAfterViewInit() {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  console.log('AfterViewInit is called')
  console.log(this.tempPara.nativeElement);

 }
}

// Component Initialize