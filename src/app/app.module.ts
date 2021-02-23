import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgxQRCodeModule } from "@techiediaries/ngx-qrcode";
import { AppComponent } from "./app.component";
@NgModule({
  imports: [BrowserModule, FormsModule, NgxQRCodeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
