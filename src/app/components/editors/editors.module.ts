import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EditorsRoutingModule } from "./editors-routing.module";
import { KolkovEditorsComponent } from "./kolkov-editors/kolkov-editors.component";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { SharedModule } from "src/app/shared/shared.module";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { FormsModule } from "@angular/forms";
import { CkEditorsComponent } from "./ck-editors/ck-editors.component";

@NgModule({
  declarations: [KolkovEditorsComponent, CkEditorsComponent],
  imports: [
    CommonModule,
    EditorsRoutingModule,
    CKEditorModule,
    SharedModule,
    AngularEditorModule,
    FormsModule,
  ],
})
export class EditorsModule {}
