export interface DiretoryProp {
  rootId: string;
  title: string;
  parentId: string | number;
  children: Array<DiretoryProp>;
}
