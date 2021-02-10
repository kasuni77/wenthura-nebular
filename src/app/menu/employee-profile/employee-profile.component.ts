import {Component, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {EmpAdds} from '../../model/emp-adds';
import {EventEmitter} from 'events';
import {EmpAddsService} from '../../services/emp-adds.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd';
import {NbWindowService} from '@nebular/theme';


@Component({
  selector: 'app-vendor-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})

export class EmployeeProfileComponent implements OnInit{
  loading = false;
  avatarUrl?: string;
  employee: EmpAdds = new EmpAdds();
  emp: EmpAdds = new EmpAdds();
  books: Array<EmpAdds>;
  booksRecieved: Array<EmpAdds>;
  action: string;
  aid: number;
  selectedBook: EmpAdds;
  @ViewChild('Updateform', {read: TemplateRef}) escCloseTemplate: TemplateRef<HTMLElement>;
  @Input()
  book: EmpAdds;

  @Output()
  bookAddedEvent = new EventEmitter();
  private selectedFile;
  imgURL: any;

  constructor(private httpClientService: EmpAddsService,
              private activedRoute: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient,
              private msg: NzMessageService,
              private windowService: NbWindowService) { }

  ngOnInit(): void {
    this.refreshData();
    this.toggleLoadingAnimation();
  }
  // tslint:disable-next-line:typedef
  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }


  // tslint:disable-next-line:typedef
  saveBook() {
    if (this.employee.id == null) {
      const uploadData = new FormData();
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.selectedFile.imageName = this.selectedFile.name;

      this.httpClient.post('http://localhost:8080/springboot-crud-rest/emp/upload', uploadData, {observe: 'response'})
        .subscribe((response) => {
            if (response.status === 200) {
              this.httpClientService.addEmpEvent(this.employee).subscribe(
                res => {
                  this.employee = new EmpAdds();
                  location.reload();
                }
              );
              console.log('Image uploaded successfully');
            } else {
              console.log('Image not uploaded successfully');
            }
          }
        );
    } else {
      this.httpClientService.updateEmpEvent(this.employee).subscribe(
        (book) => {
          location.reload();
          console.log('uploaded successfully');
        }
      );
    }
  }

  // tslint:disable-next-line:typedef
  refreshData() {
    this.httpClientService.getEmpEvent().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        // get the url parameter named action. this can either be add or view.
        this.action = params['action'];
        // get the parameter id. this will be the id of the book whose details
        // are to be displayed when action is view.
        const id = params['id'];
        // if id exists, convert it to integer and then retrive the book from
        // the books array
        if (id) {
          this.selectedBook = this.books.find(book => {
            return book.id === +id;
          });
        }
      }
    );
  }

// we will be taking the books response returned from the database
// and we will be adding the retrieved
  // tslint:disable-next-line:typedef
  handleSuccessfulResponse(response) {
    this.books = new Array<EmpAdds>();

    this.booksRecieved = response;
    for (const book of this.booksRecieved) {

      const bookwithRetrievedImageField = new EmpAdds();
      bookwithRetrievedImageField.id = book.id;
      bookwithRetrievedImageField.name = book.name;
      // populate retrieved image field so that book image can be displayed
      bookwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + book.picByte;
      bookwithRetrievedImageField.author = book.author;
      bookwithRetrievedImageField.picByte = book.picByte;
      this.books.push(bookwithRetrievedImageField);
    }
  }

  // tslint:disable-next-line:typedef
  deleteBook(event) {
    this.aid = event;
    this.httpClientService.deleteEmpEvent(this.aid).subscribe(
      res => {
        location.reload();
      },
      error => {
        alert('An error occured during process!');
      }
    );
  }

  // tslint:disable-next-line:typedef
  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }
  // addBook() {
  //   this.selectedBook = new Vendor();
  //   this.router.navigate(['menu', 'adm-vendor'], { queryParams: { action: 'add' } });
  // }
  //
  // viewBook(id: number) {
  //   this.router.navigate(['menu/adm-vendor/reg-ven','view-book'], { queryParams: { id, action: 'view' } });
  //   console.log(id);
  // }
  // tslint:disable-next-line:typedef
  openWindowForm(event) {
    this.windowService.open(this.escCloseTemplate, {title: 'Update', hasBackdrop: true},);
    this.emp = new EmpAdds();
    this.emp = event;

    console.log(event);
    console.log(this.emp);
  }
  // tslint:disable-next-line:typedef
  editBook(event) {
    this.emp = new EmpAdds();
    this.emp = event;

    console.log(this.emp);
    if (this.emp.id == null) {
      const uploadData = new FormData();
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.selectedFile.imageName = this.selectedFile.name;

      this.httpClient.post('http://localhost:8080/springboot-crud-rest/emp/upload', uploadData, {observe: 'response'})
        .subscribe((response) => {
            if (response.status === 200) {
              this.httpClientService.addEmpEvent(this.emp).subscribe(
                res => {
                  this.emp = new EmpAdds();
                  location.reload();
                }
              );
              console.log('Image uploaded successfully');
            } else {
              console.log('Image not uploaded successfully');
            }
          }
        );
    } else {
      this.httpClientService.updateEmpEvent(this.emp).subscribe(
        (book) => {
          location.reload();
          console.log('uploaded successfully');
        }
      );
    }
  }
}
