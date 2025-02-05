export type TimeSlot = [day: string, start: number, end: number]

export interface Tutor {
  name: string,
  id: number,
  color: string,
  times: TimeSlot[],
  courses: string[],
}

