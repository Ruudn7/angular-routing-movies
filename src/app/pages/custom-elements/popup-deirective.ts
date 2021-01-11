import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
    selector: '[appPopup]'
})

export class PopupDirective implements OnInit {
    @Input() appPopup = 1000;
    @Input() appPopupColor = 'pink';

    constructor(
        private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<any>
    ) {}

    ngOnInit() {
        setTimeout(() => {
            const emmbeddedView = this.viewContainer.createEmbeddedView(this.templateRef);
            emmbeddedView.rootNodes[0].style['background-color'] = this.appPopupColor;
        }, this.appPopup)
    }
}