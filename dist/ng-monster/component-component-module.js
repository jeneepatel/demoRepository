(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-component-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/component/accordion/accordion.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/accordion/accordion.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Toggle Accordion</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">This is basic toggletype accordion</h6>\r\n\t\t\t\t<ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\r\n\t\t\t\t\t<ngb-panel title=\"Simple\">\r\n\t\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\r\n\t\t\t\t\t\t\tofficia\r\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\r\n\t\t\t\t\t\t\ttempor,\r\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n\t\t\t\t\t\t\thelvetica,\r\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\r\n\t\t\t\t\t\t\tLeggings\r\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\r\n\t\t\t\t\t\t\taccusamus\r\n\t\t\t\t\t\t\tlabore sustainable VHS.\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ngb-panel>\r\n\t\t\t\t\t<ngb-panel>\r\n\t\t\t\t\t\t<ng-template ngbPanelTitle>\r\n\t\t\t\t\t\t\t<span>&#9733; <b>Fancy</b> title &#9733;</span>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\r\n\t\t\t\t\t\t\tofficia\r\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\r\n\t\t\t\t\t\t\ttempor,\r\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n\t\t\t\t\t\t\thelvetica,\r\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\r\n\t\t\t\t\t\t\tLeggings\r\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\r\n\t\t\t\t\t\t\taccusamus\r\n\t\t\t\t\t\t\tlabore sustainable VHS.\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ngb-panel>\r\n\t\t\t\t\t<ngb-panel title=\"Disabled\" [disabled]=\"true\">\r\n\t\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\r\n\t\t\t\t\t\t\tofficia\r\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\r\n\t\t\t\t\t\t\ttempor,\r\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n\t\t\t\t\t\t\thelvetica,\r\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\r\n\t\t\t\t\t\t\tLeggings\r\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\r\n\t\t\t\t\t\t\taccusamus\r\n\t\t\t\t\t\t\tlabore sustainable VHS.\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ngb-panel>\r\n\t\t\t\t</ngb-accordion>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Accordion</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">This is One open panel accordion</h6>\r\n\t\t\t\t<ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\r\n\t\t\t\t\t<ngb-panel id=\"static-1\" title=\"Simple\">\r\n\t\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\r\n\t\t\t\t\t\t\tofficia\r\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\r\n\t\t\t\t\t\t\ttempor,\r\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n\t\t\t\t\t\t\thelvetica,\r\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\r\n\t\t\t\t\t\t\tLeggings\r\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\r\n\t\t\t\t\t\t\taccusamus\r\n\t\t\t\t\t\t\tlabore sustainable VHS.\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ngb-panel>\r\n\t\t\t\t\t<ngb-panel id=\"static-2\">\r\n\t\t\t\t\t\t<ng-template ngbPanelTitle>\r\n\t\t\t\t\t\t\t<span>&#9733; <b>Fancy</b> title &#9733;</span>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\r\n\t\t\t\t\t\t\tofficia\r\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\r\n\t\t\t\t\t\t\ttempor,\r\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n\t\t\t\t\t\t\thelvetica,\r\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\r\n\t\t\t\t\t\t\tLeggings\r\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\r\n\t\t\t\t\t\t\taccusamus\r\n\t\t\t\t\t\t\tlabore sustainable VHS.\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ngb-panel>\r\n\t\t\t\t\t<ngb-panel id=\"static-3\" title=\"Disabled\" [disabled]=\"true\">\r\n\t\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\r\n\t\t\t\t\t\t\tofficia\r\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\r\n\t\t\t\t\t\t\ttempor,\r\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n\t\t\t\t\t\t\thelvetica,\r\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\r\n\t\t\t\t\t\t\tLeggings\r\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\r\n\t\t\t\t\t\t\taccusamus\r\n\t\t\t\t\t\t\tlabore sustainable VHS.\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ngb-panel>\r\n\t\t\t\t</ngb-accordion>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Toggle Panel</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">This is toggle panel accordion</h6>\r\n\t\t\t\t<ngb-accordion #acc=\"ngbAccordion\">\r\n\t\t\t\t\t<ngb-panel id=\"toggle-1\" title=\"First panel\">\r\n\t\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\r\n\t\t\t\t\t\t\tofficia\r\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\r\n\t\t\t\t\t\t\ttempor,\r\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n\t\t\t\t\t\t\thelvetica,\r\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\r\n\t\t\t\t\t\t\tLeggings\r\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\r\n\t\t\t\t\t\t\taccusamus\r\n\t\t\t\t\t\t\tlabore sustainable VHS.\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ngb-panel>\r\n\t\t\t\t\t<ngb-panel id=\"toggle-2\" title=\"Second\">\r\n\t\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\r\n\t\t\t\t\t\t\tofficia\r\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\r\n\t\t\t\t\t\t\ttempor,\r\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n\t\t\t\t\t\t\thelvetica,\r\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\r\n\t\t\t\t\t\t\tLeggings\r\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\r\n\t\t\t\t\t\t\taccusamus\r\n\t\t\t\t\t\t\tlabore sustainable VHS.\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ngb-panel>\r\n\t\t\t\t</ngb-accordion>\r\n\r\n\t\t\t\t<p class=\"m-t-40\">\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"acc.toggle('toggle-1')\">Toggle first</button>\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"acc.toggle('toggle-2')\">Toggle second</button>\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Prevent panel toggle</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">This is prevent toggle panel accordion</h6>\r\n\t\t\t\t<ngb-accordion (panelChange)=\"beforeChange($event)\">\r\n\t\t\t\t\t<ngb-panel id=\"preventchange-1\" title=\"Simple\">\r\n\t\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\r\n\t\t\t\t\t\t\tofficia\r\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\r\n\t\t\t\t\t\t\ttempor,\r\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n\t\t\t\t\t\t\thelvetica,\r\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\r\n\t\t\t\t\t\t\tLeggings\r\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\r\n\t\t\t\t\t\t\taccusamus\r\n\t\t\t\t\t\t\tlabore sustainable VHS.\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ngb-panel>\r\n\t\t\t\t\t<ngb-panel id=\"preventchange-2\" title=\"I can't be toggled...\">\r\n\t\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\r\n\t\t\t\t\t\t\tofficia\r\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\r\n\t\t\t\t\t\t\ttempor,\r\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n\t\t\t\t\t\t\thelvetica,\r\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\r\n\t\t\t\t\t\t\tLeggings\r\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\r\n\t\t\t\t\t\t\taccusamus\r\n\t\t\t\t\t\t\tlabore sustainable VHS.\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ngb-panel>\r\n\t\t\t\t\t<ngb-panel id=\"preventchange-3\" title=\"I can be opened, but not closed...\">\r\n\t\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\r\n\t\t\t\t\t\t\tofficia\r\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\r\n\t\t\t\t\t\t\ttempor,\r\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n\t\t\t\t\t\t\thelvetica,\r\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\r\n\t\t\t\t\t\t\tLeggings\r\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\r\n\t\t\t\t\t\t\taccusamus\r\n\t\t\t\t\t\t\tlabore sustainable VHS.\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ngb-panel>\r\n\t\t\t\t</ngb-accordion>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Custom header<span class=\"ml-2 badge badge-success text-white\">New</span></h4>\r\n\t\t\t\t<ngb-accordion #a=\"ngbAccordion\" activeIds=\"custom-panel-1\">\r\n\t\t\t\t\t  <ngb-panel id=\"custom-panel-1\">\r\n\t\t\t\t\t\t<ng-template ngbPanelHeader let-opened=\"opened\">\r\n\t\t\t\t\t\t  <div class=\"d-flex align-items-center justify-content-between\">\r\n\t\t\t\t\t\t\t<h5 class=\"m-0\">First panel - {{ opened ? 'opened' : 'collapsed' }}</h5>\r\n\t\t\t\t\t\t\t<button ngbPanelToggle class=\"btn btn-link p-0\">Toggle first</button>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n\t\t\t\t\t\t  aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n\t\t\t\t\t\t  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n\t\t\t\t\t\t  craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n\t\t\t\t\t\t  occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n\t\t\t\t\t\t  labore sustainable VHS.\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t  </ngb-panel>\r\n\t\t\t\t\t  <ngb-panel>\r\n\t\t\t\t\t\t<ng-template ngbPanelHeader>\r\n\t\t\t\t\t\t  <div class=\"d-flex align-items-center justify-content-between\">\r\n\t\t\t\t\t\t\t<h5 class=\"m-0\">Second panel</h5>\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t  <button ngbPanelToggle class=\"btn btn-sm btn-outline-primary ml-2\">Toggle second</button>\r\n\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary ml-2\" (click)=\"disabled = !disabled\">\r\n\t\t\t\t\t\t\t\t{{ disabled ? 'En' : 'Dis' }}able third\r\n\t\t\t\t\t\t\t  </button>\r\n\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-sm btn-outline-danger ml-2\" (click)=\"a.collapseAll()\">Collapse all</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n\t\t\t\t\t\t  aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n\t\t\t\t\t\t  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n\t\t\t\t\t\t  craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n\t\t\t\t\t\t  occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n\t\t\t\t\t\t  labore sustainable VHS.\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t  </ngb-panel>\r\n\t\t\t\t\t  <ngb-panel [disabled]=\"disabled\">\r\n\t\t\t\t\t\t<ng-template ngbPanelHeader>\r\n\t\t\t\t\t\t  <div class=\"d-flex align-items-center justify-content-between\">\r\n\t\t\t\t\t\t\t<button ngbPanelToggle class=\"btn btn-link container-fluid text-left pl-0\">Third panel</button>\r\n\t\t\t\t\t\t\t<p *ngIf=\"disabled\" class=\"text-muted m-0 small\">[I'm&nbsp;disabled]</p>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n\t\t\t\t\t\t  aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n\t\t\t\t\t\t  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n\t\t\t\t\t\t  craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n\t\t\t\t\t\t  occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n\t\t\t\t\t\t  labore sustainable VHS.\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t  </ngb-panel>\r\n\t\t\t\t</ngb-accordion>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/alert/alert.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/alert/alert.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Basic Alert</h4>\r\n                <h6 class=\"card-subtitle\">This is basic alert</h6>\r\n                <ngb-alert [dismissible]=\"false\">\r\n                    <strong>Warning!</strong> Better check yourself, you're not looking too good.\r\n                  </ngb-alert>\r\n  \t\t\t\t\t\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Closeable Alert</h4>\r\n                <h6 class=\"card-subtitle\">This is closeable alert</h6>\r\n                <p *ngFor=\"let alert of alerts\">\r\n                  <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\">{{ alert.message }}</ngb-alert>\r\n                </p>\r\n                <p>\r\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\r\n                </p>\r\n  \t\t\t\t\t\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Self Closing  Alert</h4>\r\n                <h6 class=\"card-subtitle\">Static self-closing alert that disappears after 20 seconds (refresh the page if it has already disappeared)</h6>\r\n                <ngb-alert *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">Check out our awesome new features!</ngb-alert>\r\n  \t\t\t\t<p>Show a self-closing success message that disappears after 5 seconds.</p>\r\n  \t\t\t\t<ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\t\r\n  \t\t\t\t<p>\r\n\t\t\t\t  <button class=\"btn btn-primary\" (click)=\"changeSuccessMessage()\">Change message</button>\r\n\t\t\t\t</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Custom Alert</h4>\r\n                <p>\r\n                  <ngb-alert type=\"custom\" [dismissible]=\"false\"><strong>Whoa!</strong> This is a custom alert.</ngb-alert>\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Global Configuration of Alert</h4>\r\n                <p>\r\n                  <ngb-alert>\r\n                    This alert's type is success and it's not dismissible because the config has been customized\r\n                  </ngb-alert>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/buttons/buttons.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/buttons/buttons.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-12 col-xlg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">General Buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"button-group\">\r\n                    <button type=\"button\" class=\"btn btn-primary\">Primary</button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\r\n                    <button type=\"button\" class=\"btn btn-success\">Success</button>\r\n                    <button type=\"button\" class=\"btn btn-info\">Info</button>\r\n                    <button type=\"button\" class=\"btn btn-warning\">Warning</button>\r\n                    <button type=\"button\" class=\"btn btn-danger\">Danger</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-12 col-xlg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Button with outline</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-outline-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"button-group\">\r\n                    <button type=\"button\" class=\"btn btn-outline-primary\">Primary</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-secondary\">Secondary</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-success\">Success</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-info\">Info</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-warning\">Warning</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-danger\">Danger</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-12 col-xlg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Rounded Buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-rounded btn-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"button-group\">\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-primary\">Primary</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-secondary\">Secondary</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-success\">Success</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-info\">Info</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-warning\">Warning</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-danger\">Danger</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-12 col-xlg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Rounded outlined Buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-rounded btn-outline-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"button-group\">\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-outline-primary\">Primary</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-outline-secondary\">Secondary</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-outline-success\">Success</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-outline-info\">Info</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-outline-warning\">Warning</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-outline-danger\">Danger</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Button Sizes</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-lg btn-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"button-group\">\r\n                    <button type=\"button\" class=\"btn btn-lg btn-primary\">Large .btn-lg </button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\">Normal .btn</button>\r\n                    <button type=\"button\" class=\"btn btn-sm btn-success\">Small .btn-sm</button>\r\n                    <button type=\"button\" class=\"btn btn-xs btn-info\">Tiny .btn-xs</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Button Sizes with rounded</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-lg btn-rounded btn-success</code> to create a btn.</h6>\r\n                <div class=\"button-group\">\r\n                    <button type=\"button\" class=\"btn btn-lg btn-rounded btn-primary\">Large .btn-lg </button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-secondary\">Normal .btn</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-sm btn-success\">Small .btn-sm</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-xs btn-info\">Tiny .btn-xs</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Block buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-block btn-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"row button-group\">\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-info\">Info</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-success\">Success</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-primary\">Primary</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-danger\">Danger</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-secondary\">Secondary</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-warning\">Warning</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Rounded Block buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-block btn-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"row button-group\">\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-info\">Info</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-success\">Success</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-primary\">Primary</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-danger\">Danger</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-secondary\">Secondary</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-warning\">Warning</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Block outline buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-block btn-outline-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"row button-group\">\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-outline-info\">Info</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-outline-success\">Success</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-outline-primary\">Primary</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-outline-danger\">Danger</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-outline-secondary\">Secondary</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-outline-warning\">Warning</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Rounded outline Block buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-block btn-outline-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"row button-group\">\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-outline-info\">Info</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-outline-success\">Success</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-outline-primary\">Primary</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-outline-danger\">Danger</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-outline-secondary\">Secondary</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-outline-warning\">Warning</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Large Block buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-block btn-lg btn-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"row button-group\">\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-lg btn-info\">Info</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-lg btn-success\">Success</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-lg btn-primary\">Primary</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-lg btn-danger\">Danger</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-lg btn-secondary\">Second</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-lg btn-warning\">Warning</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Button with icon</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-success</code> & <code>i class =\"fa fa-heart\"</code> to quickly create a General btn.</h6>\r\n                <div class=\"row button-group\">\r\n                    <div class=\"col-lg-12 col-xlg-6 m-b-30\">\r\n                        <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-check\"></i> Primary</button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\">Secondary <i class=\"fa fa-heart\"></i></button>\r\n                        <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Success</button>\r\n                        <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-heart\"></i> Info</button>\r\n                        <button type=\"button\" class=\"btn btn-warning\"><i class=\"fa fa-heart\"></i> Warning</button>\r\n                        <button type=\"button\" class=\"btn btn-danger\"><i class=\"fa fa-heart\"></i> Danger</button>\r\n                    </div>\r\n                    <div class=\"col-lg-12 col-xlg-6 m-b-30\">\r\n                        <button class=\"btn btn-primary waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fas fa-envelope\"></i></span>Mail</button>\r\n                        <button class=\"btn btn-secondary waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fa fa-check\"></i></span>Check</button>\r\n                        <button class=\"btn btn-info waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fa fa-heart\"></i></span>Heart</button>\r\n                        <button class=\"btn btn-warning waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fas fa-envelope\"></i></span>Mail</button>\r\n                        <button class=\"btn btn-danger waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fa fa-heart\"></i></span>Heart</button>\r\n                    </div>\r\n                    <div class=\"col-lg-12 col-xlg-6 m-b-30\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-rounded\"><i class=\"fa fa-check\"></i> Primary</button>\r\n                        <button type=\"button\" class=\"btn btn-secondary btn-rounded\">Secondary <i class=\"fa fa-heart\"></i></button>\r\n                        <button type=\"button\" class=\"btn btn-success btn-rounded\"><i class=\"fa fa-check\"></i> Success</button>\r\n                        <button type=\"button\" class=\"btn btn-info btn-rounded\"><i class=\"fa fa-heart\"></i> Info</button>\r\n                        <button type=\"button\" class=\"btn btn-warning btn-rounded\"><i class=\"fa fa-heart\"></i> Warning</button>\r\n                        <button type=\"button\" class=\"btn btn-danger btn-rounded\"><i class=\"fa fa-heart\"></i> Danger</button>\r\n                    </div>\r\n                    <div class=\"col-lg-12 col-xlg-6 m-b-30\">\r\n                        <button type=\"button\" class=\"btn btn-outline-primary\"><i class=\"fa fa-check\"></i> Primary</button>\r\n                        <button type=\"button\" class=\"btn btn-outline-secondary\">Secondary <i class=\"fa fa-heart\"></i></button>\r\n                        <button type=\"button\" class=\"btn btn-outline-success\"><i class=\"fa fa-check\"></i> Success</button>\r\n                        <button type=\"button\" class=\"btn btn-outline-info\"><i class=\"fa fa-heart\"></i> Info</button>\r\n                        <button type=\"button\" class=\"btn btn-outline-warning\"><i class=\"fa fa-heart\"></i> Warning</button>\r\n                        <button type=\"button\" class=\"btn btn-outline-danger\"><i class=\"fa fa-heart\"></i> Danger</button>\r\n                    </div>\r\n                    <div class=\"col-lg-12 col-xlg-6 m-b-30\">\r\n                        <button class=\"btn btn-outline-primary waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fas fa-envelope\"></i></span>Mail</button>\r\n                        <button class=\"btn btn-outline-secondary waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fa fa-check\"></i></span>Check</button>\r\n                        <button class=\"btn btn-outline-info waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fa fa-heart\"></i></span>Heart</button>\r\n                        <button class=\"btn btn-outline-warning waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fas fa-envelope\"></i></span>Mail</button>\r\n                        <button class=\"btn btn-outline-danger waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fa fa-heart\"></i></span>Heart</button>\r\n                    </div>\r\n                    <div class=\"col-lg-12 col-xlg-6 m-b-30\">\r\n                        <button type=\"button\" class=\"btn btn-outline-primary btn-rounded\"><i class=\"fa fa-check\"></i> Primary</button>\r\n                        <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded\">Secondary <i class=\"fa fa-heart\"></i></button>\r\n                        <button type=\"button\" class=\"btn btn-outline-success btn-rounded\"><i class=\"fa fa-check\"></i> Success</button>\r\n                        <button type=\"button\" class=\"btn btn-outline-info btn-rounded\"><i class=\"fa fa-heart\"></i> Info</button>\r\n                        <button type=\"button\" class=\"btn btn-outline-warning btn-rounded\"><i class=\"fa fa-heart\"></i> Warning</button>\r\n                        <button type=\"button\" class=\"btn btn-outline-danger btn-rounded\"><i class=\"fa fa-heart\"></i> Danger</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6 button-group\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Circle buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-circle btn-success</code> to quickly create a General btn.</h6>\r\n                <button type=\"button\" class=\"btn btn-secondary btn-circle\"><i class=\"fa fa-check\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-circle\"><i class=\"fa fa-list\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-success btn-circle\"><i class=\"fa fa-link\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-info btn-circle\"><i class=\"fa fa-check\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-warning btn-circle\"><i class=\"fa fa-times\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-danger btn-circle\"><i class=\"fa fa-heart\"></i> </button>\r\n                <br>\r\n                <br>\r\n                <h4 class=\"card-title\">Circle Large buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-circle btn-lg btn-success</code> to quickly create a General btn.</h6>\r\n                <button type=\"button\" class=\"btn btn-secondary btn-circle btn-lg\"><i class=\"fa fa-check\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-circle btn-lg\"><i class=\"fa fa-list\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-success btn-circle btn-lg\"><i class=\"fa fa-link\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-info btn-circle btn-lg\"><i class=\"fa fa-check\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-warning btn-circle btn-lg\"><i class=\"fa fa-times\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-danger btn-circle btn-lg\"><i class=\"fa fa-heart\"></i> </button>\r\n                <br>\r\n                <br>\r\n                <h4 class=\"card-title\">Circle xtra Large buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-circle btn-xl btn-success</code> to quickly create a General btn.</h6>\r\n                <button type=\"button\" class=\"btn btn-secondary btn-circle btn-xl\"><i class=\"fa fa-check\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-circle btn-xl\"><i class=\"fa fa-list\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-success btn-circle btn-xl\"><i class=\"fa fa-link\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-info btn-circle btn-xl\"><i class=\"fa fa-check\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-warning btn-circle btn-xl\"><i class=\"fa fa-times\"></i> </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6 button-group\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Social buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-facebook</code> to quickly create a General btn.</h6>\r\n                <button class=\"btn btn-facebook waves-effect waves-light\" type=\"button\"> <i class=\"fab fa-facebook-f\"></i> </button>\r\n                <button class=\"btn btn-twitter waves-effect waves-light\" type=\"button\"> <i class=\"fab fa-twitter\"></i> </button>\r\n                <button class=\"btn btn-googleplus waves-effect waves-light\" type=\"button\"> <i class=\"fab fa-google-plus\"></i> </button>\r\n                <button class=\"btn btn-linkedin waves-effect waves-light\" type=\"button\"> <i class=\"fab fa-linkedin\"></i> </button>\r\n                <button class=\"btn btn-instagram waves-effect waves-light\" type=\"button\"> <i class=\"fab fa-instagram\"></i> </button>\r\n                <button class=\"btn btn-pinterest waves-effect waves-light\" type=\"button\"> <i class=\"fab fa-pinterest\"></i> </button>\r\n                <button class=\"btn btn-dribbble waves-effect waves-light\" type=\"button\"> <i class=\"fab fa-dribbble\"></i> </button>\r\n                <button class=\"btn btn-youtube waves-effect waves-light\" type=\"button\"> <i class=\"fab fa-youtube\"></i> </button>\r\n                <br>\r\n                <br>\r\n                <h4 class=\"card-title\">With Circle buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-circle btn-success</code> to quickly create a General btn.</h6>\r\n                <button class=\"btn btn-facebook waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fab fa-facebook-f\"></i> </button>\r\n                <button class=\"btn btn-twitter waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fab fa-twitter\"></i> </button>\r\n                <button class=\"btn btn-googleplus waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fab fa-google-plus\"></i> </button>\r\n                <button class=\"btn btn-linkedin waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fab fa-linkedin\"></i> </button>\r\n                <button class=\"btn btn-instagram waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fab fa-instagram\"></i> </button>\r\n                <button class=\"btn btn-pinterest waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fab fa-pinterest\"></i> </button>\r\n                <button class=\"btn btn-dribbble waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fab fa-dribbble\"></i> </button>\r\n                <button class=\"btn btn-youtube waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fab fa-youtube\"></i> </button>\r\n                <br>\r\n                <br>\r\n                <h4 class=\"card-title\">with rounded buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-rounded btn-success</code> to quickly create a General btn.</h6>\r\n                <button class=\"btn btn-facebook waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fab fa-facebook-f\"></i> </button>\r\n                <button class=\"btn btn-twitter waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fab fa-twitter\"></i> </button>\r\n                <button class=\"btn btn-googleplus waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fab fa-google-plus\"></i> </button>\r\n                <button class=\"btn btn-linkedin waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fab fa-linkedin\"></i> </button>\r\n                <button class=\"btn btn-instagram waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fab fa-instagram\"></i> </button>\r\n                <button class=\"btn btn-pinterest waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fab fa-pinterest\"></i> </button>\r\n                <button class=\"btn btn-dribbble waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fab fa-dribbble\"></i> </button>\r\n                <button class=\"btn btn-youtube waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fab fa-youtube\"></i> </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"row\">\r\n                <!-- column -->\r\n                <div class=\"col-xlg-6 col-lg-12 m-b-30\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Group buttons</h4>\r\n                        <h6 class=\"card-subtitle\">Wrap a series of buttons with <code class=\"highlighter-rouge\">.btn</code> in <code class=\"highlighter-rouge\">.btn-group</code></h6>\r\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Left</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Right</button>\r\n                        </div>\r\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-align-left\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-align-justify\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-align-right\"></i></button>\r\n                        </div>\r\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-fast-backward\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-play\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-fast-forward\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- column -->\r\n                <div class=\"col-xlg-6 col-lg-12 m-b-30\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Button toolbar pagination</h4>\r\n                        <h6 class=\"card-subtitle\">Wrap a series of buttons with <code class=\"highlighter-rouge\">.btn</code> in <code class=\"highlighter-rouge\">.btn-group</code></h6>\r\n                        <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n                            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n                                <button type=\"button\" class=\"btn btn-secondary disabled\">1</button>\r\n                                <button type=\"button\" class=\"btn btn-info\">2</button>\r\n                                <button type=\"button\" class=\"btn btn-secondary\">3</button>\r\n                                <button type=\"button\" class=\"btn btn-secondary\">4</button>\r\n                            </div>\r\n                            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\r\n                                <button type=\"button\" class=\"btn btn-secondary\">5</button>\r\n                                <button type=\"button\" class=\"btn btn-secondary\">6</button>\r\n                                <button type=\"button\" class=\"btn btn-secondary\">7</button>\r\n                            </div>\r\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"Third group\">\r\n                                <button type=\"button\" class=\"btn btn-secondary\">8</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- column -->\r\n                <!-- column -->\r\n                <div class=\"col-xlg-6 col-lg-12 m-b-30\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Group buttons sizing</h4>\r\n                        <h6 class=\"card-subtitle\">Wrap a series of buttons with <code class=\"highlighter-rouge\">.btn</code> in <code class=\"highlighter-rouge\">.btn-group</code></h6>\r\n                        <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Left</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Right</button>\r\n                        </div>\r\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-align-left\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-align-justify\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-align-right\"></i></button>\r\n                        </div>\r\n                        <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-fast-backward\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-play\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-fast-forward\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- column -->\r\n                <!-- column -->\r\n                <div class=\"col-xlg-6 col-lg-12 m-b-30\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Vertical buttons</h4>\r\n                        <h6 class=\"card-subtitle\">creat vertical button with class of <code>.btn-group-vertical</code> </h6>\r\n                        <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"Vertical button group\">\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Button</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Button</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Button</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Button</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Button</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Button</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- column -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Checkbox buttons</h4>\r\n                <div class=\"btn-group btn-group-toggle\">\r\n                  <label class=\"btn-primary\" ngbButtonLabel>\r\n                    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.left\"> Left (pre-checked)\r\n                  </label>\r\n                  <label class=\"btn-primary\" ngbButtonLabel>\r\n                    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.middle\"> Middle\r\n                  </label>\r\n                  <label class=\"btn-primary\" ngbButtonLabel>\r\n                    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.right\"> Right\r\n                  </label>\r\n                </div>\r\n                <hr>\r\n                <pre>{{model | json}}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Checkbox buttons(Reactive Forms)</h4>\r\n                <form [formGroup]=\"checkboxGroupForm\">\r\n                  <div class=\"btn-group btn-group-toggle\">\r\n                    <label class=\"btn-primary\" ngbButtonLabel>\r\n                      <input type=\"checkbox\" formControlName=\"left\" ngbButton> Left (pre-checked)\r\n                    </label>\r\n                    <label class=\"btn-primary\" ngbButtonLabel>\r\n                      <input type=\"checkbox\" formControlName=\"middle\" ngbButton> Middle\r\n                    </label>\r\n                    <label class=\"btn-primary\" ngbButtonLabel>\r\n                      <input type=\"checkbox\" formControlName=\"right\" ngbButton> Right\r\n                    </label>\r\n                  </div>\r\n                </form>\r\n                <hr>\r\n                <pre>{{checkboxGroupForm.value | json}}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Radio Buttons</h4>\r\n                <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"model1\">\r\n                  <label ngbButtonLabel class=\"btn-primary\">\r\n                    <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\r\n                  </label>\r\n                  <label ngbButtonLabel class=\"btn-primary\">\r\n                    <input ngbButton type=\"radio\" value=\"middle\"> Middle\r\n                  </label>\r\n                  <label ngbButtonLabel class=\"btn-primary\">\r\n                    <input ngbButton type=\"radio\" [value]=\"false\"> Right\r\n                  </label>\r\n                </div>\r\n                <hr>\r\n                <pre>{{model1}}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Radio Buttons(Reactive Forms)</h4>\r\n                <form [formGroup]=\"radioGroupForm\">\r\n                  <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" formControlName=\"model\">\r\n                    <label ngbButtonLabel class=\"btn-primary\">\r\n                      <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\r\n                    </label>\r\n                    <label ngbButtonLabel class=\"btn-primary\">\r\n                      <input ngbButton type=\"radio\" value=\"middle\"> Middle\r\n                    </label>\r\n                    <label ngbButtonLabel class=\"btn-primary\">\r\n                      <input ngbButton type=\"radio\" [value]=\"false\"> Right\r\n                    </label>\r\n                  </div>\r\n                </form>\r\n                <hr>\r\n                <pre>{{radioGroupForm.value['model']}}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/card/card.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/card/card.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <h4 class=\"d-inline\">Card with Image  code icon</h4>\r\n        <!-- Row -->\r\n        <div class=\"row\">\r\n            <!-- column -->\r\n            <div class=\"col-lg-3 col-md-6\">\r\n                <!-- Card -->\r\n                <div class=\"card\">\r\n                    <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img1.jpg\" alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Card title</h4>\r\n                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                    </div>\r\n                </div>\r\n                <!-- Card -->\r\n            </div>\r\n            <!-- column -->\r\n            <!-- column -->\r\n            <div class=\"col-lg-3 col-md-6\">\r\n                <!-- Card -->\r\n                <div class=\"card\">\r\n                    <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img2.jpg\" alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Card title</h4>\r\n                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                    </div>\r\n                </div>\r\n                <!-- Card -->\r\n            </div>\r\n            <!-- column -->\r\n            <!-- column -->\r\n            <div class=\"col-lg-3 col-md-6\">\r\n                <!-- Card -->\r\n                <div class=\"card\">\r\n                    <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img3.jpg\" alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Card title</h4>\r\n                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                    </div>\r\n                </div>\r\n                <!-- Card -->\r\n            </div>\r\n            <!-- column -->\r\n            <!-- column -->\r\n            <div class=\"col-lg-3 col-md-6 img-responsive\">\r\n                <!-- Card -->\r\n                <div class=\"card\">\r\n                    <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img4.jpg\" alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Card title</h4>\r\n                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                    </div>\r\n                </div>\r\n                <!-- Card -->\r\n            </div>\r\n            <!-- column -->\r\n        </div>\r\n        <!-- Row -->\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Content types</h4>\r\n        <p class=\"text-muted m-t-0\">The building block of a card is the <code>.card</code> <code>.card-body</code> Use it whenever you need a padded section within a card.</p>\r\n        <div class=\"card\">\r\n            <div class=\"card-body collapse show\">\r\n                <h4 class=\"card-title\">Special title treatment</h4>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Titles, text, and links</h4>\r\n        <p class=\"text-muted m-t-0\">Card titles are used by adding <code>.card-title</code> &amp; <code>.card-subtitle</code> for subtitle of card.</p>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Card title</h4>\r\n                <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                <a href=\"#\" class=\"card-link\">Card link</a>\r\n                <a href=\"#\" class=\"card-link\">Another link</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Header and footer</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Add an optional header and/or footer within a card.</p>\r\n        <!-- Card -->\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                Featured\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Special title treatment</h4>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n        <!-- Card -->\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Header and footer</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Add an optional header and/or footer within a card. </p>\r\n        <!-- Card -->\r\n        <div class=\"card text-center\">\r\n            <div class=\"card-header\">\r\n                Featured\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Special title treatment</h4>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-info\">Go somewhere</a>\r\n            </div>\r\n            <div class=\"card-footer text-muted\">\r\n                2 days ago\r\n            </div>\r\n        </div>\r\n        <!-- Card -->\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Size Using grid markup</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Using the grid, wrap cards in columns and rows as needed.<code>.col-1 to .col-12</code></p>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-success\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Text alignment</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">You can quickly change the text alignment<code>.text-center .text-right</code>.</p>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Special title treatment</h4>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-info\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"card text-center\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Special title treatment</h4>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"card text-right\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Special title treatment</h4>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Using utilities</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Using the utility, you can give direct width class to card like<code>.w-25, w-50, w-75, w-100</code></p>\r\n        <div class=\"card w-75\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">This card has width of 75%</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-danger\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"card w-50\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">This card has width of 50%</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Size Using grid markup</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Using the grid, wrap cards in columns and rows as needed.<code>.col-1 to .col-12</code></p>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card text-center\">\r\n            <div class=\"card-header\">\r\n                <ul class=\"nav nav-tabs card-header-tabs\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link active\" href=\"javascript:void(0)\">Active</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"javascript:void(0)\">Link</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Special title treatment</h4>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card text-center\">\r\n            <div class=\"card-header\">\r\n                <ul class=\"nav nav-pills card-header-pills\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link active\" href=\"javascript:void(0)\">Active</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"javascript:void(0)\">Link</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link disabled\" href=\"javascript:void(0)\">Disabled</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Special title treatment</h4>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-info\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Card styles</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Cards include various options for customizing their backgrounds, borders, and color.<code>.card-primary info, warning, danger</code></p>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-inverse\" style=\"background-color: #333; border-color: #333;\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-inverse card-info\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-inverse card-primary\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-inverse card-danger\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-inverse card-warning\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-inverse card-success\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Card styles</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Cards include various options for customizing their backgrounds, borders, and color.<code>.card-primary info, warning, danger</code></p>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-outline-inverse\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-outline-info\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-outline-primary\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-outline-danger\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-outline-warning\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-outline-success\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Card Groups</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Use card groups to render cards as a single, attached element with equal width and height columns.</p>\r\n        <div class=\"card-group\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img1.jpg\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title</h4>\r\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img2.jpg\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title</h4>\r\n                    <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img3.jpg\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title</h4>\r\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\r\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<h4 class=\"m-t-40\">Card With action</h4>\r\n<p class=\"text-muted m-t-0 font-12\">With action elements.</p>\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        Title\r\n        <div class=\"card-actions\">\r\n            <a class=\"btn-minimize\" data-perform=\"card-collapse\"><i class=\"ti-minus\"></i></a>\r\n            <a class=\"btn-close\"><i class=\"ti-close\"></i></a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body collapse show\">\r\n        <h4 class=\"card-title\">Special title treatment</h4>\r\n        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n    </div>\r\n</div>\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Card with Deck</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Use card groups to render cards as a single, attached element with equal width and height columns.</p>\r\n        <div class=\"card-deck\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img1.jpg\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title</h4>\r\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img2.jpg\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title</h4>\r\n                    <p class=\"card-text\">This card has supporting text below as a natural.</p>\r\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img3.jpg\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title</h4>\r\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. supporting text below as a natural lead-in to additional content</p>\r\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Card columns</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Cards can be organized into Masonry-like columns with just CSS by wrapping them in <code>card-columns</code></p>\r\n        <div class=\"card-columns\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top img-fluid\" src=\"assets/images/big/img6.jpg\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title that wraps to a new line</h4>\r\n                    <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"card p-3\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n                <footer>\r\n                    <small class=\"text-muted\">\r\n              Someone famous in <cite title=\"Source Title\">Source Title</cite>\r\n            </small>\r\n                </footer>\r\n            </div>\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top img-fluid\" src=\"assets/images/big/img5.jpg\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title</h4>\r\n                    <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                </div>\r\n            </div>\r\n            <div class=\"card card-inverse bg-primary p-3 text-center text-white\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>\r\n                <footer>\r\n                    <small>\r\n              Someone famous in <cite title=\"Source Title\">Source Title</cite>\r\n            </small>\r\n                </footer>\r\n            </div>\r\n            <div class=\"card text-center\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title</h4>\r\n                    <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <img class=\"card-img img-fluid\" src=\"assets/images/big/img4.jpg\" alt=\"Card image\">\r\n            </div>\r\n            <div class=\"card p-3 text-right\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n                <footer>\r\n                    <small class=\"text-muted\">\r\n              Someone famous in <cite title=\"Source Title\">Source Title</cite>\r\n            </small>\r\n                </footer>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title</h4>\r\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\r\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/carousel/carousel.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/carousel/carousel.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Carousel</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">This is basic Carousel</h6>\r\n\t\t\t\t<ngb-carousel>\r\n\t\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t\t<img src=\"assets/images/big/img1.jpg\" alt=\"Random first slide\">\r\n\t\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t\t<h4 class=\"text-white font-bold\">First slide label</h4>\r\n\t\t\t\t\t\t\t<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t\t<img src=\"assets/images/big/img2.jpg\" alt=\"Random second slide\">\r\n\t\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t\t<h4 class=\"text-white font-bold\">Second slide label</h4>\r\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t\t<img src=\"assets/images/big/img3.jpg\" alt=\"Random third slide\">\r\n\t\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t\t<h4 class=\"text-white font-bold\">Third slide label</h4>\r\n\t\t\t\t\t\t\t<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-carousel>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Navigation arrows and indicators</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">Navigation</h6>\r\n\t\t\t\t<ngb-carousel [showNavigationArrows]=\"showNavigationArrows\" [showNavigationIndicators]=\"showNavigationIndicators\">\r\n\t\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t\t<img src=\"assets/images/big/img4.jpg\" alt=\"Random first slide\">\r\n\t\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t\t<h4 class=\"text-white font-bold\">10 seconds between slides...</h4>\r\n\t\t\t\t\t\t\t<p>This carousel uses customized default values.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t\t<img src=\"assets/images/big/img5.jpg\" alt=\"Random second slide\">\r\n\t\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t\t<h4 class=\"text-white font-bold\">No keyboard...</h4>\r\n\t\t\t\t\t\t\t<p>This carousel uses customized default values.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t\t<img src=\"assets/images/big/img6.jpg\" alt=\"Random third slide\">\r\n\t\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t\t<h4 class=\"text-white font-bold\">And no wrap after last slide.</h4>\r\n\t\t\t\t\t\t\t<p>This carousel uses customized default values.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-carousel>\r\n\r\n\t\t\t\t<div class=\"btn-group m-t-40\" role=\"group\" aria-label=\"Carousel toggle controls\">\r\n  \t\t\t\t\t<button type=\"button\" (click)=\"showNavigationArrows = !showNavigationArrows\" class=\"btn btn-outline-dark btn-sm\">Toggle navigation arrows</button>\r\n  \t\t\t\t\t<button type=\"button\" (click)=\"showNavigationIndicators = !showNavigationIndicators\" class=\"btn btn-outline-dark btn-sm\">Toggle navigation indicators</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Pause/cycle <span class=\"badge badge-success text-white ml-2\">New</span></h4>\r\n\t\t\t\t<ngb-carousel #carousel interval=\"1000\" [pauseOnHover]=\"pauseOnHover\" (slide)=\"onSlide($event)\">\r\n\t\t\t    \t\t<ng-template ngbSlide>\r\n\t\t\t\t\t\t<img src=\"assets/images/big/img4.jpg\" alt=\"Random first slide\">\r\n\t\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t\t<h4 class=\"text-white font-bold\">10 seconds between slides...</h4>\r\n\t\t\t\t\t\t\t<p>This carousel uses customized default values.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t\t<img src=\"assets/images/big/img5.jpg\" alt=\"Random second slide\">\r\n\t\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t\t<h4 class=\"text-white font-bold\">No keyboard...</h4>\r\n\t\t\t\t\t\t\t<p>This carousel uses customized default values.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t\t<img src=\"assets/images/big/img6.jpg\" alt=\"Random third slide\">\r\n\t\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t\t<h4 class=\"text-white font-bold\">And no wrap after last slide.</h4>\r\n\t\t\t\t\t\t\t<p>This carousel uses customized default values.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-carousel>\r\n\t\t\t\t<hr>\r\n\t\t\t\t<div class=\"form-check\">\r\n\t\t\t\t  <input type=\"checkbox\" class=\"form-check-input\" id=\"pauseOnHover\" [(ngModel)]=\"pauseOnHover\">\r\n\t\t\t\t  <label class=\"form-check-label\" for=\"pauseOnHover\">Pause on hover</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-check\">\r\n\t\t\t\t  <input type=\"checkbox\" class=\"form-check-input\" id=\"unpauseOnArrow\" [(ngModel)]=\"unpauseOnArrow\">\r\n\t\t\t\t  <label class=\"form-check-label\" for=\"unpauseOnArrow\">Unpause when clicking on arrows</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-check\">\r\n\t\t\t\t  <input type=\"checkbox\" class=\"form-check-input\" id=\"pauseOnIndicator\" [(ngModel)]=\"pauseOnIndicator\">\r\n\t\t\t\t  <label class=\"form-check-label\" for=\"pauseOnIndicator\">Pause when clicking on navigation indicator</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button type=\"button\" (click)=\"togglePaused()\" class=\"btn btn-outline-dark btn-sm\">\r\n\t\t\t\t  {{paused ? 'Cycle' : 'Pause' }}\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/datepicker/datepicker.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/datepicker/datepicker.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Datepicker Basic</h4>\r\n                <h6 class=\"card-subtitle\">This is basic datepicker</h6>\r\n                <p>Simple datepicker</p>\r\n                <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\"></ngb-datepicker>\r\n                <div class=\"dl\">\r\n                    <span class=\"m-l-20\">Month: {{ date.month }}.{{ date.year }}</span><br /><br />\r\n                    <span class=\"m-l-20\">Model: {{ model | json }}</span>\r\n                </div>\r\n                <div class=\"m-t-20\">\r\n                    <button class=\"btn btn-sm btn-outline-info\" (click)=\"selectToday()\">Select Today</button>\r\n                    <button class=\"btn btn-sm btn-outline-info\" (click)=\"dp.navigateTo()\">To current month</button>\r\n                    <button class=\"btn btn-sm btn-outline-info\" (click)=\"dp.navigateTo({year: 2013, month: 2})\">To Feb\r\n                        2013</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Disabled datepicker</h4>\r\n                <h6 class=\"card-subtitle\">This is Disabled datepicker</h6>\r\n                <ngb-datepicker [(ngModel)]=\"model3\" [disabled]=\"disabled\"></ngb-datepicker>\r\n\r\n                <div class=\"m-t-20\"><button class=\"btn btn-sm btn-outline-{{disabled ? 'danger' : 'success'}}\" (click)=\"disabled = !disabled\">\r\n                        {{ disabled ? \"disabled\" : \"enabled\"}}\r\n                    </button></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Datepicker Multiple months</h4>\r\n                <h6 class=\"card-subtitle\">This is datepicker Multiple months</h6>\r\n                <ngb-datepicker [displayMonths]=\"displayMonths\" [navigation]=\"navigation\"></ngb-datepicker>\r\n                <hr />\r\n                <form class=\"form-inline\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [displayMonths]=\"displayMonths\"\r\n                                [navigation]=\"navigation\" [showWeekNumbers]=\"showWeekNumbers\" ngbDatepicker #e=\"ngbDatepicker\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-outline-secondary\" (click)=\"e.toggle()\" type=\"button\">\r\n                                    <i class=\"fa fa-calendar\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <hr />\r\n                <select class=\"custom-select\" [(ngModel)]=\"displayMonths\">\r\n                    <option [ngValue]=\"1\">One month</option>\r\n                    <option [ngValue]=\"2\">Two months</option>\r\n                    <option [ngValue]=\"3\">Three months</option>\r\n                </select>\r\n                <select class=\"custom-select\" [(ngModel)]=\"navigation\">\r\n                    <option value=\"none\">Without navigation</option>\r\n                    <option value=\"select\">With select boxes</option>\r\n                    <option value=\"arrows\">Without select boxes</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Datepicker in a popup</h4>\r\n                <h6 class=\"card-subtitle\">This is datepicker with popup</h6>\r\n                <form class=\"form-inline\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp2\" [(ngModel)]=\"model\"\r\n                                ngbDatepicker #d3=\"ngbDatepicker\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-outline-secondary no-shadow\" (click)=\"d3.toggle()\" type=\"button\">\r\n                                    <i class=\"fa fa-calendar\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n                <hr />\r\n                <pre>Model: {{ model2 | json }}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Range Datepicker</h4>\r\n                <h6 class=\"card-subtitle\">Example of the range selection</h6>\r\n                <ngb-datepicker #dp ngModel (ngModelChange)=\"onDateChange($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\">\r\n                </ngb-datepicker>\r\n\r\n                <ng-template #t let-date=\"date\" let-focused=\"focused\">\r\n                    <span class=\"custom-day\" [class.focused]=\"focused\" [class.range]=\"isFrom(date) || isTo(date) || isInside(date) || isHovered(date)\"\r\n                        [class.faded]=\"isHovered(date) || isInside(date)\" (mouseenter)=\"hoveredDate = date\"\r\n                        (mouseleave)=\"hoveredDate = null\">\r\n                        {{ date.day }}\r\n                    </span>\r\n                </ng-template>\r\n\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <pre class=\"col-md-6\">From: {{ fromDate | json }} </pre>\r\n                    <pre class=\"col-md-6\">To: {{ toDate | json }} </pre>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Custom date adapter</h4>\r\n                <h6 class=\"card-subtitle\">\r\n                    These datepickers use custom Date adapter that lets you use your own model implementation. In this\r\n                    example we are converting from and to a JS native Date object</h6>\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <ngb-datepicker #d1 [(ngModel)]=\"model1\" #c1=\"ngModel\"></ngb-datepicker>\r\n\r\n                        <hr />\r\n                        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"model1 = today\">Select Today</button>\r\n                        <hr />\r\n\r\n                        <pre>Model: {{ model1 | json }}</pre>\r\n                        <pre>State: {{ c1.status }}</pre>\r\n                    </div>\r\n\r\n                    <div class=\"col-6\">\r\n                        <form class=\"form-inline\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group\">\r\n                                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"d2\" #c2=\"ngModel\"\r\n                                        [(ngModel)]=\"model11\" ngbDatepicker #d2=\"ngbDatepicker\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\"><i\r\n                                                class=\"fa fa-calendar\"></i></button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n\r\n                        <hr />\r\n                        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"model11 = today\">Select Today</button>\r\n                        <hr />\r\n\r\n\r\n                        <pre>Model: {{ model11 | json }}</pre>\r\n                        <pre>State: {{ c2.status }}</pre>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Custom day view</h4>\r\n                <p>This datepicker uses a custom template to display days. All week-ends are displayed with an orange\r\n                    background.</p>\r\n\r\n                <form class=\"form-inline\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model4\"\r\n                                ngbDatepicker [dayTemplate]=\"customDay\" [markDisabled]=\"isDisabled\" #d=\"ngbDatepicker\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"><i\r\n                                        class=\"fa fa-calendar\"></i></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n                <ng-template #customDay let-date let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\"\r\n                    let-focused=\"focused\">\r\n                    <span class=\"custom-day\" [class.weekend]=\"isWeekend(date)\" [class.focused]=\"focused\"\r\n                        [class.bg-primary]=\"selected\" [class.hidden]=\"date.month !== currentMonth\" [class.text-muted]=\"disabled\">\r\n                        {{ date.day }}\r\n                    </span>\r\n                </ng-template>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Footer template</h4>\r\n                <p>This datepicker uses a footer template which is presented inside datepicker. Today and close buttons\r\n                    used as an example.</p>\r\n\r\n                <form class=\"form-inline\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp1\" [(ngModel)]=\"model5\"\r\n                                ngbDatepicker [footerTemplate]=\"footerTemplate\" #d1=\"ngbDatepicker\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\"><i\r\n                                        class=\"fa fa-calendar\"></i></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n                <ng-template #footerTemplate>\r\n                    <hr class=\"my-0\">\r\n                    <button class=\"btn btn-primary btn-sm m-2 float-left\" (click)=\"model5 = today5; d1.close()\">Today</button>\r\n                    <button class=\"btn btn-secondary btn-sm m-2 float-right\" (click)=\"d1.close()\">Close</button>\r\n                </ng-template>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/dropdown-collapse/dropdown-collapse.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/dropdown-collapse/dropdown-collapse.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Dropdown</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">This is basic Dropdown</h6>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t<div ngbDropdown class=\"d-inline-block\">\r\n\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\tclass=\"btn btn-outline-primary\"\r\n\t\t\t\t\t\t\t\tid=\"dropdownBasic1\"\r\n\t\t\t\t\t\t\t\tngbDropdownToggle\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\tToggle dropdown\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Action - 1</button>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Another Action</button>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Something else is here</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col text-right\">\r\n\t\t\t\t\t\t<div ngbDropdown placement=\"top-right\" class=\"d-inline-block\">\r\n\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\tclass=\"btn btn-outline-primary\"\r\n\t\t\t\t\t\t\t\tid=\"dropdownBasic2\"\r\n\t\t\t\t\t\t\t\tngbDropdownToggle\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\tToggle dropup\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Action - 1</button>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Another Action</button>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Something else is here</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Manual triggers</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">\r\n\t\t\t\t\tYou can easily control dropdowns programmatically using the exported\r\n\t\t\t\t\tdropdown instance.\r\n\t\t\t\t</h6>\r\n\t\t\t\t<div class=\"d-inline-block\" ngbDropdown #myDrop=\"ngbDropdown\">\r\n\t\t\t\t\t<button\r\n\t\t\t\t\t\tclass=\"btn btn-outline-primary\"\r\n\t\t\t\t\t\tid=\"dropdownManual\"\r\n\t\t\t\t\t\tngbDropdownToggle\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tToggle dropdown\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<div ngbDropdownMenu aria-labelledby=\"dropdownManual\">\r\n\t\t\t\t\t\t<button class=\"dropdown-item\">Action - 1</button>\r\n\t\t\t\t\t\t<button class=\"dropdown-item\">Another Action</button>\r\n\t\t\t\t\t\t<button class=\"dropdown-item\">Something else is here</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<button\r\n\t\t\t\t\t\tclass=\"btn btn-outline-success btn-sm\"\r\n\t\t\t\t\t\t(click)=\"$event.stopPropagation(); myDrop.open()\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tOpen from outside\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button\r\n\t\t\t\t\t\tclass=\"btn btn-outline-danger btn-sm\"\r\n\t\t\t\t\t\t(click)=\"$event.stopPropagation(); myDrop.close()\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tClose from outside\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-md-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Collapse</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">\r\n\t\t\t\t\tThe NgbCollapse directive provides a simple way to hide and show an\r\n\t\t\t\t\telement with animations.\r\n\t\t\t\t</h6>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<button\r\n\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\tclass=\"btn btn-outline-primary\"\r\n\t\t\t\t\t\t(click)=\"isCollapsed = !isCollapsed\"\r\n\t\t\t\t\t\t[attr.aria-expanded]=\"!isCollapsed\"\r\n\t\t\t\t\t\taria-controls=\"collapseExample\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tToggle\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</p>\r\n\t\t\t\t<blockquote id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n\t\t\t\t\tYou can collapse this card by clicking Toggle\r\n\t\t\t\t</blockquote>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-md-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Button groups and split buttons</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">\r\n\t\t\t\t\tThBootstrap split buttons and dropdowns on button groups are supported\r\n\t\t\t\t\twith the existing dropdown directives.\r\n\t\t\t\t</h6>\r\n\r\n\t\t\t\t<div class=\"btn-group mr-3\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-success mr-0\">\r\n\t\t\t\t\t\tPlain ol' button\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<div\r\n\t\t\t\t\t\tclass=\"btn-group\"\r\n\t\t\t\t\t\tngbDropdown\r\n\t\t\t\t\t\trole=\"group\"\r\n\t\t\t\t\t\taria-label=\"Button group with nested dropdown\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\t<button class=\"btn btn-outline-primary\" ngbDropdownToggle>\r\n\t\t\t\t\t\t\tDrop me\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<div class=\"dropdown-menu\" ngbDropdownMenu>\r\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">One</button>\r\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Two</button>\r\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Four!</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"btn-group mr-3\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary mr-0\">Split me</button>\r\n\t\t\t\t\t<div\r\n\t\t\t\t\t\tclass=\"btn-group\"\r\n\t\t\t\t\t\tngbDropdown\r\n\t\t\t\t\t\trole=\"group\"\r\n\t\t\t\t\t\taria-label=\"Button group with nested dropdown\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\tclass=\"btn btn-primary dropdown-toggle-split\"\r\n\t\t\t\t\t\t\tngbDropdownToggle\r\n\t\t\t\t\t\t></button>\r\n\t\t\t\t\t\t<div class=\"dropdown-menu\" ngbDropdownMenu>\r\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">One</button>\r\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Two</button>\r\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Four!</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"btn-group mr-3\">\r\n\t\t\t\t\t<div\r\n\t\t\t\t\t\tclass=\"btn-group\"\r\n\t\t\t\t\t\tngbDropdown\r\n\t\t\t\t\t\trole=\"group\"\r\n\t\t\t\t\t\taria-label=\"Button group with nested dropdown\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\t<button class=\"btn btn-outline-danger mr-0\" ngbDropdownToggle>\r\n\t\t\t\t\t\t\tSelect me\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<div class=\"dropdown-menu\" ngbDropdownMenu>\r\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">One</button>\r\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Two</button>\r\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Four!</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div\r\n\t\t\t\t\t\tclass=\"btn-group\"\r\n\t\t\t\t\t\tngbDropdown\r\n\t\t\t\t\t\trole=\"group\"\r\n\t\t\t\t\t\taria-label=\"Button group with nested dropdown\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\t<button class=\"btn btn-outline-success\" ngbDropdownToggle>\r\n\t\t\t\t\t\t\tOr me\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<div class=\"dropdown-menu\" ngbDropdownMenu>\r\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">One</button>\r\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Two</button>\r\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Four!</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-md-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Mixed menu items and form <span class=\"badge badge-success text-white\">New</span></h4>\r\n\t\t\t\t<div ngbDropdown class=\"d-inline-block\">\r\n\t\t\t\t      <button class=\"btn btn-outline-primary\" id=\"dropdownForm1\" ngbDropdownToggle>Toggle dropdown</button>\r\n\t\t\t\t      <div ngbDropdownMenu aria-labelledby=\"dropdownForm1\">\r\n\t\t\t\t       \t<form class=\"px-4 py-3\">\r\n\t\t\t\t\t          \t<div class=\"form-group\">\r\n\t\t\t\t\t\t            <label for=\"exampleDropdownFormEmail1\">Email address</label>\r\n\t\t\t\t\t\t            <input type=\"email\" class=\"form-control\" id=\"exampleDropdownFormEmail1\" placeholder=\"email@example.com\">\r\n\t\t\t\t\t          \t</div>\r\n\t\t\t\t\t          \t<div class=\"form-group\">\r\n\t\t\t\t\t\t            <label for=\"exampleDropdownFormPassword1\">Password</label>\r\n\t\t\t\t\t\t            <input type=\"password\" class=\"form-control\" id=\"exampleDropdownFormPassword1\" placeholder=\"Password\">\r\n\t\t\t\t\t          \t</div>\r\n\t\t\t\t\t          \t<div class=\"form-check\">\r\n\t\t\t\t\t\t            <input type=\"checkbox\" class=\"form-check-input\" id=\"dropdownCheck\">\r\n\t\t\t\t\t\t            <label class=\"form-check-label\" for=\"dropdownCheck\">\r\n\t\t\t\t\t\t              Remember me\r\n\t\t\t\t\t\t            </label>\r\n\t\t\t\t          \t\t</div>\r\n\t\t\t\t          \t\t<button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\r\n\t\t\t\t        \t</form>\r\n\t\t\t\t        \t<div class=\"dropdown-divider\"></div>\r\n\t\t\t\t        \t<button ngbDropdownItem>New around here? Sign up</button>\r\n\t\t\t\t        \t<button ngbDropdownItem>Forgot password?</button>\r\n\t\t\t\t      </div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-md-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Dynamic positioning in a navbar <span class=\"badge badge-success text-white\">New</span></h4>\r\n\t\t\t\t<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\r\n\t\t\t\t\t<span class=\"navbar-brand\">Dropdowns in navbar</span>\r\n\t\t\t\t\t<button class=\"navbar-toggler\" type=\"button\" aria-controls=\"navbarContent\" [attr.aria-expanded]=\"!collapsed\" aria-label=\"Toggle navigation\" (click)=\"collapsed = !collapsed\">\r\n\t\t\t\t\t    <span class=\"navbar-toggler-icon\"></span>\r\n\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t<div class=\"navbar-collapse\" [class.collapse]=\"collapsed\" id=\"navbarContent\">\r\n\t\t\t\t\t    \t<ul class=\"navbar-nav ml-auto\">\r\n\t\t\t\t\t      \t<li class=\"nav-item\" ngbDropdown>\r\n\t\t\t\t\t        \t\t<a class=\"nav-link\" style=\"cursor: pointer\" ngbDropdownToggle id=\"navbarDropdown1\" role=\"button\">\r\n\t\t\t\t\t          \t\t\tStatic\r\n\t\t\t\t\t        \t\t</a>\r\n\t\t\t\t\t        \t\t<div ngbDropdownMenu aria-labelledby=\"navbarDropdown1\" class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t          \t<a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Action</a>\r\n\t\t\t\t\t\t\t          \t<a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Another action</a>\r\n\t\t\t\t\t\t\t          \t<a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Something else here</a>\r\n\t\t\t\t\t        \t\t</div>\r\n\t\t\t\t\t      \t</li>\r\n\r\n\t\t\t\t\t      \t<li class=\"nav-item\" ngbDropdown>\r\n\t\t\t\t\t\t\t      <a class=\"nav-link\" style=\"cursor: pointer\" ngbDropdownToggle id=\"navbarDropdown2\" role=\"button\">\r\n\t\t\t\t\t\t\t          Static right\r\n\t\t\t\t\t\t\t      </a>\r\n\t\t\t\t\t        \t\t<div ngbDropdownMenu aria-labelledby=\"navbarDropdown2\" class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t\t\t\t\t\t          \t<a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Action</a>\r\n\t\t\t\t\t\t\t          \t<a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Another action</a>\r\n\t\t\t\t\t\t\t          \t<a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Something else here</a>\r\n\t\t\t\t\t        \t\t</div>\r\n\t\t\t\t\t     \t\t</li>\r\n\r\n\t\t\t\t\t      \t<li class=\"nav-item\" ngbDropdown display=\"dynamic\" placement=\"bottom-right\">\r\n\t\t\t\t\t\t\t      <a class=\"nav-link\" style=\"cursor: pointer\" ngbDropdownToggle id=\"navbarDropdown3\" role=\"button\">\r\n\t\t\t\t\t\t\t          Dynamic\r\n\t\t\t\t\t\t\t      </a>\r\n\t\t\t\t\t        \t\t<div ngbDropdownMenu aria-labelledby=\"navbarDropdown3\" class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t          \t<a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Action</a>\r\n\t\t\t\t\t\t\t          \t<a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Another action</a>\r\n\t\t\t\t\t\t\t          \t<a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Something else here</a>\r\n\t\t\t\t\t        \t\t</div>\r\n\t\t\t\t\t      \t</li>\r\n\t\t\t\t\t    \t</ul>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t</nav>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/modal/modal.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/modal/modal.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Modal with default options</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">This is basic toggletype accordion</h6>\r\n\t\t\t\t<!--- ------------------\r\n\t\t\t\t\tModal with date picker (NgbdModalBasicComponent)  \r\n\t\t\t\t\t---------------------->\r\n\t\t\t\t<ng-template #content1 let-modal>\r\n\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t<h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"dateOfBirth\">Date of birth</label>\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-secondary\" (click)=\"dp.toggle()\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open1(content1)\">Launch demo modal</button>\r\n\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"m-t-20\">{{ closeResult }}</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--- ------------------\r\n\tComponent as Content (NgbdModalBasicComponent)  \r\n\t---------------------->\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Component as Content</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">You can pass an existing component as content of the modal window.</h6>\r\n\t\t\t\t<ng-template #content2 let-modal>\r\n\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t<h4 class=\"modal-title\">Modal title</h4>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-body\"><p>One fine body&hellip;</p></div>\r\n\t\t\t\t\t<div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-inverse\" (click)=\"modal.dismiss('Cross click')\">Close</button></div>\r\n\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open2(content2)\">Launch demo modal</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--- ------------------\r\n\tModal With Options (NgbdModalBasicComponent)  \r\n\t---------------------->\r\n\t<div class=\"col-md-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Modal With Options</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">You can pass an existing component as content of the modal window.</h6>\r\n\t\t\t\t<ng-template #content3 let-modal>\r\n\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t<h4 class=\"modal-title\">Modal title</h4>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t<p>One fine body&hellip;</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openWindowCustomClass(content3)\">Modal with window custom class</button>\r\n\t\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openBackDropCustomClass(content3)\">\r\n\t\t\t\t\tModal with backdrop custom class\r\n\t\t\t\t</button>\r\n\t\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openSm(content3)\">Small modal</button>\r\n\t\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openLg(content3)\">Large modal</button>\r\n\t\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openVerticallyCentered(content3)\">Modal vertically centered</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t<!--- ------------------\r\n\tStacked modals\r\n\t---------------------->\r\n\t<div  class=\"col-md-12\">\r\n\t \t<div class=\"card\">\r\n\t \t\t<div class=\"card-body\">\r\n\t \t\t\t<h4 class=\"card-title\">Stacked modals <span class=\"badge badge-success text-white\">New</span></h4>\r\n\r\n\t \t\t\t<ng-template #contentstack let-modal>\r\n\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t<h4 class=\"modal-title\">Modal title</h4>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t<p>One fine body&hellip;</p>\r\n\t\t\t\t\t\t<p><button class=\"btn btn-lg btn-outline-primary\" (click)=\"opensubmodal(contentsubmodal)\">Launch demo modal</button></p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\r\n\r\n\t\t\t\t<ng-template #contentsubmodal let-modal>\r\n\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t<h4 class=\"modal-title\">Modal title</h4>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t<p>Sub Modal is open</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\r\n\t \t\t\t<button class=\"btn btn-lg btn-outline-primary\" (click)=\"opensubmodal(contentstack)\">Launch demo modal</button>\r\n\t \t\t</div>\r\n\t \t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/pagination/pagination.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/pagination/pagination.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Default pagination</h4>\r\n                <h6 class=\"card-subtitle\">This is basic Default pagination</h6>\r\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\r\n\r\n\t\t\t\t<div>directionLinks = false</div>\r\n\t\t\t\t<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\r\n\r\n\t\t\t\t<div>boundaryLinks = true</div>\r\n\t\t\t\t<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n\r\n\t\t\t\t<hr>\r\n\r\n\t\t\t\t<pre>Current page: {{page}}</pre>\r\n  \t\t\t</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Advanced pagination</h4>\r\n                <h6 class=\"card-subtitle\">This is Advanced pagination</h6>\r\n                <div>maxSize = 5, rotate = false</div>\r\n                <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n\r\n\t\t\t\t<div>maxSize = 5, rotate = true</div>\r\n\t\t\t\t<ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n\r\n\t\t\t\t<div>maxSize = 5, rotate = true, ellipses = false</div>\r\n\t\t\t\t<ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n\r\n\t\t\t\t<hr>\r\n\r\n\t\t\t\t<pre>Current page: {{page2}}</pre>\r\n  \t\t\t</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Pagination size</h4>\r\n                <h6 class=\"card-subtitle\">This is Pagination size</h6>\r\n                <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"lg\"></ngb-pagination>\r\n\t\t\t\t<ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\"></ngb-pagination>\r\n\t\t\t\t<ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"sm\"></ngb-pagination>\r\n  \t\t\t</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Pagination Alignment</h4>\r\n                <h6 class=\"card-subtitle\">Change the alignment of pagination components with flexbox utilities.</h6>\r\n                <ngb-pagination class=\"d-flex justify-content-start\" [collectionSize]=\"70\" [(page)]=\"page\"></ngb-pagination>\r\n                <ngb-pagination class=\"d-flex justify-content-center\" [collectionSize]=\"70\" [(page)]=\"page\"></ngb-pagination>\r\n                <ngb-pagination class=\"d-flex justify-content-end\" [collectionSize]=\"70\" [(page)]=\"page\"></ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Disabled pagination</h4>\r\n                <h6 class=\"card-subtitle\">This is Disabled pagination</h6>\r\n                <p>Pagination control can be disabled:</p>\r\n\t\t\t\t<ngb-pagination [collectionSize]=\"70\" [(page)]=\"disablepage\" [disabled]='isDisabled'></ngb-pagination>\r\n\t\t\t\t<hr>\r\n\t\t\t\t<button class=\"btn btn-sm btn-outline-primary\" (click)=\"toggleDisabled()\">\r\n\t\t\t\t  Toggle disabled\r\n\t\t\t\t</button>\r\n  \t\t\t</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Custom links <span class=\"badge badge-success text-white\">New</span></h4>\r\n                <h6 class=\"card-subtitle\">A pagination with customized links:</h6>\r\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"pagecustom\" aria-label=\"Custom pagination\">\r\n                      <ng-template ngbPaginationPrevious>Prev</ng-template>\r\n                      <ng-template ngbPaginationNext>Next</ng-template>\r\n                      <ng-template ngbPaginationNumber let-p>{{ getPageSymbol(p) }}</ng-template>\r\n                </ngb-pagination>\r\n                    <hr>\r\n\r\n                    <pre>Current page: {{pagecustom}}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/popover-tooltip/popover-tooltip.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/popover-tooltip/popover-tooltip.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Quick and easy popovers</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">This is basic popovers</h6>\r\n\t\t\t\t<div class=\"button-box\">\r\n\t\t\t\t\t<button\r\n\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\tclass=\"btn btn-secondary\"\r\n\t\t\t\t\t\tplacement=\"top\"\r\n\t\t\t\t\t\tngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n\t\t\t\t\t\tpopoverTitle=\"Popover on top\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tPopover on top\r\n\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t<button\r\n\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\tclass=\"btn btn-secondary\"\r\n\t\t\t\t\t\tplacement=\"right\"\r\n\t\t\t\t\t\tngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n\t\t\t\t\t\tpopoverTitle=\"Popover on right\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tPopover on right\r\n\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t<button\r\n\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\tclass=\"btn btn-secondary\"\r\n\t\t\t\t\t\tplacement=\"bottom\"\r\n\t\t\t\t\t\tngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n\t\t\t\t\t\tpopoverTitle=\"Popover on bottom\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tPopover on bottom\r\n\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t<button\r\n\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\tclass=\"btn btn-secondary\"\r\n\t\t\t\t\t\tplacement=\"left\"\r\n\t\t\t\t\t\tngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n\t\t\t\t\t\tpopoverTitle=\"Popover on left\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tPopover on left\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">HTML and bindings in popovers</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">\r\n\t\t\t\t\tPopovers can contain any arbitrary HTML, Angular bindings and even\r\n\t\t\t\t\tdirectives! Simply enclose desired content in a\r\n\t\t\t\t\t<code>&lt;ng-template&gt;</code> element.\r\n\t\t\t\t</h6>\r\n\t\t\t\t<ng-template #popContent\r\n\t\t\t\t\t>Hello, <b>{{ name }}</b\r\n\t\t\t\t\t>!</ng-template\r\n\t\t\t\t>\r\n\t\t\t\t<button\r\n\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\tclass=\"btn btn-secondary\"\r\n\t\t\t\t\t[ngbPopover]=\"popContent\"\r\n\t\t\t\t\tpopoverTitle=\"Fancy content\"\r\n\t\t\t\t>\r\n\t\t\t\t\tI've got markup and bindings in my popover!\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Custom triggers</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">\r\n\t\t\t\t\tYou can easily override open and close triggers by specifying event\r\n\t\t\t\t\tnames (separated by <code>:</code>) in the\r\n\t\t\t\t\t<code>triggers</code> property.\r\n\t\t\t\t</h6>\r\n\t\t\t\t<button\r\n\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\tclass=\"btn btn-secondary\"\r\n\t\t\t\t\tngbPopover=\"You see, I show up on hover!\"\r\n\t\t\t\t\ttriggers=\"mouseenter:mouseleave\"\r\n\t\t\t\t\tpopoverTitle=\"Pop title\"\r\n\t\t\t\t>\r\n\t\t\t\t\tHover over me!\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Manual triggers</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">\r\n\t\t\t\t\tAlternatively you can take full manual control over popover opening /\r\n\t\t\t\t\tclosing events.\r\n\t\t\t\t</h6>\r\n\t\t\t\t<button\r\n\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\r\n\t\t\t\t\tngbPopover=\"What a great tip!\"\r\n\t\t\t\t\t[autoClose]=\"false\"\r\n\t\t\t\t\ttriggers=\"manual\"\r\n\t\t\t\t\t#p1=\"ngbPopover\"\r\n\t\t\t\t\t(click)=\"p1.open()\"\r\n\t\t\t\t\tpopoverTitle=\"Pop title\"\r\n\t\t\t\t>\r\n\t\t\t\t\tClick me to open a popover\r\n\t\t\t\t</button>\r\n\t\t\t\t<button\r\n\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\r\n\t\t\t\t\t(click)=\"p1.close()\"\r\n\t\t\t\t>\r\n\t\t\t\t\tClick me to close a popover\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Automatic closing with keyboard and mouse</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">\r\n\t\t\t\t\tAs for some other popup-based widgets, you can set the popover to\r\n\t\t\t\t\tclose automatically upon some events.\r\n\t\t\t\t</h6>\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li class=\"mb-2\">\r\n\t\t\t\t\t\tclick inside:\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\r\n\t\t\t\t\t\t\tpopoverTitle=\"Pop title\"\r\n\t\t\t\t\t\t\t[autoClose]=\"'inside'\"\r\n\t\t\t\t\t\t\tngbPopover=\"Click inside or press Escape to close\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tClick to toggle\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li class=\"mb-2\">\r\n\t\t\t\t\t\tclick outside:\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\r\n\t\t\t\t\t\t\tpopoverTitle=\"Pop title\"\r\n\t\t\t\t\t\t\t[autoClose]=\"'outside'\"\r\n\t\t\t\t\t\t\tngbPopover=\"Click outside or press Escape to close\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tClick to toggle\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li class=\"mb-2\">\r\n\t\t\t\t\t\tall clicks:\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\r\n\t\t\t\t\t\t\tpopoverTitle=\"Pop title\"\r\n\t\t\t\t\t\t\t[autoClose]=\"true\"\r\n\t\t\t\t\t\t\tngbPopover=\"Click anywhere or press Escape to close (try the toggling element too)\"\r\n\t\t\t\t\t\t\t#popover3=\"ngbPopover\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tClick to toggle\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t&nbsp;\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\r\n\t\t\t\t\t\t\t(click)=\"popover3.toggle()\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tClick to toggle the external popover\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Context and manual triggers</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">\r\n\t\t\t\t\tYou can optionally pass in a context when manually triggering a\r\n\t\t\t\t\tpopover.\r\n\t\t\t\t</h6>\r\n\t\t\t\t<ng-template #popContent let-greeting=\"greeting\"\r\n\t\t\t\t\t>{{ greeting }}, <b>{{ name }}</b\r\n\t\t\t\t\t>!</ng-template\r\n\t\t\t\t>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tHow would you like to greet\r\n\t\t\t\t\t<strong\r\n\t\t\t\t\t\t[ngbPopover]=\"popContent\"\r\n\t\t\t\t\t\tpopoverTitle=\"Greeting\"\r\n\t\t\t\t\t\t#p=\"ngbPopover\"\r\n\t\t\t\t\t\ttriggers=\"manual\"\r\n\t\t\t\t\t\t>me</strong\r\n\t\t\t\t\t>?\r\n\t\t\t\t</p>\r\n\t\t\t\t<button\r\n\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\r\n\t\t\t\t\t(click)=\"changeGreeting({ greeting: 'Bonjour' })\"\r\n\t\t\t\t>\r\n\t\t\t\t\tFrench\r\n\t\t\t\t</button>\r\n\t\t\t\t<button\r\n\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\r\n\t\t\t\t\t(click)=\"changeGreeting({ greeting: 'Gutentag' })\"\r\n\t\t\t\t>\r\n\t\t\t\t\tGerman\r\n\t\t\t\t</button>\r\n\t\t\t\t<button\r\n\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\r\n\t\t\t\t\t(click)=\"changeGreeting({ greeting: 'Hello' })\"\r\n\t\t\t\t>\r\n\t\t\t\t\tEnglish\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Popover Visibility Events</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">\r\n\t\t\t\t\tYou can optionally pass in a context when manually triggering a\r\n\t\t\t\t\tpopover.\r\n\t\t\t\t</h6>\r\n\t\t\t\t<button\r\n\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\tclass=\"btn btn-outline-secondary\"\r\n\t\t\t\t\tplacement=\"top\"\r\n\t\t\t\t\tngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n\t\t\t\t\tpopoverTitle=\"Popover on top\"\r\n\t\t\t\t\t#popover=\"ngbPopover\"\r\n\t\t\t\t\t(shown)=\"recordShown()\"\r\n\t\t\t\t\t(hidden)=\"recordHidden()\"\r\n\t\t\t\t>\r\n\t\t\t\t\tOpen Popover\r\n\t\t\t\t</button>\r\n\t\t\t\t<hr />\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\tPopover is currently:\r\n\t\t\t\t\t\t<code>{{ popover.isOpen() ? 'open' : 'closed' }}</code>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\tLast shown at: <code>{{ lastShown | date: 'h:mm:ss' }}</code>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\tLast hidden at: <code>{{ lastHidden | date: 'h:mm:ss' }}</code>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Append popover in the body</h4>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tSet the <code>container</code> property to \"body\" to have the popover\r\n\t\t\t\t\tbe appended to the body instead of the triggering element's parent.\r\n\t\t\t\t\tThis option is useful if the element triggering the popover is inside\r\n\t\t\t\t\tan element that clips its contents (i.e.\r\n\t\t\t\t\t<code>overflow: hidden</code>).\r\n\t\t\t\t</p>\r\n\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t<div class=\"card px-1 py-5\">\r\n\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary mb-2\"\r\n\t\t\t\t\t\t\t\tngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\tDefault popover\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\r\n\t\t\t\t\t\t\t\tngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n\t\t\t\t\t\t\t\tcontainer=\"body\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\tPopover appended to body\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Open and close delays <span class=\"badge badge-success text-white\">New</span></h4>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tWhen using non-manual triggers, you can control the delay to open and close the popover through the <code>openDelay</code> and <code>closeDelay</code> properties. Note that the <code>autoClose</code> feature does not use the close delay, it closes the popover immediately.\r\n\t\t\t\t</p>\r\n\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary mr-2\"\r\n\t\t\t\t  ngbPopover=\"You see, I show up after 300ms and disappear after 500ms!\"\r\n\t\t\t\t  [openDelay]=\"300\" [closeDelay]=\"500\" triggers=\"mouseenter:mouseleave\">\r\n\t\t\t\t  Hover 300ms here\r\n\t\t\t\t</button>\r\n\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary mr-2\"\r\n\t\t\t\t  ngbPopover=\"You see, I show up after 1s and disappear after 2s!\"\r\n\t\t\t\t  [openDelay]=\"1000\" [closeDelay]=\"2000\" triggers=\"mouseenter:mouseleave\">\r\n\t\t\t\t  Hover 1s here\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<h4 class=\"card-title\">Tooltips</h4>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Custom and manual triggers</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">\r\n\t\t\t\t\tYou can easily override open and close triggers by specifying event\r\n\t\t\t\t\tnames (separated by :) in the triggers property.\r\n\t\t\t\t</h6>\r\n\t\t\t\t<button\r\n\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\tclass=\"btn btn-secondary\"\r\n\t\t\t\t\tngbTooltip=\"You see, I show up on click!\"\r\n\t\t\t\t\ttriggers=\"click:blur\"\r\n\t\t\t\t>\r\n\t\t\t\t\tClick me!\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Quick and easy tooltips</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">This is Quick and easy tooltips</h6>\r\n\t\t\t\t<div class=\"button-box\">\r\n\t\t\t\t\t<button\r\n\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\tclass=\"btn btn-secondary\"\r\n\t\t\t\t\t\tplacement=\"top\"\r\n\t\t\t\t\t\tngbTooltip=\"Tooltip on top\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tTooltip on top\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button\r\n\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\tclass=\"btn btn-secondary\"\r\n\t\t\t\t\t\tplacement=\"right\"\r\n\t\t\t\t\t\tngbTooltip=\"Tooltip on right\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tTooltip on right\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button\r\n\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\tclass=\"btn btn-secondary\"\r\n\t\t\t\t\t\tplacement=\"bottom\"\r\n\t\t\t\t\t\tngbTooltip=\"Tooltip on bottom\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tTooltip on bottom\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button\r\n\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\tclass=\"btn btn-secondary\"\r\n\t\t\t\t\t\tplacement=\"left\"\r\n\t\t\t\t\t\tngbTooltip=\"Tooltip on left\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tTooltip on left\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">HTML and bindings in tooltips</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">\r\n\t\t\t\t\tTooltips can contain any arbitrary HTML, Angular bindings and even\r\n\t\t\t\t\tdirectives! Simply enclose desired content in a\r\n\t\t\t\t\t<code>ng-template</code> element.\r\n\t\t\t\t</h6>\r\n\t\t\t\t<ng-template #tipContent\r\n\t\t\t\t\t>Hello, <b>{{ name }}</b\r\n\t\t\t\t\t>!</ng-template\r\n\t\t\t\t>\r\n\t\t\t\t<button\r\n\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\tclass=\"btn btn-secondary\"\r\n\t\t\t\t\t[ngbTooltip]=\"tipContent\"\r\n\t\t\t\t>\r\n\t\t\t\t\tI've got markup and bindings in my tooltip!\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Custom and manual triggers</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">\r\n\t\t\t\t\tYou can easily override open and close triggers by specifying event\r\n\t\t\t\t\tnames (separated by :) in the triggers property.\r\n\t\t\t\t</h6>\r\n\t\t\t\t<button\r\n\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\tclass=\"btn btn-outline-secondary\"\r\n\t\t\t\t\tngbTooltip=\"You see, I show up on click!\"\r\n\t\t\t\t\ttriggers=\"click:blur\"\r\n\t\t\t\t>\r\n\t\t\t\t\tClick me!\r\n\t\t\t\t</button>\r\n\t\t\t\t<hr />\r\n\t\t\t\t<button\r\n\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\r\n\t\t\t\t\tngbTooltip=\"What a great tip!\"\r\n\t\t\t\t\t[autoClose]=\"false\"\r\n\t\t\t\t\ttriggers=\"manual\"\r\n\t\t\t\t\t#t=\"ngbTooltip\"\r\n\t\t\t\t\t(click)=\"t.open()\"\r\n\t\t\t\t>\r\n\t\t\t\t\tClick me to open a tooltip\r\n\t\t\t\t</button>\r\n\t\t\t\t<button\r\n\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\r\n\t\t\t\t\t(click)=\"t.close()\"\r\n\t\t\t\t>\r\n\t\t\t\t\tClick me to close a tooltip\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Automatic closing with keyboard and mouse</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">\r\n\t\t\t\t\tAs for some other popup-based widgets, you can set the tooltip to\r\n\t\t\t\t\tclose automatically upon some events.\r\n\t\t\t\t</h6>\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li class=\"mb-2\">\r\n\t\t\t\t\t\tclick inside:\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\r\n\t\t\t\t\t\t\ttriggers=\"click\"\r\n\t\t\t\t\t\t\t[autoClose]=\"'inside'\"\r\n\t\t\t\t\t\t\tngbTooltip=\"Click inside or press Escape to close\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tClick to toggle\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li class=\"mb-2\">\r\n\t\t\t\t\t\tclick outside:\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\r\n\t\t\t\t\t\t\ttriggers=\"click\"\r\n\t\t\t\t\t\t\t[autoClose]=\"'outside'\"\r\n\t\t\t\t\t\t\tngbTooltip=\"Click outside or press Escape to close\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tClick to toggle\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li class=\"mb-2\">\r\n\t\t\t\t\t\tall clicks:\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\r\n\t\t\t\t\t\t\ttriggers=\"click\"\r\n\t\t\t\t\t\t\t[autoClose]=\"true\"\r\n\t\t\t\t\t\t\tngbTooltip=\"Click anywhere or press Escape to close (try the toggling element too)\"\r\n\t\t\t\t\t\t\t#tooltip3=\"ngbTooltip\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tClick to toggle\r\n\t\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t\t&nbsp;\r\n\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\r\n\t\t\t\t\t\t\t(click)=\"tooltip3.toggle()\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tClick to toggle the external tooltip\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Context and manual triggers</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">\r\n\t\t\t\t\tYou can optionally pass in a context when manually triggering a\r\n\t\t\t\t\ttooltip.\r\n\t\t\t\t</h6>\r\n\t\t\t\t<ng-template #tipContent let-greeting=\"greeting\"\r\n\t\t\t\t\t>{{ greeting }}, <b>{{ name }}</b\r\n\t\t\t\t\t>!</ng-template\r\n\t\t\t\t>\r\n\t\t\t\t<button\r\n\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\r\n\t\t\t\t\t[ngbTooltip]=\"tipContent\"\r\n\t\t\t\t\ttriggers=\"manual\"\r\n\t\t\t\t\t#t1=\"ngbTooltip\"\r\n\t\t\t\t\t(click)=\"toggleWithGreeting(t1, 'Bonjour')\"\r\n\t\t\t\t>\r\n\t\t\t\t\tFrench\r\n\t\t\t\t</button>\r\n\t\t\t\t<button\r\n\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\r\n\t\t\t\t\t[ngbTooltip]=\"tipContent\"\r\n\t\t\t\t\ttriggers=\"manual\"\r\n\t\t\t\t\t#t2=\"ngbTooltip\"\r\n\t\t\t\t\t(click)=\"toggleWithGreeting(t2, 'Gutentag')\"\r\n\t\t\t\t>\r\n\t\t\t\t\tGerman\r\n\t\t\t\t</button>\r\n\t\t\t\t<button\r\n\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\r\n\t\t\t\t\t[ngbTooltip]=\"tipContent\"\r\n\t\t\t\t\ttriggers=\"manual\"\r\n\t\t\t\t\t#t3=\"ngbTooltip\"\r\n\t\t\t\t\t(click)=\"toggleWithGreeting(t3, 'Hello')\"\r\n\t\t\t\t>\r\n\t\t\t\t\tEnglish\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Append tooltip in the body</h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">\r\n\t\t\t\t\tSet the container property to \"body\" to have the tooltip be appended\r\n\t\t\t\t\tto the body instead of the triggering element's parent. This option is\r\n\t\t\t\t\tuseful if the element triggering the tooltip is inside an element that\r\n\t\t\t\t\tclips its contents (i.e. overflow: hidden).\r\n\t\t\t\t</h6>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"card px-1 py-5\">\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary mb-2\"\r\n\t\t\t\t\t\t\tngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tDefault tooltip\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\r\n\t\t\t\t\t\t\tngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n\t\t\t\t\t\t\tcontainer=\"body\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tTooltip appended to body\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4 class=\"card-title\">Tooltip with custom class <span class=\"badge badge-success text-white\">New</span></h4>\r\n\t\t\t\t<h6 class=\"card-subtitle\">\r\n\t\t\t\t\tYou can optionally pass in a custom class via tooltipClass\r\n\t\t\t\t</h6>\r\n\t\t\t\t<button\r\n\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\tclass=\"btn btn-outline-secondary\"\r\n\t\t\t\t\tngbTooltip=\"Nice class!\"\r\n\t\t\t\t\ttooltipClass=\"my-custom-class\"\r\n\t\t\t\t>\r\n\t\t\t\t\tTooltip with custom class\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/progressbar/progressbar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/progressbar/progressbar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    \r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Basic Progressbar</h4>\r\n                <h6 class=\"card-subtitle\">This is Basic Progressbar</h6>\r\n                <p><ngb-progressbar type=\"success\" [value]=\"25\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"info\" [value]=\"50\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"primary\" [value]=\"150\" [max]=\"200\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"inverse\" [value]=\"150\" [max]=\"150\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"warning\" [value]=\"75\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"danger\" [value]=\"100\"></ngb-progressbar></p>\r\n                  \r\n  \t\t\t</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Progress bars with current value labels</h4>\r\n                <h6 class=\"card-subtitle\">This is Progress bars with current value labels</h6>\r\n                <p><ngb-progressbar showValue=\"true\" type=\"success\" [value]=\"25\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar [showValue]=\"true\" type=\"info\" [value]=\"50\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar showValue=\"true\" type=\"primary\" [value]=\"150\" [max]=\"200\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar [showValue]=\"true\" type=\"inverse\" [value]=\"150\" [max]=\"150\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar showValue=\"true\" type=\"warning\" [value]=\"150\" [max]=\"200\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar [showValue]=\"true\" type=\"danger\" [value]=\"150\" [max]=\"150\"></ngb-progressbar></p>\r\n  \t\t\t</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Striped progress bars</h4>\r\n                <h6 class=\"card-subtitle\">This is Striped progress</h6>\r\n                <p><ngb-progressbar type=\"success\" [value]=\"25\" [striped]=\"true\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"info\" [value]=\"50\" [striped]=\"true\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\"></ngb-progressbar></p>\r\n  \t\t\t</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Progress bars with custom labels</h4>\r\n                <h6 class=\"card-subtitle\">This is basic Default pagination</h6>\r\n                <p><ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Progress bars with heights</h4>\r\n                <h6 class=\"card-subtitle\">This is basic Default pagination</h6>\r\n                <p><ngb-progressbar type=\"success\" [value]=\"25\">default</ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"info\" [value]=\"50\" height=\"10px\">10px</ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"warning\" [value]=\"75\" height=\".5rem\">.5rem</ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"danger\" [value]=\"100\" [height]=\"height\">{{height}}</ngb-progressbar></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Global configuration of progress bars</h4>\r\n                <h6 class=\"card-subtitle\">This is Global configuration of progress bars</h6>\r\n                <p>This progress bar uses the customized default values.</p>\r\n                <p><ngb-progressbar value=\"250\"></ngb-progressbar></p>\r\n\r\n                <p>This progress bar uses the customized default values, but changes the type using an input.</p>\r\n                <p><ngb-progressbar value=\"500\" type=\"info\"></ngb-progressbar></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/rating/rating.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/rating/rating.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Basic demo</h4>\r\n                <h6 class=\"card-subtitle\">This is basic demo for rating {{currentRate}}</h6>\r\n                <ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\r\n                \r\n                <div class=\"m-t-10\">Rate: <b>{{currentRate}}</b></div>\r\n  \t\t\t</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Custom star template <span class=\"badge badge-success text-white\">New</span></h4>\r\n                <h6 class=\"card-subtitle\">Custom rating template provided as child element</h6>\r\n               <ngb-rating [(rate)]=\"currentRate\">\r\n              <ng-template let-fill=\"fill\" let-index=\"index\">\r\n                <span class=\"star\" [class.filled]=\"fill === 100\" [class.bad]=\"index < 3\">&#9733;</span>\r\n              </ng-template>\r\n            </ngb-rating>\r\n            \r\n            <div class=\"m-t-10\">Rate: <b>{{currentRate}}</b></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Events and readonly ratings</h4>\r\n                <h6 class=\"card-subtitle\">This is demo for readonly ratings </h6>\r\n                <ngb-rating [(rate)]=\"selected\" (hover)=\"hovered=$event\" (leave)=\"hovered=0\" [readonly]=\"readonly\"></ngb-rating>\r\n                <div class=\"m-t-10\">Selected: <b>{{selected}}</b><br/>Hovered: <b>{{hovered}}</b>\r\n                </div><button class=\"btn btn-sm m-t-10 btn-outline-{{readonly ? 'danger' : 'success'}}\" (click)=\"readonly = !readonly\">\r\n                  {{ readonly ? \"readonly\" : \"editable\"}}\r\n                </button>\r\n  \t\t\t</div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Custom decimal rating</h4>\r\n                <h6 class=\"card-subtitle\">Custom rating template provided via a variable. Shows fine-grained rating display</h6>\r\n                <ng-template #t let-fill=\"fill\">\r\n                  <span *ngIf=\"fill === 100\" class=\"heart full\">&hearts;</span>\r\n                  <span *ngIf=\"fill === 0\" class=\"heart\">&hearts;</span>\r\n                  <span *ngIf=\"fill < 100 && fill > 0\" class=\"heart\">\r\n                    <span class=\"half\" [style.width.%]=\"fill\">&hearts;</span>&hearts;\r\n                  </span>\r\n                </ng-template>\r\n\r\n                <ngb-rating [(rate)]=\"currentRate2\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\r\n                <div>Rate: <b>{{currentRate2}}</b></div>\r\n                <button class=\"btn btn-sm btn-outline-primary\" (click)=\"currentRate2 = 1.50\">1.50</button>\r\n                <button class=\"btn btn-sm btn-outline-primary\" (click)=\"currentRate2 = 4.72\">4.72</button>\r\n\t\t\t\t\r\n  \t\t\t</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Form integration</h4>\r\n                <h6 class=\"card-subtitle\">NgModel and reactive forms can be used without the 'rate' binding</h6>\r\n                <div class=\"form-group\" [class.has-success]=\"ctrl.valid\" [class.has-danger]=\"ctrl.invalid\">\r\n                  <ngb-rating [formControl]=\"ctrl\"></ngb-rating>\r\n                  <div class=\"form-control-feedback\">\r\n                    <div *ngIf=\"ctrl.valid\">Thanks!</div>\r\n                    <div *ngIf=\"ctrl.errors\">Please rate us</div>\r\n                  </div>\r\n                </div>\r\n\r\n                <hr>\r\n                <pre>Model: <b>{{ ctrl.value }}</b></pre>\r\n                <button class=\"btn btn-sm btn-outline-{{ ctrl.disabled ? 'danger' : 'success'}}\" (click)=\"toggle()\">\r\n                  {{ ctrl.disabled ? \"control disabled\" : \" control enabled\" }}\r\n                </button>\r\n                <button class=\"btn btn-sm btn-outline-primary\" (click)=\"ctrl.setValue(null)\">Clear</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/tabs/tabs.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/tabs/tabs.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Default Tabset</h4>\r\n                <h6 class=\"card-subtitle\">This is basic Default pagination</h6>\r\n                <ngb-tabset>\r\n                  <ngb-tab title=\"Simple\">\r\n                    <ng-template ngbTabContent>\r\n                      <p class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab>\r\n                    <ng-template ngbTabTitle><b>Fancy</b></ng-template>\r\n                    <ng-template ngbTabContent>\r\n                      <p class=\"p-t-20\">Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n                      sint qui sapiente accusamus tattooed echo park.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n                    <ng-template ngbTabContent>\r\n                      <p class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                </ngb-tabset>\r\n  \t\t\t</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Pills</h4>\r\n                <h6 class=\"card-subtitle\">This is Pills demo</h6>\r\n                <ngb-tabset type=\"pills\">\r\n                  <ngb-tab title=\"Simple\">\r\n                    <ng-template ngbTabContent>\r\n                      <p  class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab>\r\n                    <ng-template ngbTabTitle><b>Fancy</b></ng-template>\r\n                    <ng-template ngbTabContent>\r\n                      <p  class=\"p-t-20\">Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n                      sint qui sapiente accusamus tattooed echo park.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n                    <ng-template ngbTabContent>\r\n                      <p  class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                </ngb-tabset>\r\n  \t\t\t</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Select an active tab by id</h4>\r\n                <h6 class=\"card-subtitle\">This is Pagination size</h6>\r\n                <ngb-tabset #t=\"ngbTabset\">\r\n                  <ngb-tab id=\"tab-selectbyid1\" title=\"Simple\">\r\n                    <ng-template ngbTabContent>\r\n                      <p class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab id=\"tab-selectbyid2\">\r\n                    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                    <ng-template ngbTabContent>\r\n                      <p class=\"p-t-20\">Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n                      sint qui sapiente accusamus tattooed echo park.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                </ngb-tabset>\r\n\r\n                <p>\r\n                  <button class=\"btn btn-outline-primary\" (click)=\"t.select('tab-selectbyid2')\">Selected tab with \"tab-selectbyid2\" id</button>\r\n                </p>\r\n  \t\t\t</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Prevent tab change</h4>\r\n                <h6 class=\"card-subtitle\">This is Prevent tab change</h6>\r\n                <ngb-tabset  (tabChange)=\"beforeChange($event)\">\r\n                  <ngb-tab id=\"tab-preventchange1\" title=\"Simple\">\r\n                    <ng-template ngbTabContent>\r\n                      <p class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab id=\"tab-preventchange2\" title=\"I can't be selected...\">\r\n                    <ng-template ngbTabContent>\r\n                      <p class=\"p-t-20\">Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n                      sint qui sapiente accusamus tattooed echo park.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab title=\"But I can!\" >\r\n                    <ng-template ngbTabContent>\r\n                      <p class=\"p-t-20\">Heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                </ngb-tabset>\r\n  \t\t\t </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Nav Justification</h4>\r\n                <h6 class=\"card-subtitle\">This is Prevent tab change</h6>\r\n                <ngb-tabset [justify]=\"currentJustify\">\r\n                  <ngb-tab title=\"Simple\">\r\n                    <ng-template ngbTabContent>\r\n                      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab>\r\n                    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n                      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n                      sint qui sapiente accusamus tattooed echo park.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab title=\"A very long nav title\">\r\n                    <ng-template ngbTabContent>\r\n                      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                </ngb-tabset>\r\n                <div class=\"btn-group btn-group-toggle m-t-20\" ngbRadioGroup [(ngModel)]=\"currentJustify\">\r\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                    <input ngbButton type=\"radio\" value=\"start\">Start\r\n                  </label>\r\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                    <input ngbButton type=\"radio\" value=\"center\">Center\r\n                  </label>\r\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                    <input ngbButton type=\"radio\" value=\"end\">End\r\n                  </label>\r\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                    <input ngbButton type=\"radio\" value=\"fill\">Fill\r\n                  </label>\r\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                    <input ngbButton type=\"radio\" value=\"justified\">Justified\r\n                  </label>\r\n                </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Nav Orientation</h4>\r\n                <ngb-tabset type=\"pills\" [orientation]=\"currentOrientation\">\r\n                  <ngb-tab title=\"Simple\">\r\n                    <ng-template ngbTabContent>\r\n                      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab>\r\n                    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n                      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n                      sint qui sapiente accusamus tattooed echo park.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n                    <ng-template ngbTabContent>\r\n                      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                </ngb-tabset>\r\n\r\n                <div class=\"btn-group btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"currentOrientation\">\r\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                    <input ngbButton type=\"radio\" value=\"horizontal\">Horizontal\r\n                  </label>\r\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                    <input ngbButton type=\"radio\" value=\"vertical\">Vertical\r\n                  </label>\r\n                </div>\r\n         </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/timepicker/timepicker.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/timepicker/timepicker.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n\t  <div class=\"card\">\r\n\t\t<div class=\"card-body\">\r\n\t\t    <h4 class=\"card-title\">Timepicker</h4>\r\n\t\t    <h6 class=\"card-subtitle\">This is basic Timepicker</h6>\r\n\t\t    <ngb-timepicker [(ngModel)]=\"time\"></ngb-timepicker>\r\n\t\t    <pre>Selected time: {{time | json}}</pre>\r\n\t\t\t</div> \r\n\t  </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n\t  <div class=\"card\">\r\n\t\t<div class=\"card-body\">\r\n\t\t    <h4 class=\"card-title\">Spinners</h4>\r\n\t\t    <h6 class=\"card-subtitle\">This is Spinners</h6>\r\n\t\t    <ngb-timepicker [(ngModel)]=\"time\" [spinners]=\"spinners\"></ngb-timepicker>\r\n\t\t    <button class=\"m-t-1 m-t-10 btn btn-sm btn-outline-{{spinners ? 'success' : 'danger'}}\" (click)=\"toggleSpinners()\">\r\n\t\t\t  Spinners - {{spinners ? \"ON\" : \"OFF\"}}\r\n\t\t    </button>\r\n\t\t</div>\r\n\t  </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n\t  <div class=\"card\">\r\n\t\t<div class=\"card-body\">\r\n\t\t    <h4 class=\"card-title\">Meridian</h4>\r\n\t\t    <h6 class=\"card-subtitle\">This is Meridian Timepicker</h6>\r\n\t\t    <ngb-timepicker [(ngModel)]=\"time\" [meridian]=\"meridian\"></ngb-timepicker>\r\n\t\t    <button class=\"btn btn-sm btn-outline-{{meridian ? 'success' : 'danger'}}\" (click)=\"toggleMeridian()\">\r\n\t\t\t  Meridian - {{meridian ? \"ON\" : \"OFF\"}}\r\n\t\t    </button>\r\n\t\t    <hr>\r\n\t\t    <pre>Selected time: {{time | json}}</pre>\r\n\t\t\t</div>\r\n\t  </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n\t  <div class=\"card\">\r\n\t\t<div class=\"card-body\">\r\n\t\t    <h4 class=\"card-title\">Seconds</h4>\r\n\t\t    <h6 class=\"card-subtitle\">This is Seconds with the on off</h6>\r\n\t\t    <ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"seconds\"></ngb-timepicker>\r\n\t\t    <button class=\"btn btn-sm btn-outline-{{seconds ? 'success' : 'danger'}}\" (click)=\"toggleSeconds()\">\r\n\t\t\t  Seconds - {{seconds ? \"ON\" : \"OFF\"}}\r\n\t\t    </button>\r\n\t\t    <hr>\r\n\t\t    <pre>Selected time: {{time | json}}</pre> \r\n\t\t\t</div>\r\n\t  </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n\t  <div class=\"card\">\r\n\t\t<div class=\"card-body\">\r\n\t\t    <h4 class=\"card-title\">Custom steps</h4>\r\n\t\t    <h6 class=\"card-subtitle\">This is Custom steps</h6>\r\n\t\t    <ngb-timepicker [(ngModel)]=\"time2\" [seconds]=\"true\"\r\n\t\t\t  [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [secondStep]=\"secondStep\"></ngb-timepicker>\r\n\r\n\t\t    <div class=\"row\">\r\n\t\t\t  <div class=\"col-md-3\">\r\n\t\t\t\t<label for=\"changeHourStep\">Hour Step</label>\r\n\t\t\t\t<input id=\"changeHourStep\" type=\"number\" class=\"form-control form-control\" [(ngModel)]=\"hourStep\" />\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"col-md-3\">\r\n\t\t\t\t<label for=\"changeMinuteStep\">Minute Step</label>\r\n\t\t\t\t<input id=\"changeMinuteStep\" type=\"number\" class=\"form-control form-control\" [(ngModel)]=\"minuteStep\" />\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"col-md-3\">\r\n\t\t\t\t<label for=\"changeSecondStep\">Second Step</label>\r\n\t\t\t\t<input id=\"changeSecondStep\" type=\"number\" class=\"form-control form-control\" [(ngModel)]=\"secondStep\" />\r\n\t\t\t  </div>\r\n\t\t    </div>\r\n\t\t    \r\n\t\t    <pre class=\"m-t-20\">Selected time: {{time2 | json}}</pre>\r\n\t\t</div>\r\n\t  </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n\t  <div class=\"card\">\r\n\t\t<div class=\"card-body\">\r\n\t\t    <h4 class=\"card-title\">Custom validation</h4>\r\n\t\t    <h6 class=\"card-subtitle\">Illustrates custom validation, you have to select time between 12:00 and 13:59</h6>\r\n\t\t    <div class=\"form-group\" [class.has-success]=\"ctrl.valid\" [class.has-danger]=\"!ctrl.valid\">\r\n\t\t\t<ngb-timepicker [(ngModel)]=\"time3\" [formControl]=\"ctrl\" required></ngb-timepicker>\r\n\t\t\t<div class=\"form-control-feedback\">\r\n\t\t\t  <div *ngIf=\"ctrl.valid\">Great choice</div>\r\n\t\t\t  <div *ngIf=\"ctrl.errors && ctrl.errors['required']\">Select some time during lunchtime</div>\r\n\t\t\t  <div *ngIf=\"ctrl.errors && ctrl.errors['tooLate']\">Oh no, it's way too late</div>\r\n\t\t\t  <div *ngIf=\"ctrl.errors && ctrl.errors['tooEarly']\">It's a bit too early</div>\r\n\t\t\t</div>\r\n\t\t    </div> \r\n\r\n\t\t    <hr>\r\n\t\t    <pre>Selected time: {{time3 | json}}</pre>  \r\n\t\t</div>\r\n\t  </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n\t  <div class=\"card\">\r\n\t\t<div class=\"card-body\">\r\n\t\t    <h4 class=\"card-title\">Custom time adapter</h4>\r\n\t\t    <h6 class=\"card-subtitle\">This timepicker uses a custom Time adapter that lets you use your own model implementation. In this example we are converting from and to an ISO string (with the format HH:mm:ss)</h6>\r\n\t\t    <ngb-timepicker [(ngModel)]=\"time1\"></ngb-timepicker>\r\n\t\t    <hr>\r\n\t\t    <pre>Selected time: {{ time1 }}</pre>\r\n\t\t</div>\r\n\t  </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/toast/toast.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/toast/toast.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4>Declarative usage</h4>\r\n\t\t\t\t<h6 class=\"mt-3\">Body only</h6>\r\n\t\t\t\t<ngb-toast>\r\n\t\t\t\t  I am a simple static toast.\r\n\t\t\t\t</ngb-toast>\r\n\r\n\t\t\t\t<h6 class=\"mt-3\">With a text header</h6>\r\n\t\t\t\t<ngb-toast header=\"Hello\" [autohide]=\"false\">\r\n\t\t\t\t  I am a simple static toast with a header.\r\n\t\t\t\t</ngb-toast>\r\n\t\t\t\t<ngb-alert type=\"secondary\" [dismissible]=\"false\">Clicking on the close icon won't do anything in this example.</ngb-alert>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4>Using a Template as header</h4>\r\n\t\t\t\t<ngb-toast>\r\n\t\t\t\t\t<ng-template ngbToastHeader>\r\n\t\t\t\t\t    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path d=\"M16.896 10l-4.896-8-4.896 8-7.104-4 3 11v5h18v-5l3-11-7.104 4zm-11.896 10v-2h14v2h-14zm14.2-4h-14.4l-1.612-5.909 4.615 2.598 4.197-6.857 4.197 6.857 4.615-2.598-1.612 5.909z\"/></svg>\r\n\t\t\t\t\t    <strong class=\"mx-1\">Fancy</strong>header here\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\tHello, I am toast. Have you noticed my header has been generated from a Template?\r\n\t\t\t\t</ngb-toast>\r\n\t\t\t\t<ngb-alert type=\"secondary\" [dismissible]=\"false\">Clicking on the close icon won't do anything in this example.</ngb-alert>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4>Closeable toast</h4>\r\n\t\t\t\t<ngb-toast *ngIf=\"show\" header=\"Click my close icon →\" [autohide]=\"false\"\r\n\t\t\t\t  (hide)=\"close()\">\r\n\t\t\t\t  If you close me, I will automatically re-appear after a few seconds.\r\n\t\t\t\t</ngb-toast>\r\n\t\t\t\t<p *ngIf=\"!show\">I'll be back!</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4>Prevent autohide on mouseover</h4>\r\n\t\t\t\t<p>\r\n\t\t\t\t  In this demo, you can show a toast by clicking the button below. It will hide itself after a 5 seconds delay unless you simply hover it with your mouse.\r\n\t\t\t\t</p>\r\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"showauto = true\">\r\n\t\t\t\t  Click me to show a toast\r\n\t\t\t\t</button>\r\n\t\t\t\t<hr *ngIf=\"showauto\">\r\n\t\t\t\t<ngb-toast\r\n\t\t\t\t  *ngIf=\"showauto\"\r\n\t\t\t\t  header=\"Autohide can be cancelled\"\r\n\t\t\t\t  [delay]=\"5000\"\r\n\t\t\t\t  [autohide]=\"autohide\"\r\n\t\t\t\t  (mouseenter)=\"autohide = false\"\r\n\t\t\t\t  (mouseleave)=\"autohide = true\"\r\n\t\t\t\t  (hide)=\"showauto = false; autohide = true\"\r\n\t\t\t\t  [class.bg-warning]=\"!autohide\"\r\n\t\t\t\t>\r\n\t\t\t\t  <div *ngIf=\"autohide\">\r\n\t\t\t\t    Try to mouse hover me.\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div *ngIf=\"!autohide\">\r\n\t\t\t\t    I will remain visible until you leave again.\r\n\t\t\t\t  </div>\r\n\t\t\t\t</ngb-toast>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h4>Toast management service</h4>\r\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"showStandard()\" ngbTooltip=\"Will disappear in 5s\">Standard toast</button>&nbsp;\r\n\t\t\t\t<button class=\"btn btn-success\" (click)=\"showSuccess()\" ngbTooltip=\"Will disappear in 10s\">Success toast</button>&nbsp;\r\n\r\n\t\t\t\t<ng-template #dangerTpl>\r\n\t\t\t\t  <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#fff\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10.872 6.831l1.695 3.904 3.654-1.561-1.79 3.426 3.333.954-3.417 1.338 2.231 4.196-4.773-2.582-2.869 2.287.413-3.004-3.792-.726 2.93-1.74-1.885-2.512 3.427.646.843-4.626zm-.786-6.831l-1.665 9.119-6.512-1.228 3.639 4.851-5.548 3.294 7.108 1.361-.834 6.076 5.742-4.577 9.438 5.104-4.288-8.064 6.834-2.677-6.661-1.907 3.25-6.22-6.98 2.982-3.523-8.114z\"/></svg>\r\n\t\t\t\t  Danger Danger !\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<button class=\"btn btn-danger\" (click)=\"showDanger(dangerTpl)\" ngbTooltip=\"Will disappear in 15s\">Danger toast</button>&nbsp;\r\n\r\n\t\t\t\t<app-toasts aria-live=\"polite\" aria-atomic=\"true\"></app-toasts>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- End Row -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/typehead/typehead.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/typehead/typehead.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Simple Typeahead</h4>\r\n        <h6 class=\"card-subtitle\">A typeahead example that gets values from a static string</h6>\r\n        <label for=\"typeahead-basic\">Search for a USA state:</label>\r\n        <input id=\"typeahead-basic\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model1\" [ngbTypeahead]=\"search1\" />\r\n        <div class=\"m-t-10\">Model: {{ model1 | json }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Formatted results</h4>\r\n        <h6 class=\"card-subtitle\">A typeahead example that uses a formatter function for string results</h6>\r\n        <label for=\"typeahead-format\">Search for a state:</label>\r\n        <input\r\n          id=\"typeahead-format\"\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          [(ngModel)]=\"model3\"\r\n          [ngbTypeahead]=\"search4\"\r\n          [resultFormatter]=\"formatter\"\r\n        />\r\n        <hr />\r\n        <pre>Model: {{ model3 | json }}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Template for results</h4>\r\n        <h6 class=\"card-subtitle\">A typeahead example that uses custom template for results display and uses object as a model</h6>\r\n        <ng-template #rt let-r=\"result\" let-t=\"term\">\r\n          <img [src]=\"'https://upload.wikimedia.org/wikipedia/commons/thumb/' + r.flag\" width=\"16\" /> {{ r.name }}\r\n        </ng-template>\r\n\r\n        <label for=\"typeahead-template\">Search for a state:</label>\r\n        <input\r\n          id=\"typeahead-template\"\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          [(ngModel)]=\"model5\"\r\n          [ngbTypeahead]=\"search5\"\r\n          [resultTemplate]=\"rt\"\r\n          [inputFormatter]=\"formatter5\"\r\n        />\r\n        <hr />\r\n        <pre>Model: {{ model5 | json }}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Open on Focus</h4>\r\n        <h6 class=\"card-subtitle\">It is possible to get the focus events with the current input value</h6>\r\n        <label for=\"typeahead-focus\">Search for a state:</label>\r\n        <input\r\n          id=\"typeahead-focus\"\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          [(ngModel)]=\"model2\"\r\n          [ngbTypeahead]=\"search2\"\r\n          (focus)=\"focus$.next($event.target.value)\"\r\n          (click)=\"click$.next($event.target.value)\"\r\n          #instance=\"ngbTypeahead\"\r\n        />\r\n        <hr />\r\n        <pre>Model: {{ model2 | json }}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Wikipedia search</h4>\r\n        <h6 class=\"card-subtitle\">It is possible to get the focus events with the current input value</h6>\r\n        <div class=\"form-group\">\r\n          <label for=\"typeahead-http\">Search for a wiki page:</label>\r\n          <input\r\n            id=\"typeahead-http\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            [class.is-invalid]=\"searchFailed\"\r\n            [(ngModel)]=\"model1\"\r\n            [ngbTypeahead]=\"search\"\r\n            placeholder=\"Wikipedia search\"\r\n          />\r\n          <span *ngIf=\"searching\">searching...</span>\r\n          <div class=\"invalid-feedback\" *ngIf=\"searchFailed\">Sorry, suggestions could not be loaded.</div>\r\n        </div>\r\n\r\n        <hr />\r\n        <pre>Model: {{ model1 | json }}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/accordion/accordion.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/accordion/accordion.component.ts ***!
  \************************************************************/
/*! exports provided: NgbdAccordionBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdAccordionBasicComponent", function() { return NgbdAccordionBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdAccordionBasicComponent = /** @class */ (function () {
    function NgbdAccordionBasicComponent() {
        this.disabled = false;
    }
    NgbdAccordionBasicComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    NgbdAccordionBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-accordion-basic',
            template: __webpack_require__(/*! raw-loader!./accordion.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/accordion/accordion.component.html")
        })
    ], NgbdAccordionBasicComponent);
    return NgbdAccordionBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/alert/alert.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/alert/alert.component.ts ***!
  \****************************************************/
/*! exports provided: NgbdAlertBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdAlertBasicComponent", function() { return NgbdAlertBasicComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgbdAlertBasicComponent = /** @class */ (function () {
    function NgbdAlertBasicComponent() {
        // this is for the Closeable Alert
        this.alerts = [];
        // End the Closeable Alert
        // This is for the self closing alert
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.staticAlertClosed = false;
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert'
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert'
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NgbdAlertBasicComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    NgbdAlertBasicComponent.prototype.reset = function () {
        this.alerts = this.backup.map(function (alert) { return Object.assign({}, alert); });
    };
    NgbdAlertBasicComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return (_this.staticAlertClosed = true); }, 20000);
        this._success.subscribe(function (message) { return (_this.successMessage = message); });
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(5000)).subscribe(function () { return (_this.successMessage = null); });
    };
    NgbdAlertBasicComponent.prototype.changeSuccessMessage = function () {
        this._success.next(new Date() + " - Message successfully changed.");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], NgbdAlertBasicComponent.prototype, "alerts", void 0);
    NgbdAlertBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ngbd-alert',
            template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/alert/alert.component.html"),
            styles: ["\n    :host >>> .alert-custom {\n      color: #99004d;\n      background-color: #f169b4;\n      border-color: #800040;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], NgbdAlertBasicComponent);
    return NgbdAlertBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/buttons/buttons.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/buttons/buttons.component.ts ***!
  \********************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.model = {
            left: true,
            middle: false,
            right: false
        };
        this.model1 = 1;
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ButtonsComponent.prototype.ngOnInit = function () {
        this.checkboxGroupForm = this.formBuilder.group({
            left: true,
            middle: false,
            right: false
        });
        this.radioGroupForm = this.formBuilder.group({
            model: 1
        });
    };
    ButtonsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./buttons.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/buttons/buttons.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/component/card/card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/card/card.component.ts ***!
  \**************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/card/card.component.html")
        })
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/component/carousel/carousel.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/carousel/carousel.component.ts ***!
  \**********************************************************/
/*! exports provided: NgbdCarouselBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdCarouselBasicComponent", function() { return NgbdCarouselBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdCarouselBasicComponent = /** @class */ (function () {
    function NgbdCarouselBasicComponent(config) {
        this.showNavigationArrows = false;
        this.showNavigationIndicators = false;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }
    NgbdCarouselBasicComponent.prototype.togglePaused = function () {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    };
    NgbdCarouselBasicComponent.prototype.onSlide = function (slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    };
    NgbdCarouselBasicComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('carousel', { static: true }),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"])
    ], NgbdCarouselBasicComponent.prototype, "carousel", void 0);
    NgbdCarouselBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-buttons-radio',
            template: __webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/carousel/carousel.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])
    ], NgbdCarouselBasicComponent);
    return NgbdCarouselBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/component.module.ts":
/*!***********************************************!*\
  !*** ./src/app/component/component.module.ts ***!
  \***********************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _component_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component.routing */ "./src/app/component/component.routing.ts");
/* harmony import */ var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progressbar/progressbar.component */ "./src/app/component/progressbar/progressbar.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/component/pagination/pagination.component.ts");
/* harmony import */ var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accordion/accordion.component */ "./src/app/component/accordion/accordion.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/component/alert/alert.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/component/carousel/carousel.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/component/datepicker/datepicker.component.ts");
/* harmony import */ var _dropdown_collapse_dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dropdown-collapse/dropdown-collapse.component */ "./src/app/component/dropdown-collapse/dropdown-collapse.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/component/modal/modal.component.ts");
/* harmony import */ var _popover_tooltip_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./popover-tooltip/popover-tooltip.component */ "./src/app/component/popover-tooltip/popover-tooltip.component.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/component/rating/rating.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/component/tabs/tabs.component.ts");
/* harmony import */ var _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./timepicker/timepicker.component */ "./src/app/component/timepicker/timepicker.component.ts");
/* harmony import */ var _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./typehead/typehead.component */ "./src/app/component/typehead/typehead.component.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/component/buttons/buttons.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./card/card.component */ "./src/app/component/card/card.component.ts");
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./toast/toast.component */ "./src/app/component/toast/toast.component.ts");
/* harmony import */ var _toast_toast_container__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./toast/toast-container */ "./src/app/component/toast/toast-container.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_component_routing__WEBPACK_IMPORTED_MODULE_5__["ComponentsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            declarations: [
                _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_6__["NgbdpregressbarBasicComponent"],
                _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__["NgbdpaginationBasicComponent"],
                _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_8__["NgbdAccordionBasicComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_9__["NgbdAlertBasicComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_10__["NgbdCarouselBasicComponent"],
                _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_11__["NgbdDatepickerBasicComponent"],
                _dropdown_collapse_dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_12__["NgbdDropdownBasicComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["NgbdModalBasicComponent"],
                _popover_tooltip_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_14__["NgbdPopTooltipComponent"],
                _rating_rating_component__WEBPACK_IMPORTED_MODULE_15__["NgbdratingBasicComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_16__["NgbdtabsBasicComponent"],
                _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_17__["NgbdtimepickerBasicComponent"],
                _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_18__["NgbdtypeheadBasicComponent"],
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_19__["ButtonsComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_20__["CardsComponent"],
                _toast_toast_component__WEBPACK_IMPORTED_MODULE_21__["ToastComponent"],
                _toast_toast_container__WEBPACK_IMPORTED_MODULE_22__["ToastsContainer"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/component/component.routing.ts":
/*!************************************************!*\
  !*** ./src/app/component/component.routing.ts ***!
  \************************************************/
/*! exports provided: ComponentsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRoutes", function() { return ComponentsRoutes; });
/* harmony import */ var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progressbar/progressbar.component */ "./src/app/component/progressbar/progressbar.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/component/pagination/pagination.component.ts");
/* harmony import */ var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion/accordion.component */ "./src/app/component/accordion/accordion.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/component/alert/alert.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/component/carousel/carousel.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/component/datepicker/datepicker.component.ts");
/* harmony import */ var _dropdown_collapse_dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown-collapse/dropdown-collapse.component */ "./src/app/component/dropdown-collapse/dropdown-collapse.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/component/modal/modal.component.ts");
/* harmony import */ var _popover_tooltip_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popover-tooltip/popover-tooltip.component */ "./src/app/component/popover-tooltip/popover-tooltip.component.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/component/rating/rating.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/component/tabs/tabs.component.ts");
/* harmony import */ var _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timepicker/timepicker.component */ "./src/app/component/timepicker/timepicker.component.ts");
/* harmony import */ var _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./typehead/typehead.component */ "./src/app/component/typehead/typehead.component.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/component/buttons/buttons.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./card/card.component */ "./src/app/component/card/card.component.ts");
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./toast/toast.component */ "./src/app/component/toast/toast.component.ts");
















var ComponentsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'progressbar',
                component: _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_0__["NgbdpregressbarBasicComponent"],
                data: {
                    title: 'Progressbar',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Progressbar' }
                    ]
                }
            },
            {
                path: 'card',
                component: _card_card_component__WEBPACK_IMPORTED_MODULE_14__["CardsComponent"],
                data: {
                    title: 'Cards',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Cards' }
                    ]
                }
            },
            {
                path: 'pagination',
                component: _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__["NgbdpaginationBasicComponent"],
                data: {
                    title: 'Pagination',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Pagination' }
                    ]
                }
            },
            {
                path: 'accordion',
                component: _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_2__["NgbdAccordionBasicComponent"],
                data: {
                    title: 'Accordion',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Accordion' }
                    ]
                }
            },
            {
                path: 'alert',
                component: _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["NgbdAlertBasicComponent"],
                data: {
                    title: 'Alert',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Alert' }
                    ]
                }
            },
            {
                path: 'carousel',
                component: _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["NgbdCarouselBasicComponent"],
                data: {
                    title: 'Carousel',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Carousel' }
                    ]
                }
            },
            {
                path: 'datepicker',
                component: _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__["NgbdDatepickerBasicComponent"],
                data: {
                    title: 'Datepicker',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Datepicker' }
                    ]
                }
            },
            {
                path: 'dropdown',
                component: _dropdown_collapse_dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_6__["NgbdDropdownBasicComponent"],
                data: {
                    title: 'Dropdown',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Dropdown' }
                    ]
                }
            },
            {
                path: 'modal',
                component: _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["NgbdModalBasicComponent"],
                data: {
                    title: 'Modal',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Modal' }
                    ]
                }
            },
            {
                path: 'poptool',
                component: _popover_tooltip_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_8__["NgbdPopTooltipComponent"],
                data: {
                    title: 'Popover & Tooltip',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Popover & Tooltip' }
                    ]
                }
            },
            {
                path: 'rating',
                component: _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__["NgbdratingBasicComponent"],
                data: {
                    title: 'Rating',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Rating' }
                    ]
                }
            },
            {
                path: 'tabs',
                component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__["NgbdtabsBasicComponent"],
                data: {
                    title: 'Tabs',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Tabs' }
                    ]
                }
            },
            {
                path: 'timepicker',
                component: _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_11__["NgbdtimepickerBasicComponent"],
                data: {
                    title: 'Timepicker',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Timepicker' }
                    ]
                }
            },
            {
                path: 'typehead',
                component: _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_12__["NgbdtypeheadBasicComponent"],
                data: {
                    title: 'Typehead',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Typehead' }
                    ]
                }
            },
            {
                path: 'buttons',
                component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_13__["ButtonsComponent"],
                data: {
                    title: 'Button',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Button' }
                    ]
                }
            },
            {
                path: 'toast',
                component: _toast_toast_component__WEBPACK_IMPORTED_MODULE_15__["ToastComponent"],
                data: {
                    title: 'Toast',
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/component/datepicker/datepicker.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/datepicker/datepicker.component.ts ***!
  \**************************************************************/
/*! exports provided: NgbdDatepickerBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDatepickerBasicComponent", function() { return NgbdDatepickerBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var my = new Date();
// This is for the range date picker
// tslint:disable-next-line:max-line-length
var equals = function (one, two) {
    return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
};
var before = function (one, two) {
    return !one || !two
        ? false
        : one.year === two.year
            ? one.month === two.month
                ? one.day === two.day
                    ? false
                    : one.day < two.day
                : one.month < two.month
            : one.year < two.year;
};
var after = function (one, two) {
    return !one || !two
        ? false
        : one.year === two.year
            ? one.month === two.month
                ? one.day === two.day
                    ? false
                    : one.day > two.day
                : one.month > two.month
            : one.year > two.year;
};
// End range date picker
var NgbdDatepickerBasicComponent = /** @class */ (function () {
    function NgbdDatepickerBasicComponent(calendar, calendar1, calendar5) {
        var _this = this;
        this.calendar1 = calendar1;
        this.calendar5 = calendar5;
        this.today5 = this.calendar5.getToday();
        // This is for multiple month
        this.displayMonths = 2;
        this.navigation = 'select';
        this.showWeekNumbers = false;
        // This is for the disable datepicker
        this.model3 = { year: my.getFullYear(), month: my.getMonth() + 1, day: my.getDate() };
        this.disabled = true;
        this.isHovered = function (date) { return _this.fromDate && !_this.toDate && _this.hoveredDate && after(date, _this.fromDate) && before(date, _this.hoveredDate); };
        this.isInside = function (date) { return after(date, _this.fromDate) && before(date, _this.toDate); };
        this.isFrom = function (date) { return equals(date, _this.fromDate); };
        this.isTo = function (date) { return equals(date, _this.toDate); };
        this.isDisabled = function (date, current) { return date.month !== current.month; };
        this.isWeekend = function (date) { return _this.calendar1.getWeekday(date) >= 6; };
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    Object.defineProperty(NgbdDatepickerBasicComponent.prototype, "today", {
        get: function () {
            return new Date();
        },
        enumerable: true,
        configurable: true
    });
    NgbdDatepickerBasicComponent.prototype.selectToday = function () {
        this.model = { year: my.getFullYear(), month: my.getMonth() + 1, day: my.getDate() };
    };
    NgbdDatepickerBasicComponent.prototype.onDateChange = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    NgbdDatepickerBasicComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"] }
    ]; };
    NgbdDatepickerBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datepicker-basic',
            template: __webpack_require__(/*! raw-loader!./datepicker.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/datepicker/datepicker.component.html"),
            providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateNativeAdapter"] }],
            styles: ["\n      .custom-day {\n        text-align: center;\n        padding: 0.185rem 0.25rem;\n        display: inline-block;\n        height: 2rem;\n        width: 2rem;\n      }\n      .custom-day.focused {\n        background-color: #e6e6e6;\n      }\n      .custom-day.range,\n      .custom-day:hover {\n        background-color: #0275d8;\n        color: white;\n      }\n      .faded {\n        opacity: 0.5;\n      }\n      .weekend {\n        background-color: #242a33;\n        border-radius: 1rem;\n        color: white;\n      }\n      .hidden {\n        display: none;\n      }\n    "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], NgbdDatepickerBasicComponent);
    return NgbdDatepickerBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/dropdown-collapse/dropdown-collapse.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/dropdown-collapse/dropdown-collapse.component.ts ***!
  \****************************************************************************/
/*! exports provided: NgbdDropdownBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDropdownBasicComponent", function() { return NgbdDropdownBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdDropdownBasicComponent = /** @class */ (function () {
    function NgbdDropdownBasicComponent() {
        // This is for the collapse example
        this.isCollapsed = false;
        this.collapsed = true;
    }
    NgbdDropdownBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dropdown-basic',
            template: __webpack_require__(/*! raw-loader!./dropdown-collapse.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/dropdown-collapse/dropdown-collapse.component.html")
        })
    ], NgbdDropdownBasicComponent);
    return NgbdDropdownBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/modal/modal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/modal/modal.component.ts ***!
  \****************************************************/
/*! exports provided: NgbdModalBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBasicComponent", function() { return NgbdModalBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalBasicComponent = /** @class */ (function () {
    function NgbdModalBasicComponent(modalService) {
        this.modalService = modalService;
    }
    // This is for the first modal
    NgbdModalBasicComponent.prototype.open1 = function (content1) {
        var _this = this;
        this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This is for the Second modal
    NgbdModalBasicComponent.prototype.open2 = function (content2) {
        var _this = this;
        this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This is for the Third varios modal options
    NgbdModalBasicComponent.prototype.openBackDropCustomClass = function (content3) {
        this.modalService.open(content3, { backdropClass: 'light-blue-backdrop' });
    };
    NgbdModalBasicComponent.prototype.openWindowCustomClass = function (content3) {
        this.modalService.open(content3, { windowClass: 'dark-modal' });
    };
    NgbdModalBasicComponent.prototype.openSm = function (content3) {
        this.modalService.open(content3, { size: 'sm' });
    };
    NgbdModalBasicComponent.prototype.openLg = function (content3) {
        this.modalService.open(content3, { size: 'lg' });
    };
    NgbdModalBasicComponent.prototype.openVerticallyCentered = function (content3) {
        this.modalService.open(content3, { centered: true });
    };
    NgbdModalBasicComponent.prototype.openstackmodal = function (contentstack) {
        this.modalService.open(contentstack, { size: 'lg' });
    };
    NgbdModalBasicComponent.prototype.opensubmodal = function (contentsubmodal) {
        this.modalService.open(contentsubmodal, { size: 'lg' });
    };
    NgbdModalBasicComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasicComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }
    ]; };
    NgbdModalBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-modal',
            template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/modal/modal.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalBasicComponent);
    return NgbdModalBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/pagination/pagination.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/pagination/pagination.component.ts ***!
  \**************************************************************/
/*! exports provided: NgbdpaginationBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdpaginationBasicComponent", function() { return NgbdpaginationBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdpaginationBasicComponent = /** @class */ (function () {
    function NgbdpaginationBasicComponent() {
        this.page = 4;
        this.page2 = 1;
        this.currentPage = 3;
        this.disablepage = 3;
        this.isDisabled = true;
    }
    NgbdpaginationBasicComponent.prototype.toggleDisabled = function () {
        this.isDisabled = !this.isDisabled;
    };
    NgbdpaginationBasicComponent.prototype.getPageSymbol = function (current) {
        return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
    };
    NgbdpaginationBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-pagination',
            template: __webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/pagination/pagination.component.html")
        })
    ], NgbdpaginationBasicComponent);
    return NgbdpaginationBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/popover-tooltip/popover-tooltip.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/popover-tooltip/popover-tooltip.component.ts ***!
  \************************************************************************/
/*! exports provided: NgbdPopTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdPopTooltipComponent", function() { return NgbdPopTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgbdPopTooltipComponent = /** @class */ (function () {
    function NgbdPopTooltipComponent() {
        this.greeting = {};
        this.name = 'World';
    }
    NgbdPopTooltipComponent.prototype.changeGreeting = function (greeting) {
        var isOpen = this.popover.isOpen();
        this.popover.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.popover.open(greeting);
        }
    };
    NgbdPopTooltipComponent.prototype.toggleWithGreeting = function (tooltip, greeting) {
        if (tooltip.isOpen()) {
            tooltip.close();
        }
        else {
            tooltip.open({ greeting: greeting });
        }
    };
    NgbdPopTooltipComponent.prototype.recordShown = function () {
        this.lastShown = new Date();
    };
    NgbdPopTooltipComponent.prototype.recordHidden = function () {
        this.lastHidden = new Date();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('p', { static: true }),
        __metadata("design:type", Object)
    ], NgbdPopTooltipComponent.prototype, "popover", void 0);
    NgbdPopTooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-popover-tooltip',
            template: __webpack_require__(/*! raw-loader!./popover-tooltip.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/popover-tooltip/popover-tooltip.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n\t\t\t.card {\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\t\t\t.my-custom-class {\n\t\t\t\tfont-size: 125%;\n\t\t\t}\n\t\t\t.my-custom-class.tooltip > .tooltip-inner {\n\t\t\t\tbackground-color: darkgreen;\n\t\t\t}\n\t\t\t.my-custom-class.tooltip .arrow::before {\n\t\t\t\tborder-top-color: darkgreen;\n\t\t\t}\n\t\t"]
        })
    ], NgbdPopTooltipComponent);
    return NgbdPopTooltipComponent;
}());



/***/ }),

/***/ "./src/app/component/progressbar/progressbar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/progressbar/progressbar.component.ts ***!
  \****************************************************************/
/*! exports provided: NgbdpregressbarBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdpregressbarBasicComponent", function() { return NgbdpregressbarBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdpregressbarBasicComponent = /** @class */ (function () {
    function NgbdpregressbarBasicComponent(config) {
        this.height = '20px';
        // customize default values of progress bars used by this component tree
        config.max = 100;
        config.striped = true;
        config.animated = true;
        config.type = 'success';
    }
    NgbdpregressbarBasicComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"] }
    ]; };
    NgbdpregressbarBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-progressbar',
            template: __webpack_require__(/*! raw-loader!./progressbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/progressbar/progressbar.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]])
    ], NgbdpregressbarBasicComponent);
    return NgbdpregressbarBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/rating/rating.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/rating/rating.component.ts ***!
  \******************************************************/
/*! exports provided: NgbdratingBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdratingBasicComponent", function() { return NgbdratingBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NgbdratingBasicComponent = /** @class */ (function () {
    function NgbdratingBasicComponent() {
        this.currentRate = 8;
        this.currentRate2 = 2;
        this.selected = 0;
        this.hovered = 0;
        this.readonly = false;
        // for form integration
        this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    NgbdratingBasicComponent.prototype.toggle = function () {
        if (this.ctrl.disabled) {
            this.ctrl.enable();
        }
        else {
            this.ctrl.disable();
        }
    };
    NgbdratingBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-rating',
            template: __webpack_require__(/*! raw-loader!./rating.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/rating/rating.component.html"),
            styles: ["\n\t\t\t.star {\n\t\t\t\tfont-size: 1.5rem;\n\t\t\t\tcolor: #b0c4de;\n\t\t\t}\n\t\t\t.filled {\n\t\t\t\tcolor: #1e90ff;\n\t\t\t}\n\t\t\t.heart {\n\t\t\t\tposition: relative;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tcolor: #d3d3d3;\n\t\t\t}\n\t\t\t.full {\n\t\t\t\tcolor: red;\n\t\t\t}\n\t\t\t.half {\n\t\t\t\tposition: absolute;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\toverflow: hidden;\n\t\t\t\tcolor: red;\n\t\t\t}\n\t\t\t.bad {\n\t\t\tcolor: #deb0b0;\n\t\t}\n\t\t.filled.bad {\n\t\t\tcolor: #ff1e1e;\n\t\t}\n\t\t"]
        })
    ], NgbdratingBasicComponent);
    return NgbdratingBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/tabs/tabs.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/tabs/tabs.component.ts ***!
  \**************************************************/
/*! exports provided: NgbdtabsBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdtabsBasicComponent", function() { return NgbdtabsBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdtabsBasicComponent = /** @class */ (function () {
    function NgbdtabsBasicComponent() {
        this.currentJustify = 'start';
        this.currentOrientation = 'horizontal';
    }
    NgbdtabsBasicComponent.prototype.beforeChange = function ($event) {
        if ($event.nextId === 'tab-preventchange2') {
            $event.preventDefault();
        }
    };
    NgbdtabsBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/tabs/tabs.component.html")
        })
    ], NgbdtabsBasicComponent);
    return NgbdtabsBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/timepicker/timepicker.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/timepicker/timepicker.component.ts ***!
  \**************************************************************/
/*! exports provided: NgbTimeStringAdapter, NgbdtimepickerBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimeStringAdapter", function() { return NgbTimeStringAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdtimepickerBasicComponent", function() { return NgbdtimepickerBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NgbTimeStringAdapter = /** @class */ (function (_super) {
    __extends(NgbTimeStringAdapter, _super);
    function NgbTimeStringAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbTimeStringAdapter.prototype.fromModel = function (value) {
        if (!value) {
            return null;
        }
        var split = value.split(':');
        return {
            hour: parseInt(split[0], 10),
            minute: parseInt(split[1], 10),
            second: parseInt(split[2], 10)
        };
    };
    NgbTimeStringAdapter.prototype.toModel = function (time1) {
        if (!time1) {
            return null;
        }
        return this.pad(time1.hour) + ":" + this.pad(time1.minute) + ":" + this.pad(time1.second);
    };
    NgbTimeStringAdapter.prototype.pad = function (i) {
        return i < 10 ? "0" + i : "" + i;
    };
    NgbTimeStringAdapter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NgbTimeStringAdapter);
    return NgbTimeStringAdapter;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"]));

var NgbdtimepickerBasicComponent = /** @class */ (function () {
    function NgbdtimepickerBasicComponent() {
        this.time = { hour: 13, minute: 30 };
        this.meridian = true;
        // This is for the seconds
        this.seconds = true;
        // This is for the spinners
        this.spinners = true;
        // This is for the column step
        this.time2 = { hour: 13, minute: 30, second: 0 };
        this.hourStep = 1;
        this.minuteStep = 15;
        this.secondStep = 30;
        this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', function (control) {
            var value = control.value;
            if (!value) {
                return null;
            }
            if (value.hour < 12) {
                return { tooEarly: true };
            }
            if (value.hour > 13) {
                return { tooLate: true };
            }
            return null;
        });
    }
    NgbdtimepickerBasicComponent.prototype.toggleMeridian = function () {
        this.meridian = !this.meridian;
    };
    NgbdtimepickerBasicComponent.prototype.toggleSeconds = function () {
        this.seconds = !this.seconds;
    };
    NgbdtimepickerBasicComponent.prototype.toggleSpinners = function () {
        this.spinners = !this.spinners;
    };
    NgbdtimepickerBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-timepicker',
            template: __webpack_require__(/*! raw-loader!./timepicker.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/timepicker/timepicker.component.html"),
            providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"], useClass: NgbTimeStringAdapter }]
        })
    ], NgbdtimepickerBasicComponent);
    return NgbdtimepickerBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/toast/toast-container.ts":
/*!****************************************************!*\
  !*** ./src/app/component/toast/toast-container.ts ***!
  \****************************************************/
/*! exports provided: ToastsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastsContainer", function() { return ToastsContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.service */ "./src/app/component/toast/toast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastsContainer = /** @class */ (function () {
    function ToastsContainer(toastService) {
        this.toastService = toastService;
    }
    ToastsContainer.prototype.isTemplate = function (toast) { return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]; };
    ToastsContainer.ctorParameters = function () { return [
        { type: _toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"] }
    ]; };
    ToastsContainer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toasts',
            template: "\n    <ngb-toast\n      *ngFor=\"let toast of toastService.toasts\"\n      [class]=\"toast.classname\"\n      [autohide]=\"true\"\n      [delay]=\"toast.delay || 5000\"\n      (hide)=\"toastService.remove(toast)\"\n    >\n      <ng-template [ngIf]=\"isTemplate(toast)\" [ngIfElse]=\"text\">\n        <ng-template [ngTemplateOutlet]=\"toast.textOrTpl\"></ng-template>\n      </ng-template>\n\n      <ng-template #text>{{ toast.textOrTpl }}</ng-template>\n    </ngb-toast>\n  ",
            host: { '[class.ngb-toasts]': 'true' }
        }),
        __metadata("design:paramtypes", [_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]])
    ], ToastsContainer);
    return ToastsContainer;
}());



/***/ }),

/***/ "./src/app/component/toast/toast.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/toast/toast.component.ts ***!
  \****************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.service */ "./src/app/component/toast/toast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastComponent = /** @class */ (function () {
    function ToastComponent(toastService) {
        this.toastService = toastService;
        this.show = true;
        this.showauto = false;
        this.autohide = true;
    }
    ToastComponent.prototype.close = function () {
        var _this = this;
        this.show = false;
        setTimeout(function () { return _this.show = true; }, 5000);
    };
    ToastComponent.prototype.showStandard = function () {
        this.toastService.show('I am a standard toast');
    };
    ToastComponent.prototype.showSuccess = function () {
        this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
    };
    ToastComponent.prototype.showDanger = function (dangerTpl) {
        this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
    };
    ToastComponent.ctorParameters = function () { return [
        { type: _toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"] }
    ]; };
    ToastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ng-toasts',
            template: __webpack_require__(/*! raw-loader!./toast.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/toast/toast.component.html")
        }),
        __metadata("design:paramtypes", [_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]])
    ], ToastComponent);
    return ToastComponent;
}());



/***/ }),

/***/ "./src/app/component/toast/toast.service.ts":
/*!**************************************************!*\
  !*** ./src/app/component/toast/toast.service.ts ***!
  \**************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ToastService = /** @class */ (function () {
    function ToastService() {
        this.toasts = [];
    }
    ToastService.prototype.show = function (textOrTpl, options) {
        if (options === void 0) { options = {}; }
        this.toasts.push(__assign({ textOrTpl: textOrTpl }, options));
    };
    ToastService.prototype.remove = function (toast) {
        this.toasts = this.toasts.filter(function (t) { return t !== toast; });
    };
    ToastService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "./src/app/component/typehead/typehead.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/typehead/typehead.component.ts ***!
  \**********************************************************/
/*! exports provided: WikipediaService, NgbdtypeheadBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikipediaService", function() { return WikipediaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdtypeheadBasicComponent", function() { return NgbdtypeheadBasicComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WIKI_URL = 'https://en.wikipedia.org/w/api.php';
var PARAMS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]({
    fromObject: {
        action: 'opensearch',
        format: 'json',
        origin: '*'
    }
});
var states = [
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District Of Columbia',
    'Federated States Of Micronesia',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Marshall Islands',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Palau',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Islands',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
];
var statesWithFlags = [
    { name: 'Alabama', flag: '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png' },
    { name: 'Alaska', flag: 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png' },
    { name: 'Arizona', flag: '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png' },
    { name: 'Arkansas', flag: '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png' },
    { name: 'California', flag: '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png' },
    { name: 'Colorado', flag: '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png' },
    { name: 'Connecticut', flag: '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png' },
    { name: 'Delaware', flag: 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png' },
    { name: 'Florida', flag: 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png' },
    {
        name: 'Georgia',
        flag: '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'
    },
    { name: 'Hawaii', flag: 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png' },
    { name: 'Idaho', flag: 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png' },
    { name: 'Illinois', flag: '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png' },
    { name: 'Indiana', flag: 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png' },
    { name: 'Iowa', flag: 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png' },
    { name: 'Kansas', flag: 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png' },
    { name: 'Kentucky', flag: '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png' },
    { name: 'Louisiana', flag: 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png' },
    { name: 'Maine', flag: '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png' },
    { name: 'Maryland', flag: 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png' },
    { name: 'Massachusetts', flag: 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png' },
    { name: 'Michigan', flag: 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png' },
    { name: 'Minnesota', flag: 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png' },
    { name: 'Mississippi', flag: '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png' },
    { name: 'Missouri', flag: '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png' },
    { name: 'Montana', flag: 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png' },
    { name: 'Nebraska', flag: '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png' },
    { name: 'Nevada', flag: 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png' },
    { name: 'New Hampshire', flag: '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png' },
    { name: 'New Jersey', flag: '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png' },
    { name: 'New Mexico', flag: 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png' },
    { name: 'New York', flag: '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png' },
    { name: 'North Carolina', flag: 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png' },
    { name: 'North Dakota', flag: 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png' },
    { name: 'Ohio', flag: '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png' },
    { name: 'Oklahoma', flag: '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png' },
    { name: 'Oregon', flag: 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png' },
    { name: 'Pennsylvania', flag: 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png' },
    { name: 'Rhode Island', flag: 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png' },
    { name: 'South Carolina', flag: '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png' },
    { name: 'South Dakota', flag: '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png' },
    { name: 'Tennessee', flag: '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png' },
    { name: 'Texas', flag: 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png' },
    { name: 'Utah', flag: 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png' },
    { name: 'Vermont', flag: '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png' },
    { name: 'Virginia', flag: '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png' },
    { name: 'Washington', flag: '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png' },
    { name: 'West Virginia', flag: '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png' },
    { name: 'Wisconsin', flag: '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png' },
    { name: 'Wyoming', flag: 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png' }
];
var WikipediaService = /** @class */ (function () {
    function WikipediaService(http) {
        this.http = http;
    }
    WikipediaService.prototype.search = function (term) {
        if (term === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }
        return this.http.get(WIKI_URL, { params: PARAMS.set('search', term) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return response[1]; }));
    };
    WikipediaService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    WikipediaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], WikipediaService);
    return WikipediaService;
}());

var NgbdtypeheadBasicComponent = /** @class */ (function () {
    function NgbdtypeheadBasicComponent(_service) {
        var _this = this;
        this._service = _service;
        this.searching = false;
        this.searchFailed = false;
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.search1 = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return (term.length < 2 ? [] : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10)); })
            // tslint:disable-next-line:semicolon
            );
        };
        this.search2 = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
            var clicksWithClosedPopup$ = _this.click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function () { return !_this.instance.isPopupOpen(); }));
            var inputFocus$ = _this.focus$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return (term === '' ? states : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 10); }));
            // tslint:disable-next-line:semicolon
        };
        this.formatter = function (result) { return result.toUpperCase(); };
        this.search3 = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return (term === '' ? [] : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10)); })
            // tslint:disable-next-line:semicolon
            );
        };
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () { return (_this.searching = true); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (term) {
                return _this._service.search(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () { return (_this.searchFailed = false); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function () {
                    _this.searchFailed = true;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
                }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () { return (_this.searching = false); })
            // tslint:disable-next-line:semicolon
            );
        };
        this.search5 = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return (term === '' ? [] : statesWithFlags.filter(function (v) { return v.name.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10)); })
            // tslint:disable-next-line:semicolon
            );
        };
        this.formatter5 = function (x) { return x.name; };
    }
    NgbdtypeheadBasicComponent.ctorParameters = function () { return [
        { type: WikipediaService }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('instance', { static: true }),
        __metadata("design:type", Object)
    ], NgbdtypeheadBasicComponent.prototype, "instance", void 0);
    NgbdtypeheadBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-ngbd-typehead',
            template: __webpack_require__(/*! raw-loader!./typehead.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/typehead/typehead.component.html"),
            providers: [WikipediaService],
            styles: ["\n      .form-control {\n        width: 300px;\n        display: inline;\n      }\n    "]
        }),
        __metadata("design:paramtypes", [WikipediaService])
    ], NgbdtypeheadBasicComponent);
    return NgbdtypeheadBasicComponent;
}());



/***/ })

}]);
//# sourceMappingURL=component-component-module.js.map