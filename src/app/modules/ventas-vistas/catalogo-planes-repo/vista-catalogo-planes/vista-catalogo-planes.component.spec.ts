import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCatalogoPlanesComponent } from './vista-catalogo-planes.component';

describe('VistaCatalogoPlanesComponent', () => {
  let component: VistaCatalogoPlanesComponent;
  let fixture: ComponentFixture<VistaCatalogoPlanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VistaCatalogoPlanesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCatalogoPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
