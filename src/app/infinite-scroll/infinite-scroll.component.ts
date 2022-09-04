import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../network/network.service';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit {

  constructor(private networkService:NetworkService) { }
  
  allPhotos = [];  
  sum = 10;  
  throttle = 300;  
  scrollDistance = 1;  
  scrollUpDistance = 2;  
  direction = "";  
  modalOpen = false;  
  tempPhotos= [];  
  start: number = 0;  
  
  ngOnInit(): void {
    this.getPhoto();
  }
  
  getPhoto() {
    this.networkService.getPhoto('bikes', this.sum).subscribe((response: any) => {   
      this.tempPhotos = response.photos;  //1
      this.addphotos(this.start, this.sum);  // 2
    }, (error) => {  
      console.log(error);  
    })  
  }
  addphotos(index: number, sum: number) {
    for (let i = index; i < sum; i++) {  
      this.allPhotos.push(this.tempPhotos[i]);  
     } 
   
  }
  onScrollDown(){
    this.start = this.sum;  
    this.sum += 20;  
    this.getPhoto();  
    this.direction = "down";  
   }


}
