import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPessoalComponent } from './info-pessoal.component';

describe('InfoPessoalComponent', () => {
  let component: InfoPessoalComponent;
  let fixture: ComponentFixture<InfoPessoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPessoalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPessoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
