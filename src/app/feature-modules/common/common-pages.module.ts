import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CommonPagesRoutingModule } from "./common-pages-routing.module";
import { ErrorComponent } from "./pages/error/error.component";
import { AboutComponent } from "./pages/about/about.component";

@NgModule({
  declarations: [ErrorComponent, AboutComponent],
  imports: [CommonModule, CommonPagesRoutingModule],
})
export class CommonPagesModule {}
