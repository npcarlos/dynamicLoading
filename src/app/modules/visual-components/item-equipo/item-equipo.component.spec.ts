import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemEquipoComponent } from './item-equipo.component';

describe('ItemEquipoComponent', () => {
  let component: ItemEquipoComponent;
  let fixture: ComponentFixture<ItemEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemEquipoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
