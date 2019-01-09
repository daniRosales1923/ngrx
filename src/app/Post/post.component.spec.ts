import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {PostComponent}  from '../Post/post.component';

describe('PostComponent', ()=>{
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations: [PostComponent]
    })
    .compileComponents();
  }));
  
  beforeEach(()=>{
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
 

  it('should contain "hello world!"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    expect(bannerElement.textContent).toContain('hola mundo');
  });

  it('should have <p> with "escribiendo un parrafo"', ()=>{
    const bannerElement: HTMLElement = fixture.nativeElement;
    const p = bannerElement.querySelector('p');
    expect(p.textContent).toEqual('Hi carolina')
  });

})



