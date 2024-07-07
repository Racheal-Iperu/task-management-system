import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleUpgradeComponent } from './role-upgrade.component';

describe('RoleUpgradeComponent', () => {
  let component: RoleUpgradeComponent;
  let fixture: ComponentFixture<RoleUpgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleUpgradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
