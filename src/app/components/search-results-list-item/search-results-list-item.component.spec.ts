import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsListItemComponent } from './search-results-list-item.component';

describe('SearchResultsListItemComponent', () => {
  let component: SearchResultsListItemComponent;
  let fixture: ComponentFixture<SearchResultsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultsListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
