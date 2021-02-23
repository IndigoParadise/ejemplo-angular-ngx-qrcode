import { Component, ElementRef, VERSION } from "@angular/core";
import {
  NgxQrcodeElementTypes,
  NgxQrcodeErrorCorrectionLevels
} from "@techiediaries/ngx-qrcode";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  saludo = "Ejemplo de como hacer un codigo QR con QR Code Generator";
  tipoElemento = NgxQrcodeElementTypes.CANVAS;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  valor: string = "www.refactorizando.blog";
}
