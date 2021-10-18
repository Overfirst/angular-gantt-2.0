export interface GanttTask {
  ID: number;
  parentID?: number;
  name: string;
  start: Date;
  end: Date;
  readyPercent: number;
  color?: string;
}
