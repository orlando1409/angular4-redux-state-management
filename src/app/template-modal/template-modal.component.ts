import {
  Component,
  ChangeDetectionStrategy,
  Output,
  ViewChild,
  EventEmitter,
  Input,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'template-modal',
  templateUrl: 'template-modal.component.html'
})
export class TemplateModalComponent {

  private modalName = 'templateFormModal';
  private modalRef: NgbModalRef;

  @ViewChild('content') _templateModal: ElementRef;

  @Input() set modalState(_modalState: any) {
    if (_modalState === this.modalName) {
      this.openModal()
    } else if (this.modalRef) {
      this.closeModal();
    }
  }

  @Output() onCloseModal = new EventEmitter<any>();

  constructor(private modalService: NgbModal, private cdRef: ChangeDetectorRef) {}

  openModal() {
    window.setTimeout(() =>
      this.modalRef = this.modalService.open(this._templateModal, {backdrop: 'static' , keyboard: false, size: 'sm'})
    );
  }

  closeModal()  {
    this.modalRef.close();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
}
