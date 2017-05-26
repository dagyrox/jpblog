import { BrowserModule } from '@angular/platform-browser';
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BannerComponent } from './banner/banner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentComponent } from './content/content.component';
import { ContentService } from './content/content.service';
import { PostComponent } from './post/post.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { NewPostComponent } from './new-post/new-post.component';
import { NewPostService } from './new-post/new-post.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BannerComponent,
    NavBarComponent,
    SideBarComponent,
    ContentComponent,
    PostComponent,
    ContactModalComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [
    ContentService,
    NewPostService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ContactModalComponent]
})
export class AppModule { }
