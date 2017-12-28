/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
interface JQuery {
  waypoint(option1?: any, option2?: any): any;
  owlCarousel(options?: any): any;
  countTo(options?: any): any;
}