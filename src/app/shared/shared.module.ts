import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UnitPipe } from "./pipes/unit.pipe";

@NgModule({
  declarations: [UnitPipe],
  exports: [UnitPipe],
  imports: [CommonModule],
})
export class SharedModule {}
