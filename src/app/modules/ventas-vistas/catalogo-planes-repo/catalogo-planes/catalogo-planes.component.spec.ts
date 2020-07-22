import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoPlanesComponent } from './catalogo-planes.component';

describe('CatalogoPlanesComponent', () => {
  let component: CatalogoPlanesComponent;
  let fixture: ComponentFixture<CatalogoPlanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoPlanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
