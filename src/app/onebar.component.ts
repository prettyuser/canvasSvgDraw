// Import the core angular services.
import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import * as SVG from 'svg.js';
import { FontData } from 'svg.js';

@Component({
  selector: 'app-one-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./onebar.component.css'],
  template: `
    <div id='graph_one'></div>
        <svg width="500px" height="300px">

          <rect class="#" width="400" height="40" x="40" y="20" stroke="black" stroke-width="1" fill="#68ba31"/>
          <rect class="#" width="400" height="40" x="40" y="220" stroke="black" stroke-width="0.5" fill="lightgrey"/>
          <rect class="#" width="400" height="200" x="40" y="50" stroke="black" stroke-width="1" fill="white"/>
          <rect class="#" width="400" height="40" x="40" y="220" stroke="black" stroke-width="1" fill="#f7f7f7"/>

          <rect class="#" width="360" height="130" x="60" y="70" rx="5" stroke="black" stroke-width="1" fill="white"/>
          <rect class="#" width="360" height="40" x="60" y="70" rx="2" stroke="black" stroke-width="1" fill="#f7f7f7"/>
          <rect class="#" width="140" height="50" x="160" y="130" rx="5" stroke="green" stroke-width="1" fill="#27a844"/>
          <rect class="#" width="40" height="24" x="270" y="23" rx="10" stroke="green" stroke-width="1" fill="#f8c311"/>

          <text x="50" y="245" font-size="14" font-family="Arial">Pipeline Id:</text>
          <text x="120" y="245" font-size="14" font-family="Arial" stroke="black" stroke-width="0.4">10</text>
          <text x="155" y="245" font-size="14" font-family="Arial">Version Id:</text>
          <text x="222" y="245" font-family="Arial" font-size="14" stroke="black" stroke-width="0.4">0</text>
          <text x="350" y="245" font-size="14" font-family="Arial">Instances:</text>
          <text x="415" y="245" font-size="14" font-family="Arial" stroke="black" stroke-width="0.4">0</text>

          <text x="250" y="95" fill="black">cache</text>

          <text x="280" y="40" font-size="15" font-family="Arial" stroke="black" stroke-width="0.5">pl2</text>
          <text x="90" y="42" fill="white" font-size="16" stroke="white" stroke-width="1">1</text>
          <text x="365" y="42" fill="white" font-size="16" stroke="white" stroke-width="1">898,469</text>

          <path class="arrowup" d="M442.627,185.388L265.083,7.844C260.019,2.78,253.263,0,245.915,0c-7.204,0-13.956,2.78-19.02,7.844L49.347,
          185.388c-10.488,10.492-10.488,27.568,0,38.052l16.12,16.128c5.064,5.06,11.82,7.844,19.028,7.844c7.204,0,14.192-2.784,19.252-7.844
          l103.808-103.584v329.084c0,14.832,11.616,26.932,26.448,26.932h22.8c14.832,0,27.624-12.1,27.624-26.932V134.816l104.396,104.752
          c5.06,5.06,11.636,7.844,18.844,7.844s13.864-2.784,18.932-7.844l16.072-16.128C453.163,212.952,453.123,195.88,442.627,185.388z"
          />

          <path class="arrowdown" d="M442.668,268.536l-16.116-16.12c-5.06-5.068-11.824-7.872-19.024-7.872c-7.208,0-14.584,2.804-19.644,7.872
          L283.688,355.992V26.924C283.688,12.084,272.856,0,258.02,0h-22.804c-14.832,0-28.404,12.084-28.404,26.924v330.24
          L102.824,252.416c-5.068-5.068-11.444-7.872-18.652-7.872c-7.2,0-13.776,2.804-18.84,7.872l-16.028,16.12
          c-10.488,10.492-10.444,27.56,0.044,38.052l177.576,177.556c5.056,5.056,11.84,7.856,19.1,7.856h0.076
          c7.204,0,13.972-2.8,19.028-7.856l177.54-177.552C453.164,296.104,453.164,279.028,442.668,268.536z"/>

          <path class="checkmark" d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>

        </svg>
  `
})
export class OneBarComponent implements OnChanges, OnInit {

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {

    const width = 700;
    const height = 700;
    const mainRectWidth = 600;
    const mainRectHeight = 350;

    const draw = SVG('graph_one').size(width, height);

    const mainRect = draw.rect(mainRectWidth, mainRectHeight).fill('#fffffa').stroke( {color: '#000000'});
    const mainTitleRect = mainRect.clone().height(50).fill('rgba(255,41,41,0.91)');
    const greyRect = mainTitleRect.clone().y(300).fill('rgba(13,13,13,0.1)');
    const mainArrD = draw.image('assets/img/arr_down.png').x(10).y(13).scale(0.13);
    const mainArrDTxt = draw.text('902,111')
      .font({size: 25, anchor: 'start', family: 'Arial', fill: 'rgb(255,255,255)'} as FontData)
      .x(mainArrD.x() + 35).y(10);
    const mainTxt = draw.text('EADService')
      .font({size: 25, anchor: 'middle', family: 'Arial', fill: 'rgb(255,255,255)'} as FontData)
      .x( mainRect.width() / 2).y(10);
    const mainIcon = draw.image('assets/img/rem_black.png').x(mainTxt.x() - (mainTxt.bbox().width / 2) - 35).y(9).scale(0.06, 0.06);
    const yellowRect = draw.rect(50, 30)
      .radius(10, 10).x(mainTxt.x() + (mainTxt.bbox().width / 2) + 5).y(10).fill('rgba(238,218,44,0.7)');
    const yellowTxt = draw.text('pl2')
      .font({size: 20, anchor: 'start', family: 'Arial', fill: 'rgb(0,0,0)'} as FontData)
      .x(yellowRect.x() + 10).y(15);
    const mainArrU = draw.image('assets/img/arr_up.png').x(mainRect.bbox().width - 155).y(13).scale(0.13);
    const mainArrUTxt = draw.text('126,873')
      .font({size: 25, anchor: 'start', family: 'Arial', fill: 'rgb(255,255,255)'} as FontData)
      .x(mainArrU.x() + 30).y(10);
    const pipelineTxt = draw.text('Pipeline Id: 23')
      .font({size: 20, anchor: 'start', family: 'Arial', fill: 'rgb(0,0,0)'} as FontData)
      .x(mainRect.x() + 10).y(315);
    const verTxt = draw.text('Version Id: 1')
      .font({size: 20, anchor: 'start', family: 'Arial', fill: 'rgb(0,0,0)'} as FontData)
      .x(pipelineTxt.bbox().x2 + 30).y(315);
    const instTxt = draw.text('Instances: 7')
      .font({size: 20, anchor: 'start', family: 'Arial', fill: 'rgb(0,0,0)'} as FontData)
      .x(mainRect.bbox().x2 - 150).y(315);
  }
}
