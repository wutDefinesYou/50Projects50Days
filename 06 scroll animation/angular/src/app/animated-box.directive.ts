import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[animatedBox]',
  standalone: true,
})
export class AnimatedBoxDirective {
  constructor(private elementRef: ElementRef) {}

  @HostBinding('class.show') isShow: boolean = false

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (
      this.elementRef.nativeElement.getBoundingClientRect().top <=
      window.innerHeight * 0.75
    )
      this.isShow = true
    else this.isShow = false
  }
}
