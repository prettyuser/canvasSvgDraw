// Import the core angular services.
import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component } from '@angular/core';
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-two-bars',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./twobars.component.css'],
  template:
    `
    <svg width="500px" height="300px" viewBox="0 0 500 300">

      <rect class="#" width="400" height="40" x="40" y="20" stroke="black" stroke-width="1" fill="#f5403f"/>
      <rect class="#" width="400" height="40" x="40" y="220" stroke="black" stroke-width="0.5" fill="lightgrey"/>
      <rect class="#" width="400" height="200" x="40" y="50" stroke="black" stroke-width="1" fill="white"/>
      <rect class="#" width="400" height="40" x="40" y="220" stroke="black" stroke-width="1" fill="#f7f7f7"/>

      <rect class="#" width="360" height="150" x="60" y="60" rx="5" stroke="black" stroke-width="1" fill="white"/>
      <rect class="#" width="360" height="30" x="60" y="180" rx="2" stroke="black" stroke-width="1" fill="#68ba31"/>
      <rect class="#" width="40" height="70" x="160" y="100" rx="5" stroke="green" stroke-width="1" fill="#27a844"/>
      <rect class="#" width="40" height="70" x="240" y="100" rx="5" stroke="green" stroke-width="1" fill="#27a844"/>
      <rect class="#" width="40" height="24" x="270" y="23" rx="10" stroke="green" stroke-width="1" fill="#f8c311"/>

      <text x="50" y="245" font-size="14" font-family="Arial">Pipeline Id:</text>
      <text x="120" y="245" font-size="14" font-family="Arial" stroke="black" stroke-width="0.4">10</text>
      <text x="155" y="245" font-size="14" font-family="Arial">Version Id:</text>
      <text x="222" y="245" font-family="Arial" font-size="14" stroke="black" stroke-width="0.4">0</text>
      <text x="350" y="245" font-size="14" font-family="Arial">Instances:</text>
      <text x="415" y="245" font-size="14" font-family="Arial" stroke="black" stroke-width="0.4">0</text>

      <text x="230" y="85" font-size="14" font-family="Arial">Response</text>
      <text x="150" y="85" font-size="14" font-family="Arial">Request</text>

      <text x="280" y="40" font-size="15" font-family="Arial" stroke="black" stroke-width="0.5">pl2</text>

      <text x="340" y="200" fill="white" font-size="16" stroke="white" stroke-width="1">898,469</text>
      <text x="180" y="200" fill="white" font-size="14" font-family="Arial" stroke="white" stroke-width="0.7">ReportingPoint</text>
      <text x="110" y="200" fill="white" font-size="16" stroke="white" stroke-width="1">1</text>
      <text x="95" y="43" fill="white" font-size="17" stroke="white" stroke-width="1">1</text>
      <text x="180" y="40" fill="white" font-size="17" font-family="Arial" stroke="white" stroke-width="0.7">EadService</text>

      <text x="380" y="43" fill="white" font-size="17" stroke="white" stroke-width="1">0</text>

      <path class="arrowup" d="M442.627,185.388L265.083,7.844C260.019,2.78,253.263,0,245.915,0c-7.204,0-13.956,2.78-19.02,7.844L49.347,
      185.388c-10.488,10.492-10.488,27.568,0,38.052l16.12,16.128c5.064,5.06,11.82,7.844,19.028,7.844c7.204,0,14.192-2.784,19.252-7.844
      l103.808-103.584v329.084c0,14.832,11.616,26.932,26.448,26.932h22.8c14.832,0,27.624-12.1,27.624-26.932V134.816l104.396,104.752
      c5.06,5.06,11.636,7.844,18.844,7.844s13.864-2.784,18.932-7.844l16.072-16.128C453.163,212.952,453.123,195.88,442.627,185.388z"
      />

      <path class="arrowup1" d="M442.627,185.388L265.083,7.844C260.019,2.78,253.263,0,245.915,0c-7.204,0-13.956,2.78-19.02,7.844L49.347,
      185.388c-10.488,10.492-10.488,27.568,0,38.052l16.12,16.128c5.064,5.06,11.82,7.844,19.028,7.844c7.204,0,14.192-2.784,19.252-7.844
      l103.808-103.584v329.084c0,14.832,11.616,26.932,26.448,26.932h22.8c14.832,0,27.624-12.1,27.624-26.932V134.816l104.396,104.752
      c5.06,5.06,11.636,7.844,18.844,7.844s13.864-2.784,18.932-7.844l16.072-16.128C453.163,212.952,453.123,195.88,442.627,185.388z"
      />

      <path class="arrowdown" d="M442.668,268.536l-16.116-16.12c-5.06-5.068-11.824-7.872-19.024-7.872c-7.208,0-14.584,2.804-19.644,7.872
      L283.688,355.992V26.924C283.688,12.084,272.856,0,258.02,0h-22.804c-14.832,0-28.404,12.084-28.404,26.924v330.24
      L102.824,252.416c-5.068-5.068-11.444-7.872-18.652-7.872c-7.2,0-13.776,2.804-18.84,7.872l-16.028,16.12
      c-10.488,10.492-10.444,27.56,0.044,38.052l177.576,177.556c5.056,5.056,11.84,7.856,19.1,7.856h0.076
      c7.204,0,13.972-2.8,19.028-7.856l177.54-177.552C453.164,296.104,453.164,279.028,442.668,268.536z"/>

      <path class="arrowdown1" d="M442.668,268.536l-16.116-16.12c-5.06-5.068-11.824-7.872-19.024-7.872c-7.208,0-14.584,2.804-19.644,7.872
      L283.688,355.992V26.924C283.688,12.084,272.856,0,258.02,0h-22.804c-14.832,0-28.404,12.084-28.404,26.924v330.24
      L102.824,252.416c-5.068-5.068-11.444-7.872-18.652-7.872c-7.2,0-13.776,2.804-18.84,7.872l-16.028,16.12
      c-10.488,10.492-10.444,27.56,0.044,38.052l177.576,177.556c5.056,5.056,11.84,7.856,19.1,7.856h0.076
      c7.204,0,13.972-2.8,19.028-7.856l177.54-177.552C453.164,296.104,453.164,279.028,442.668,268.536z"/>

      <path class="checkmark" d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>

      <path class="cross" d="M409.133,109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.736,9.801,259.058,0,219.273,0
      c-39.781,0-76.47,9.801-110.063,29.407c-33.595,19.604-60.192,46.201-79.8,79.796C9.801,142.8,0,179.489,0,219.267
      c0,39.78,9.804,76.463,29.407,110.062c19.607,33.592,46.204,60.189,79.799,79.798c33.597,19.605,70.283,29.407,110.063,29.407
      s76.47-9.802,110.065-29.407c33.593-19.602,60.189-46.206,79.795-79.798c19.603-33.596,29.403-70.284,29.403-110.062
      C438.533,179.485,428.732,142.795,409.133,109.203z M322.621,270.939c3.617,3.613,5.428,7.905,5.428,12.854
      c0,5.133-1.811,9.514-5.428,13.127l-25.693,25.701c-3.614,3.613-7.994,5.42-13.135,5.42c-4.948,0-9.236-1.807-12.847-5.42
      l-51.676-51.682l-51.678,51.682c-3.616,3.613-7.898,5.42-12.847,5.42c-5.14,0-9.517-1.807-13.134-5.42l-25.697-25.701
      c-3.616-3.613-5.424-7.994-5.424-13.127c0-4.948,1.809-9.24,5.424-12.854l51.678-51.673l-51.678-51.678
      c-3.616-3.612-5.424-7.898-5.424-12.847c0-5.14,1.809-9.517,5.424-13.134l25.697-25.693c3.617-3.616,7.994-5.424,13.134-5.424
      c4.949,0,9.231,1.809,12.847,5.424l51.678,51.674l51.676-51.674c3.61-3.616,7.898-5.424,12.847-5.424
      c5.141,0,9.521,1.809,13.135,5.424l25.693,25.693c3.617,3.617,5.428,7.994,5.428,13.134c0,4.948-1.811,9.235-5.428,12.847
      l-51.675,51.678L322.621,270.939z"/>

    </svg>
	`
})
export class TwoBarsComponent implements OnChanges {
  @Input() percent: string;
  @Input() color: string;
  @Input() backgroundColor: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    }
}
