import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  selectedCity: any;
  selectedCityIds: string[] | any;
  selectedCityName = 'Vilnius';
  selectedCityId: number | any;
  selectedUserIds: number[] | any;


  files: File[] = [];
  public category = [
    { id: 1, name: 'Life Style' },
    { id: 2, name: 'Travel' },
  ];
  public selectedCategory: string[] = [];
  editor: any = ClassicEditor;
  public config = {
    toolbar: [
      "undo",
      "redo",
      "|",
      "heading",
      "fontFamily",
      "fontSize",
      "|",
      "bold",
      "italic",
      "underline",
      "fontColor",
      "fontBackgroundColor",
      "highlight",
      "|",
      "link",
      "CKFinder",
      "imageUpload",
      "mediaEmbed",
      "|",
      "alignment",
      "bulletedList",
      "numberedList",
      "|",
      "indent",
      "outdent",
      "|",
      "insertTable",
      "blockQuote",
      "specialCharacters",
    ],
    language: "id",
    image: {
      toolbar: ["imageTextAlternative", "imageStyle:full", "imageStyle:side"],
    },
  }

  cities2 = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' },
  ];
  cities4: { id: number; name: string }[] | any;

  constructor() {
    this.create10kCities();
  }

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  ngOnInit(): void {}
  addCustomUser = (term: any) => ({ id: term, name: term });
  private create10kCities() {
    this.cities4 = Array.from({ length: 10000 }, (value, key) => key).map(
      (val) => ({
        id: val,
        name: `city ${val}`,
      })
    );
  }
}
