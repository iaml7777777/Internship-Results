import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  activeTimelineIndex = 0;
  currentImageIndex = 0;

  timelines = [
    {
      period: '2025/07 - 2025/08',
      title: '基礎培訓與技術養成',
      imageUrls: [
        'assets/img/培訓1.jpg',
        'assets/img/培訓2.jpg'
      ],
      description: '這兩個月主要透過觀看線上影片與內部教材，鞏固前端開發的基礎知識，熟悉 Angular 框架與公司內部開發規範，為之後的專案打下基礎。',
      achievements: [
        '完成 Angular 核心概念學習',
        '熟悉版控流程與專案架構'
      ],
      techStack: ['Angular', 'TypeScript', 'HTML/CSS']
    },
    {
      period: '2025/09 - 2026/01',
      title: 'AI智管家',
      imageUrls: [
        'assets/img/智管家1.jpg',
        'assets/img/智管家2.jpg',
        'assets/img/智管家3.jpg'
      ],
      description: '正式進入專案開發，負責「AI智管家」的前端實作。',
      achievements: [
        '完成多個頁面的前端畫面與邏輯實作',
        '與後端頻繁接洽 API 串接，確保資料流暢呈現',
        '優化部分介面，提升使用者體驗',
        '撰寫LUA/SQL腳本，協助資料收集'
      ],
      techStack: ['Angular', 'RxJS', 'RESTful API']
    },
    {
      period: '2026/02 - 至今',
      title: '裝配助理',
      imageUrls: [
        'assets/img/裝配助理.jpg',
        'assets/img/裝配助理2.jpg',
        'assets/img/裝配助理3.jpg',
        'assets/img/裝配助理4.jpg'
      ],
      description: '參與裝配助理專案，針對製造裝配線的需求，打造即時的輔助系統。',
      achievements: [
        '前後端介面與邏輯實作'

      ],
      techStack: ['Angular', 'State Management']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectTimeline(index: number): void {
    if (this.activeTimelineIndex !== index) {
      this.activeTimelineIndex = index;
      this.currentImageIndex = 0; // 重置走馬燈
    }
  }

  nextImage(): void {
    const len = this.timelines[this.activeTimelineIndex].imageUrls.length;
    if (len > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % len;
    }
  }

  prevImage(): void {
    const len = this.timelines[this.activeTimelineIndex].imageUrls.length;
    if (len > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + len) % len;
    }
  }

  setCurrentImage(idx: number): void {
    this.currentImageIndex = idx;
  }

  isImageModalOpen = false;
  selectedImageUrl = '';

  openImageModal(url: string): void {
    this.selectedImageUrl = url;
    this.isImageModalOpen = true;
  }

  closeImageModal(): void {
    this.isImageModalOpen = false;
  }
}
