import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-toolbar',
    template: '<p>Mock Toolbar</p>'
})
export class MockToolbarComponent { }

@Component({
    selector: 'mat-sidenav-container',
    template: '<p>Mock Nav container</p>'
})
export class MockSidenavContainerComponent { }

@Component({
    selector: 'router-outlet',
    template: '<p>Mock router outlet</p>'
})
export class MockRouterOutletComponent { }

@Component({
    selector: 'mat-toolbar',
    template: '<p>Mock mat toolba</p>'
})
export class MockMatToolbarComponent { }

@Component({
    selector: 'mat-toolbar-row',
    template: '<p>Mock mat toolbar</p>'
})
export class MockMatToolbarRowComponent { }

@Component({
    selector: 'mat-icon',
    template: '<p>Mock mat icon</p>'
})
export class MockMatIconComponent { }

@Component({
    selector: 'mat-button-toggle-group',
    template: '<p>Mock button toggle group icon</p>',
    exportAs: 'matButtonToggleGroup'
})
export class MockMatButtonToggleGroupComponent {
    @Input() value: string;
}

@Component({
    selector: 'mat-button-toggle',
    template: '<p>Mock button toggle</p>'
})
export class MockMatButtonToggleComponent {
    @Input() value: string;
}


